const KEY='life-campaign-v01';
const weekdays=['日','一','二','三','四','五','六'];
const pad=n=>String(n).padStart(2,'0');
const keyOf=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const minute=t=>{if(!t)return null;const [h,m]=t.split(':').map(Number);return h*60+m};
const timeOf=m=>`${pad(Math.floor(m/60))}:${pad(m%60)}`;
const uid=()=>crypto.randomUUID?.()||`${Date.now()}-${Math.random()}`;
const esc=value=>String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
const lines=value=>String(value||'').split('\n').map(x=>x.trim()).filter(Boolean);
const $=id=>document.getElementById(id);
const supplyGroups=[['vegetable','蔬菜'],['fruit','水果'],['protein','肉类与蛋白质'],['other','其他']];
const defaultSupplyItems=[
  ['leafy','深色叶菜','vegetable'],['cruciferous','十字花科蔬菜','vegetable'],['mushroom','菌菇','vegetable'],['root','根茎类','vegetable'],
  ['citrus','柑橘类','fruit'],['berries','浆果类','fruit'],['apple-pear','苹果 / 梨','fruit'],['other-fruit','其他水果','fruit'],
  ['pork','猪肉','protein'],['beef','牛肉','protein'],['lamb','羊肉','protein'],['chicken','鸡肉','protein'],['fish','鱼类','protein'],['shellfish','虾贝类','protein'],
  ['offal','动物内脏','other'],['egg','鸡蛋','other'],['dairy','奶制品','other'],['soy','豆制品','other']
].map(([id,name,group])=>({id,name,group,target:1}));
const defaultDailyEvents=[
  {id:'old-case',name:'旧案重启',description:'推进一项拖延超过 3 天的行动。',xp:25,coins:15},
  {id:'field-notes',name:'补完手记',description:'为一个正在调查的模组写一条手记。',xp:15,coins:8},
  {id:'small-step',name:'小步调查',description:'给一个模组新增并完成一项短行动。',xp:20,coins:10},
  {id:'follow-clue',name:'追查线索',description:'核对一条线索，记下下一步行动。',xp:20,coins:10}
];

const initial={
  schemaVersion:4,updatedAt:'',termStart:'',actions:[],courses:[],habits:[],habitLogs:[],habitRewards:[],supplyItems:defaultSupplyItems,supplyEntries:[],dailyEventTable:defaultDailyEvents,dailyEventRolls:[],
  cases:[],clues:[],clocks:[],npcs:[],journal:[],sessionLogs:[],caseLogs:[],
  progression:{name:'未命名调查员',xp:0,coins:0,avatar:''},skills:[],shop:[],purchases:[]
};
let data;
try{data={...structuredClone(initial),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{data=structuredClone(initial)}
for(const field of ['actions','courses','habits','habitLogs','habitRewards','supplyEntries','dailyEventRolls','cases','clues','clocks','npcs','journal','sessionLogs','caseLogs','skills','shop','purchases'])if(!Array.isArray(data[field]))data[field]=[];
if(!Array.isArray(data.supplyItems))data.supplyItems=structuredClone(defaultSupplyItems);
if(!Array.isArray(data.dailyEventTable))data.dailyEventTable=structuredClone(defaultDailyEvents);
data.progression={...initial.progression,...(data.progression||{})};
data.schemaVersion=4;
data.courses.forEach(course=>{if(Number(course.weekday)===7)course.weekday=0});

let selected=new Date();selected.setHours(0,0,0,0);
let supplyWeek=weekStart(selected);
let currentCaseId=null;
let editingNpcId=null;
let todoPeriod='day';
let todoTouchStartX=null;

const toast=msg=>{const el=$('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1900)};
function persist(){data.updatedAt=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(data));render();setLocalStatus()}
function setSyncStatus(label,state){document.body.classList.remove('syncing','synced','offline','error');document.body.classList.add(state);document.querySelectorAll('[data-sync-status]').forEach(el=>el.textContent=label)}
function setLocalStatus(){setSyncStatus(navigator.onLine?'本机保存 · 可离线使用':'离线使用 · 数据已保存在本机',navigator.onLine?'synced':'offline')}

function academicWeek(date){if(!data.termStart)return 1;const start=new Date(`${data.termStart}T00:00:00`);return Math.floor((date-start)/604800000)+1}
function courseOccurs(c,date){const week=academicWeek(date);if(Number(c.weekday)!==date.getDay()||week<Number(c.firstWeek)||week>Number(c.lastWeek))return false;return c.repeat==='weekly'||(c.repeat==='odd'&&week%2===1)||(c.repeat==='even'&&week%2===0)||(c.repeat==='custom'&&(c.weeks||[]).map(Number).includes(week))}
function parseWeeks(text){const values=new Set();for(const part of text.split(/[,，\s]+/).filter(Boolean)){const match=part.match(/^(\d{1,2})(?:-(\d{1,2}))?$/);if(!match)return null;const first=Number(match[1]),last=Number(match[2]||match[1]);if(first<1||last>40||last<first)return null;for(let week=first;week<=last;week++)values.add(week)}return [...values].sort((a,b)=>a-b)}
function actionReward(a){const difficulty=Number(a.difficulty)||1;return{xp:5+difficulty*5}}
function adjustProgress(xp){data.progression.xp=Math.max(0,Number(data.progression.xp)+xp)}
function weekStart(date){const d=new Date(date);const day=d.getDay()||7;d.setDate(d.getDate()-day+1);d.setHours(0,0,0,0);return d}
function habitPeriod(h,date){return h.repeat==='weekly'?`${keyOf(weekStart(date))}:week`:keyOf(date)}
function habitOccurs(h,date){return h.repeat==='daily'||h.repeat==='weekly'||(h.repeat==='weekdays'&&(h.weekdays||[]).map(Number).includes(date.getDay()))}
function habitValue(h,date){if(h.repeat==='weekly'){const start=weekStart(date),end=new Date(start);end.setDate(end.getDate()+7);return data.habitLogs.filter(l=>l.habitId===h.id&&new Date(`${l.date}T00:00:00`)>=start&&new Date(`${l.date}T00:00:00`)<end).reduce((sum,l)=>sum+Number(l.value||0),0)}const log=data.habitLogs.find(l=>l.habitId===h.id&&l.date===keyOf(date));return Number(log?.value||0)}
function setHabitValue(h,date,value){const dateKey=keyOf(date),before=habitValue(h,date);let log=data.habitLogs.find(l=>l.habitId===h.id&&l.date===dateKey);if(!log){log={id:uid(),habitId:h.id,date:dateKey,value:0};data.habitLogs.push(log)}log.value=Math.max(0,h.repeat==='weekly'?Number(log.value||0)+(value-before):value);const target=Math.max(1,Number(h.target)||1),period=`${h.id}:${habitPeriod(h,date)}`,completed=habitValue(h,date)>=target,wasRewarded=data.habitRewards.includes(period);if(completed&&!wasRewarded){data.habitRewards.push(period);adjustProgress(10);toast('习惯达成：+10 XP')}else if(!completed&&wasRewarded){data.habitRewards=data.habitRewards.filter(x=>x!==period);adjustProgress(-10)}persist()}
function caseById(id){return data.cases.find(c=>c.id===id)}
function npcById(id){return data.npcs.find(n=>n.id===id)}
function skillById(id){return data.skills.find(s=>s.id===id)}

function todoRange(){const start=new Date(selected),end=new Date(selected);if(todoPeriod==='week'){const monday=weekStart(selected);start.setTime(monday.getTime());end.setTime(monday.getTime());end.setDate(end.getDate()+6)}else if(todoPeriod==='month'){start.setDate(1);end.setMonth(end.getMonth()+1,0)}return{start:keyOf(start),end:keyOf(end)}}
function setTodoPeriod(period){todoPeriod=period;document.querySelectorAll('[data-todo-period]').forEach(button=>button.classList.toggle('active',button.dataset.todoPeriod===period));renderTodo()}
function renderTodo(){
  const range=todoRange(),labels={day:'今天',week:'这一周',month:`${selected.getMonth()+1} 月`},copies={day:'只看今天真正要推进的事。',week:'按日期展开这一周，不让远处的任务挤进今天。',month:'用日期分组浏览整月，先捕捉，再慢慢整理。'};
  const actions=data.actions.filter(a=>a.date>=range.start&&a.date<=range.end).sort((a,b)=>a.date.localeCompare(b.date)||Number(a.completed)-Number(b.completed)||(a.createdAt||'').localeCompare(b.createdAt||''));
  $('todo-title').textContent=labels[todoPeriod];$('todo-period-copy').textContent=copies[todoPeriod];$('pending-count').textContent=actions.filter(a=>!a.completed).length;$('quick-todo-date').textContent=`加入 ${selected.getMonth()+1}月${selected.getDate()}日`;
  const row=a=>{const related=a.caseId?caseById(a.caseId):null,skill=skillById(a.skillId);return`<div class="todo-item ${a.completed?'done':''}" data-action-id="${a.id}"><button class="check ${a.completed?'done':''}" data-complete="${a.id}" aria-label="切换完成状态">${a.completed?'✓':''}</button><div class="todo-copy"><strong>${esc(a.title)}</strong><small>${a.duration} 分钟 · ${'★'.repeat(Number(a.difficulty)||1)}${related?` · 《${esc(related.title)}》`:''}${skill?` · ${esc(skill.name)}`:''}</small></div><div class="todo-actions">${!a.completed?`<button class="text-btn" data-move-action="${a.id}">改日期</button>`:''}<button class="text-btn" data-edit-action="${a.id}">编辑</button></div></div>`};
  if(!actions.length){$('pending-list').innerHTML='<div class="empty compact-empty"><b>这里很安静</b>在上面写下第一件事，按回车就会加入。</div>';return}
  if(todoPeriod==='day'){$('pending-list').innerHTML=actions.map(row).join('');return}
  const groups=new Map();for(const action of actions){if(!groups.has(action.date))groups.set(action.date,[]);groups.get(action.date).push(action)}
  $('pending-list').innerHTML=[...groups].map(([date,items])=>{const d=new Date(`${date}T00:00:00`);return`<section class="todo-date-group"><header><strong>${d.getMonth()+1}月${d.getDate()}日</strong><span>周${weekdays[d.getDay()]} · ${items.filter(item=>!item.completed).length} 项待完成</span></header>${items.map(row).join('')}</section>`}).join('')
}

function renderHabits(){
  const habits=data.habits.filter(h=>habitOccurs(h,selected));
  $('habit-list').innerHTML=habits.map(h=>{const value=habitValue(h,selected),target=Math.max(1,Number(h.target)||1),done=value>=target,unit=esc(h.unit||'次');return`<div class="habit-item ${done?'done':''}"><button class="check ${done?'done':''}" data-habit-toggle="${h.id}">${done?'✓':''}</button><div><strong>${esc(h.name)}</strong><small>${h.type==='check'?(done?'已完成':'待完成'):`${value} / ${target} ${unit}`}${h.repeat==='weekly'?' · 本周':''}</small></div>${h.type==='count'?`<button class="step-btn" data-habit-minus="${h.id}">−</button><button class="step-btn" data-habit-plus="${h.id}">＋1</button>`:''}<button class="delete-btn" data-delete-habit="${h.id}">×</button></div>`}).join('')||'<div class="empty compact-empty">还没有今天要打卡的习惯</div>'
}

function renderCourses(){
  $('term-start').value=data.termStart||'';
  $('course-board').innerHTML=[1,2,3,4,5,6,0].map(day=>{const courses=data.courses.filter(c=>Number(c.weekday)===day).sort((a,b)=>a.start.localeCompare(b.start));return`<section class="day-column"><h3>周${weekdays[day]}</h3>${courses.map(c=>`<article class="course-mini"><strong>${esc(c.name)}</strong><span>${c.start}–${c.end}</span><small>${esc(c.location||'地点未设置')} · 第 ${c.firstWeek}–${c.lastWeek} 周 · ${c.repeat==='custom'?`指定：${(c.weeks||[]).join(',')} 周`:{weekly:'每周',odd:'单周',even:'双周'}[c.repeat]}</small><div><button class="text-btn" data-edit-course="${c.id}">编辑</button><button class="text-btn danger-text" data-delete-course="${c.id}">删除</button></div></article>`).join('')||'<p class="day-empty">暂无</p>'}</section>`}).join('')
}

function renderCases(){
  const sorted=[...data.cases].sort((a,b)=>(a.status==='active'?0:1)-(b.status==='active'?0:1));
  $('case-board').innerHTML=sorted.map(c=>{const clueCount=data.clues.filter(x=>x.caseId===c.id).length,actionCount=data.actions.filter(x=>x.caseId===c.id).length,doneCount=data.actions.filter(x=>x.caseId===c.id&&x.completed).length;const days=c.deadline?Math.ceil((new Date(`${c.deadline}T23:59:59`)-new Date())/86400000):null;return`<article class="panel case-card ${c.status==='closed'?'closed':''}"><div class="case-card-top"><span class="case-status">${c.status==='closed'?'已结案':'调查中'}</span><span>${esc(c.theme||'未分类')}</span></div><h3>《${esc(c.title)}》</h3><p>${esc(c.summary||'暂无概要')}</p><div class="case-metrics"><span>行动 ${doneCount}/${actionCount}</span><span>线索 ${clueCount}</span>${days!==null?`<span class="${days<0?'overdue':''}">${days<0?'已逾期':`剩 ${days} 天`}</span>`:''}</div><button class="primary-btn" data-open-case="${c.id}">打开档案</button></article>`}).join('')||'<div class="empty archive-empty"><b>还没有开启模组</b>为论文、考试、健身或任何长期目标建立一份调查档案。</div>'
}

function renderNpcs(){
  $('npc-board').innerHTML=data.npcs.map(n=>{const clues=data.clues.filter(c=>c.sourceNpcId===n.id);return`<article class="panel npc-card"><div class="npc-avatar">♙</div><div><p class="section-code">${esc(n.relation||'NPC')}</p><h3>${esc(n.name)}</h3><div class="npc-tags">${(n.preferences||[]).slice(0,3).map(x=>`<span>♡ ${esc(x)}</span>`).join('')}${(n.important||[]).slice(0,2).map(x=>`<span>! ${esc(x)}</span>`).join('')}</div><details class="npc-details"><summary>完整档案 · 相关线索 ${clues.length} 条</summary><h4>喜好</h4>${(n.preferences||[]).map(x=>`<p>♡ ${esc(x)}</p>`).join('')||'<p>暂无</p>'}<h4>重要信息</h4>${(n.important||[]).map(x=>`<p>! ${esc(x)}</p>`).join('')||'<p>暂无</p>'}<h4>相关线索</h4>${clues.map(c=>`<p>⌕ ${esc(c.title)}${caseById(c.caseId)?` · 《${esc(caseById(c.caseId).title)}》`:''}</p>`).join('')||'<p>暂无</p>'}</details></div><div class="card-actions"><button class="text-btn" data-edit-npc="${n.id}">编辑</button><button class="text-btn danger-text" data-delete-npc="${n.id}">删除</button></div></article>`}).join('')||'<div class="empty archive-empty"><b>还没有 NPC 档案</b>记录现实人物的喜好、重要信息和提供过的线索。</div>'
}

function dailyEventOn(date){return data.dailyEventRolls.find(roll=>roll.date===date)}
function eventStatus(status){return {rolled:'待决定',accepted:'调查中',completed:'已完成',abandoned:'已放弃'}[status]||'待决定'}
function renderDailyEvent(){
  const date=keyOf(selected),roll=dailyEventOn(date),isToday=date===keyOf(new Date());
  $('daily-event-content').innerHTML=roll?`<div class="daily-event-result"><span class="event-status ${esc(roll.status)}">${eventStatus(roll.status)}</span><strong>${esc(roll.name)}</strong><p>${esc(roll.description)}</p><small>完成奖励：${Number(roll.xp)||0} XP</small><div class="daily-event-actions">${roll.status==='rolled'?`<button class="primary-btn" data-event-accept="${esc(roll.id)}">接受</button><button class="ghost-btn" data-event-abandon="${esc(roll.id)}">放弃</button>`:roll.status==='accepted'?`<button class="primary-btn" data-event-complete="${esc(roll.id)}">标记完成</button><button class="ghost-btn" data-event-abandon="${esc(roll.id)}">放弃</button>`:''}</div></div>`:`<p class="muted">${isToday?'今天还没有抽取事件。':'这一天没有抽取事件。'}</p>${isToday&&data.dailyEventTable.length?'<button class="primary-btn event-roll-btn" id="roll-daily-event">🎲 抽取今日事件</button>':''}`;
  $('event-table-list').innerHTML=data.dailyEventTable.map(event=>`<div class="event-table-row"><div><strong>${esc(event.name)}</strong><small>${esc(event.description)} · ${Number(event.xp)||0} XP</small></div><button class="text-btn" data-edit-daily-event="${esc(event.id)}">编辑</button><button class="delete-btn" data-delete-daily-event="${esc(event.id)}" aria-label="删除${esc(event.name)}">×</button></div>`).join('')||'<p class="muted">事件表为空。添加一条后就可以抽取。</p>';
}

function renderInvestigator(){
  const xp=Number(data.progression.xp)||0,level=Math.floor(xp/100)+1,within=xp%100;
  $('investigator-name').textContent=data.progression.name||'未命名调查员';$('level-value').textContent=pad(level);$('xp-value').textContent=xp;$('level-progress-bar').style.width=`${within}%`;$('next-level-copy').textContent=`距离下一级还需 ${100-within} XP`;
  if(data.progression.avatar){$('avatar-preview').src=data.progression.avatar;$('avatar-preview').hidden=false;$('avatar-placeholder').hidden=true}else{$('avatar-preview').hidden=true;$('avatar-placeholder').hidden=false}
  $('skill-board').innerHTML=data.skills.map(s=>{const level=Math.floor(Number(s.xp||0)/100)+1;return`<div class="skill-row"><div><strong>${esc(s.name)}</strong><small>Lv.${level} · ${Number(s.xp||0)} XP</small></div><div class="skill-progress"><i style="width:${Number(s.xp||0)%100}%"></i></div><button class="delete-btn" data-delete-skill="${s.id}">×</button></div>`}).join('')||'<div class="empty compact-empty">添加技能后，关联行动会积累技能经验。</div>';
}

function renderLogs(){
  $('stat-actions').textContent=data.actions.filter(a=>a.completed).length;$('stat-courses').textContent=data.courses.length;$('stat-cases').textContent=data.cases.filter(c=>c.status==='active').length;$('stat-clues').textContent=data.clues.length;
  $('session-log-list').innerHTML=[...data.sessionLogs].sort((a,b)=>b.date.localeCompare(a.date)).map(log=>{const event=dailyEventOn(log.date);return`<article class="log-entry"><time>${esc(log.date)}</time><strong>${log.done} / ${log.total} 项行动完成</strong><p>${esc(log.note||'没有留下备注')}</p>${event?`<p>每日事件：${esc(event.name)} · ${eventStatus(event.status)}</p>`:''}</article>`}).join('')||'<div class="empty compact-empty">完成一次“今日结算”后会出现在这里。</div>';
  $('case-log-list').innerHTML=[...data.caseLogs].sort((a,b)=>b.closedAt.localeCompare(a.closedAt)).map(log=>`<article class="log-entry"><time>${new Date(log.closedAt).toLocaleDateString('zh-CN')}</time><strong>《${esc(log.title)}》</strong><p>${log.completedActions}/${log.actionCount} 项行动 · ${log.clueCount} 条线索 · ${log.journalCount} 篇手记</p>${log.actions||log.clues||log.notes?`<details class="case-log-details"><summary>查看结案记录</summary><h4>行动</h4>${(log.actions||[]).map(a=>`<p>${a.completed?'✓':'□'} ${esc(a.title)}</p>`).join('')||'<p>暂无</p>'}<h4>线索</h4>${(log.clues||[]).map(c=>`<p>⌕ ${esc(c.title)}</p>`).join('')||'<p>暂无</p>'}<h4>调查手记</h4>${(log.notes||[]).map(n=>`<p>${esc(n.text)}</p>`).join('')||'<p>暂无</p>'}</details>`:''}</article>`).join('')||'<div class="empty compact-empty">模组结案后会自动生成报告。</div>';
  $('daily-event-log-list').innerHTML=[...data.dailyEventRolls].sort((a,b)=>b.date.localeCompare(a.date)).map(roll=>`<article class="event-history-entry"><time>${esc(roll.date)}</time><strong>${esc(roll.name)}</strong><span class="event-status ${esc(roll.status)}">${eventStatus(roll.status)}</span><p>${esc(roll.description)}</p></article>`).join('')||'<div class="empty compact-empty">抽取每日事件后，这里会留下记录。</div>';
}

function supplyForWeek(date){const start=keyOf(weekStart(date)),endDate=weekStart(date);endDate.setDate(endDate.getDate()+7);const end=keyOf(endDate);return data.supplyEntries.filter(entry=>entry.date>=start&&entry.date<end)}
function supplyCounts(date){const counts=new Map();for(const entry of supplyForWeek(date))for(const id of new Set(entry.itemIds||[]))counts.set(id,(counts.get(id)||0)+1);return counts}
function supplyCoverage(date){const counts=supplyCounts(date);return data.supplyItems.filter(item=>(counts.get(item.id)||0)>=Math.max(1,Number(item.target)||1)).length}
function supplyItem(id){return data.supplyItems.find(item=>item.id===id)}
function renderSupply(){
  const todayCovered=supplyCoverage(selected);
  $('supply-quick-copy').textContent=`${keyOf(weekStart(selected))} 开始的一周 · 已覆盖 ${todayCovered} / ${data.supplyItems.length} 种`;
  const end=new Date(supplyWeek);end.setDate(end.getDate()+6);
  $('supply-week-label').textContent=`${keyOf(supplyWeek)} — ${keyOf(end)}`;
  const counts=supplyCounts(supplyWeek),covered=supplyCoverage(supplyWeek);
  $('supply-coverage').textContent=`已覆盖 ${covered} / ${data.supplyItems.length} 种`;
  $('supply-board').innerHTML=supplyGroups.map(([group,label])=>{const items=data.supplyItems.filter(item=>item.group===group),done=items.filter(item=>(counts.get(item.id)||0)>=Math.max(1,Number(item.target)||1)).length;return`<section class="supply-group"><h3>${label}<span>${done} / ${items.length}</span></h3><div class="supply-items">${items.map(item=>{const count=counts.get(item.id)||0,target=Math.max(1,Number(item.target)||1),complete=count>=target;return`<div class="supply-item ${complete?'covered':''}"><span aria-hidden="true">${complete?'✓':'○'}</span><strong>${esc(item.name)}</strong><small>${target>1?`${count} / ${target} 次`:complete?'本周已吃过':'尚未记录'}</small><button class="text-btn" data-edit-supply-item="${esc(item.id)}" aria-label="设置${esc(item.name)}的目标">设置</button></div>`}).join('')||'<p class="muted">暂无种类</p>'}</div></section>`}).join('');
  $('supply-history').innerHTML=[...supplyForWeek(supplyWeek)].sort((a,b)=>b.date.localeCompare(a.date)||String(b.createdAt).localeCompare(String(a.createdAt))).map(entry=>`<article class="supply-entry"><div><time>${esc(entry.date)}</time><strong>${(entry.itemIds||[]).map(id=>esc(supplyItem(id)?.name||'已移除种类')).join(' · ')}</strong>${entry.note?`<p>${esc(entry.note)}</p>`:''}</div><button class="text-btn" data-edit-supply="${esc(entry.id)}">编辑</button><button class="delete-btn" data-delete-supply="${esc(entry.id)}" aria-label="删除这餐记录">×</button></article>`).join('')||'<div class="empty compact-empty">这一周还没有补给记录，吃完饭顺手记一餐吧。</div>';
}
function renderSupplyPicker(checked=[]){
  const chosen=new Set(checked);
  $('supply-picker').innerHTML=supplyGroups.map(([group,label])=>{const items=data.supplyItems.filter(item=>item.group===group);return`<fieldset><legend>${label}</legend><div class="supply-pick-grid">${items.map(item=>`<label><input type="checkbox" value="${esc(item.id)}" ${chosen.has(item.id)?'checked':''}><span>${esc(item.name)}</span></label>`).join('')}</div></fieldset>`}).join('')
}
function openSupply(entry=null,date=keyOf(selected)){
  $('supply-form').reset();$('supply-entry-id').value=entry?.id||'';$('supply-dialog-title').textContent=entry?'编辑补给记录':'记录一餐';$('supply-date').value=entry?.date||date;$('supply-note').value=entry?.note||'';renderSupplyPicker(entry?.itemIds||[]);showDialog('supply-dialog')
}
function openSupplyItem(item=null){$('supply-item-form').reset();$('supply-item-id').value=item?.id||'';$('supply-item-title').textContent=item?'设置食物种类':'自定义食物种类';$('supply-item-name').value=item?.name||'';$('supply-item-group').value=item?.group||'vegetable';$('supply-item-target').value=Number(item?.target)||1;showDialog('supply-item-dialog')}

function refreshSelects(){
  const caseOptions='<option value="">不属于模组</option>'+data.cases.filter(c=>c.status==='active').map(c=>`<option value="${c.id}">${esc(c.title)}</option>`).join('');
  const skillOptions='<option value="">不关联技能</option>'+data.skills.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('');
  const npcOptions='<option value="">无 / 其他来源</option>'+data.npcs.map(n=>`<option value="${n.id}">${esc(n.name)}</option>`).join('');
  const caseValue=$('action-case').value,skillValue=$('action-skill').value,npcValue=$('clue-source').value;
  $('action-case').innerHTML=caseOptions;$('action-skill').innerHTML=skillOptions;$('clue-source').innerHTML=npcOptions;
  if([...$('action-case').options].some(o=>o.value===caseValue))$('action-case').value=caseValue;
  if([...$('action-skill').options].some(o=>o.value===skillValue))$('action-skill').value=skillValue;
  if([...$('clue-source').options].some(o=>o.value===npcValue))$('clue-source').value=npcValue
}

function render(){
  $('date-title').textContent=`${selected.getMonth()+1}月${selected.getDate()}日 · 周${weekdays[selected.getDay()]}`;$('week-label').textContent=`第 ${academicWeek(selected)} 周`;
  renderTodo();renderHabits();renderCourses();renderCases();renderNpcs();renderDailyEvent();renderInvestigator();renderLogs();renderSupply();refreshSelects();
  const dayActions=data.actions.filter(a=>a.date===keyOf(selected)),done=dayActions.filter(a=>a.completed).length;
  $('complete-rate').textContent=`${done} / ${dayActions.length}`;$('progress-bar').style.width=`${dayActions.length?done/dayActions.length*100:0}%`;$('brief-copy').textContent=dayActions.length?(done===dayActions.length?'今日行动已经全部完成。':`还有 ${dayActions.length-done} 项行动等待推进。`):'今天的调查尚未开始。';
  if($('case-detail-dialog').open&&currentCaseId)renderCaseDetail()
}

function showDialog(id){$(id).showModal()}
function openAction(action=null,caseId=''){
  $('action-form').reset();$('action-id').value=action?.id||'';$('action-dialog-title').textContent=action?'编辑行动':'新建行动';$('action-title').value=action?.title||'';$('action-date').value=action?.date||keyOf(selected);$('action-duration').value=String(action?.duration||30);$('action-difficulty').value=String(action?.difficulty||3);refreshSelects();$('action-case').value=action?.caseId||caseId||'';$('action-skill').value=action?.skillId||'';showDialog('action-dialog')
}
function openMoveAction(action){if(!action)return;$('move-action-form').reset();$('move-action-id').value=action.id;$('move-action-name').textContent=action.title;$('move-action-date').value=action.date||keyOf(selected);showDialog('move-action-dialog')}
function openCourse(course=null){$('course-form').reset();$('course-id').value=course?.id||'';$('course-dialog-title').textContent=course?'编辑课程':'添加课程';$('course-name').value=course?.name||'';$('course-weekday').value=String(course?.weekday??1);$('course-location').value=course?.location||'';$('course-start').value=course?.start||'08:30';$('course-end').value=course?.end||'10:05';$('course-first-week').value=course?.firstWeek||1;$('course-last-week').value=course?.lastWeek||20;$('course-repeat').value=course?.repeat||'weekly';$('course-weeks').value=(course?.weeks||[]).join(',');$('course-weeks-wrap').hidden=$('course-repeat').value!=='custom';showDialog('course-dialog')}
function renderCaseDetail(){
  const c=caseById(currentCaseId);if(!c)return;
  $('case-detail-title').textContent=`《${c.title}》`;$('case-detail-meta').textContent=`${c.theme||'未分类'} · ${c.status==='closed'?'已结案':'调查中'}${c.deadline?` · Deadline ${c.deadline}`:''}`;$('case-detail-summary').textContent=c.summary||'暂无概要';$('case-toggle-status').textContent=c.status==='closed'?'重新开启':'结案';
  $('case-actions').innerHTML=data.actions.filter(a=>a.caseId===c.id).sort((a,b)=>a.date.localeCompare(b.date)).map(a=>`<article class="case-action-item"><button class="check ${a.completed?'done':''}" data-complete="${a.id}">${a.completed?'✓':''}</button><div><strong>${esc(a.title)}</strong><small>${esc(a.date)}${a.time?` · ${esc(a.time)}`:''}</small></div><button class="edit-btn" data-edit-action="${a.id}">编辑</button></article>`).join('')||'<p class="muted">尚未添加行动。</p>';
  $('case-clues').innerHTML=data.clues.filter(x=>x.caseId===c.id).map(x=>`<article class="clue-item"><span>⌕</span><div><strong>${esc(x.title)}</strong><p>${esc(x.detail||'')}</p><small>${x.sourceNpcId&&npcById(x.sourceNpcId)?`来源：${esc(npcById(x.sourceNpcId).name)} · `:''}${new Date(x.obtainedAt).toLocaleDateString('zh-CN')}</small></div><button class="delete-btn" data-delete-clue="${x.id}">×</button></article>`).join('')||'<p class="muted">尚未获得线索。</p>';
  $('case-clocks').innerHTML=data.clocks.filter(x=>x.caseId===c.id).map(x=>{const cells=Array.from({length:Number(x.max)},(_,i)=>`<i class="${i<Number(x.current)?'filled':''}"></i>`).join('');return`<article class="clock-item"><div><strong>${esc(x.name)}</strong><small>${esc(x.note||'')}</small></div><div class="clock-track">${cells}</div><div class="clock-controls"><button data-clock-minus="${x.id}">−</button><b>${x.current}/${x.max}</b><button data-clock-plus="${x.id}">＋</button><button class="delete-btn" data-delete-clock="${x.id}">×</button></div></article>`}).join('')||'<p class="muted">尚未建立 Clock。</p>';
  $('case-journal').innerHTML=[...data.journal].filter(x=>x.caseId===c.id).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map(x=>`<article class="journal-item"><time>${new Date(x.createdAt).toLocaleString('zh-CN')}</time><p>${esc(x.text)}</p><button class="delete-btn" data-delete-journal="${x.id}">删除</button></article>`).join('')||'<p class="muted">还没有调查手记。</p>'
}
function openCase(id){currentCaseId=id;renderCaseDetail();showDialog('case-detail-dialog')}

document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.tab===btn.dataset.tab));document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));$(`${btn.dataset.tab}-view`).classList.add('active');window.scrollTo(0,0)}));
document.querySelectorAll('[data-archive-section]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-archive-section]').forEach(x=>x.classList.toggle('active',x===btn));document.querySelectorAll('.archive-section').forEach(x=>x.classList.remove('active'));$(`${btn.dataset.archiveSection}-section`).classList.add('active')}));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()})});
document.querySelectorAll('[data-todo-period]').forEach(button=>button.addEventListener('click',()=>setTodoPeriod(button.dataset.todoPeriod)));
$('todo-panel').addEventListener('touchstart',event=>{todoTouchStartX=event.changedTouches[0]?.clientX??null},{passive:true});
$('todo-panel').addEventListener('touchend',event=>{if(todoTouchStartX===null)return;const delta=(event.changedTouches[0]?.clientX??todoTouchStartX)-todoTouchStartX;todoTouchStartX=null;if(Math.abs(delta)<45)return;const periods=['day','week','month'],index=periods.indexOf(todoPeriod),next=delta<0?Math.min(2,index+1):Math.max(0,index-1);if(next!==index)setTodoPeriod(periods[next])},{passive:true});

$('prev-day').onclick=()=>{selected.setDate(selected.getDate()-1);render()};
$('next-day').onclick=()=>{selected.setDate(selected.getDate()+1);render()};
$('go-today').onclick=()=>{selected=new Date();selected.setHours(0,0,0,0);render()};
$('add-action').onclick=()=>openAction();
$('quick-todo-form').onsubmit=e=>{e.preventDefault();const input=$('quick-todo-title'),title=input.value.trim();if(!title)return;data.actions.push({id:uid(),title,date:keyOf(selected),time:'',duration:30,difficulty:1,notes:'',caseId:null,skillId:null,completed:false,completedAt:null,rewardXp:null,rewardCoins:null,createdAt:new Date().toISOString()});input.value='';persist();requestAnimationFrame(()=>input.focus());toast('待办已添加，可继续输入')};
$('move-action-form').onsubmit=e=>{e.preventDefault();const action=data.actions.find(a=>a.id===$('move-action-id').value),date=$('move-action-date').value;if(!action||!date)return;action.date=date;action.time='';action.completed=false;action.completedAt=null;$('move-action-dialog').close();persist();toast('未完成行动已重新安排')};
$('add-course').onclick=()=>openCourse();
$('course-repeat').onchange=e=>$('course-weeks-wrap').hidden=e.target.value!=='custom';
$('add-habit').onclick=()=>{$('habit-form').reset();$('habit-target').value=1;$('habit-weekdays-wrap').hidden=true;showDialog('habit-dialog')};
$('habit-repeat').onchange=e=>$('habit-weekdays-wrap').hidden=e.target.value!=='weekdays';
$('add-case').onclick=()=>{$('case-form').reset();showDialog('case-dialog')};
$('add-npc').onclick=()=>{editingNpcId=null;$('npc-form').reset();showDialog('npc-dialog')};
$('add-skill').onclick=()=>{$('skill-form').reset();showDialog('skill-dialog')};
$('add-daily-event').onclick=()=>openDailyEvent();
$('record-supply-today').onclick=()=>openSupply();
$('record-supply-log').onclick=()=>openSupply(null,keyOf(weekStart(new Date()))===keyOf(supplyWeek)?keyOf(new Date()):keyOf(supplyWeek));
$('add-supply-item').onclick=()=>openSupplyItem();
$('supply-prev-week').onclick=()=>{supplyWeek.setDate(supplyWeek.getDate()-7);renderSupply()};
$('supply-next-week').onclick=()=>{supplyWeek.setDate(supplyWeek.getDate()+7);renderSupply()};
$('supply-current-week').onclick=()=>{supplyWeek=weekStart(new Date());renderSupply()};

$('supply-form').onsubmit=e=>{e.preventDefault();const date=$('supply-date').value,itemIds=[...document.querySelectorAll('#supply-picker input:checked')].map(input=>input.value).filter(id=>supplyItem(id));if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!itemIds.length){toast('请选择日期和至少一种食物');return}const id=$('supply-entry-id').value,existing=data.supplyEntries.find(entry=>entry.id===id),entry={id:id||uid(),date,itemIds:[...new Set(itemIds)],note:$('supply-note').value.trim(),createdAt:existing?.createdAt||new Date().toISOString()};if(existing)Object.assign(existing,entry);else data.supplyEntries.push(entry);supplyWeek=weekStart(new Date(`${date}T00:00:00`));$('supply-dialog').close();persist();toast(existing?'补给记录已更新':'本餐补给已记录')};
$('supply-item-form').onsubmit=e=>{e.preventDefault();const name=$('supply-item-name').value.trim(),group=$('supply-item-group').value,target=Number($('supply-item-target').value),id=$('supply-item-id').value,existing=supplyItem(id);if(!name||!supplyGroups.some(x=>x[0]===group)||!Number.isInteger(target)||target<1||target>20){toast('请填写有效的食物种类和目标次数');return}if(data.supplyItems.some(item=>item.id!==id&&item.name===name&&item.group===group)){toast('这个分类里已有同名种类');return}if(existing)Object.assign(existing,{name,group,target});else data.supplyItems.push({id:uid(),name,group,target});$('supply-item-dialog').close();persist();toast(existing?'食物种类已更新':'食物种类已添加')};
function openDailyEvent(event=null){$('daily-event-form').reset();$('daily-event-id').value=event?.id||'';$('daily-event-dialog-title').textContent=event?'编辑每日事件':'添加每日事件';$('daily-event-name').value=event?.name||'';$('daily-event-description').value=event?.description||'';$('daily-event-xp').value=event?.xp??20;showDialog('daily-event-dialog')}
$('daily-event-form').onsubmit=e=>{e.preventDefault();const id=$('daily-event-id').value,existing=data.dailyEventTable.find(item=>item.id===id),name=$('daily-event-name').value.trim(),description=$('daily-event-description').value.trim(),xp=Number($('daily-event-xp').value);if(!name||!description||!Number.isInteger(xp)||xp<0||xp>100){toast('请填写事件内容和有效的 XP');return}const event={id:id||uid(),name,description,xp,coins:existing?.coins||0};if(existing)Object.assign(existing,event);else data.dailyEventTable.push(event);$('daily-event-dialog').close();persist();toast(existing?'事件已更新':'事件已加入随机表')};

$('action-form').onsubmit=e=>{
  e.preventDefault();const id=$('action-id').value,existing=data.actions.find(a=>a.id===id),oldSkillId=existing?.skillId;
  const action={id:id||uid(),title:$('action-title').value.trim(),date:$('action-date').value,time:existing?.time||'',duration:Number($('action-duration').value),difficulty:Number($('action-difficulty').value),notes:existing?.notes||'',caseId:$('action-case').value||null,skillId:$('action-skill').value||null,completed:existing?.completed||false,completedAt:existing?.completedAt||null,rewardXp:existing?.rewardXp||null,rewardCoins:existing?.rewardCoins||null,createdAt:existing?.createdAt||new Date().toISOString()};
  if(existing?.completed&&oldSkillId!==action.skillId){const earned=Number(existing.rewardXp||actionReward(existing).xp),oldSkill=skillById(oldSkillId),newSkill=skillById(action.skillId);if(oldSkill)oldSkill.xp=Math.max(0,Number(oldSkill.xp||0)-earned);if(newSkill)newSkill.xp=Number(newSkill.xp||0)+earned}
  if(existing)Object.assign(existing,action);else data.actions.push(action);$('action-dialog').close();persist();toast(existing?'行动已更新':'行动已加入调查日程')
};
$('course-form').onsubmit=e=>{e.preventDefault();if(minute($('course-end').value)<=minute($('course-start').value)){toast('结束时间需要晚于开始时间');return}if(Number($('course-last-week').value)<Number($('course-first-week').value)){toast('结束周不能早于起始周');return}const weeks=$('course-repeat').value==='custom'?parseWeeks($('course-weeks').value):[];if(weeks===null||($('course-repeat').value==='custom'&&!weeks.length)){toast('请填写有效的指定周数，例如 1,3,5-8');return}const id=$('course-id').value,existing=data.courses.find(c=>c.id===id),course={id:id||uid(),name:$('course-name').value.trim(),weekday:Number($('course-weekday').value),location:$('course-location').value.trim(),start:$('course-start').value,end:$('course-end').value,firstWeek:Number($('course-first-week').value),lastWeek:Number($('course-last-week').value),repeat:$('course-repeat').value,weeks};if(existing)Object.assign(existing,course);else data.courses.push(course);$('course-dialog').close();persist();toast(existing?'课程已更新':'课程已存入档案')};
$('habit-form').onsubmit=e=>{e.preventDefault();const repeat=$('habit-repeat').value,weekdaysPicked=[...document.querySelectorAll('#habit-weekdays-wrap input:checked')].map(x=>Number(x.value));if(repeat==='weekdays'&&!weekdaysPicked.length){toast('请至少选择一个星期');return}data.habits.push({id:uid(),name:$('habit-name').value.trim(),type:$('habit-type').value,target:$('habit-type').value==='check'?1:Number($('habit-target').value),unit:$('habit-unit').value.trim()||'次',repeat,weekdays:weekdaysPicked,createdAt:new Date().toISOString()});$('habit-dialog').close();persist();toast('习惯已加入日程')};
$('case-form').onsubmit=e=>{e.preventDefault();data.cases.push({id:uid(),title:$('case-title').value.trim(),theme:$('case-theme').value.trim(),deadline:$('case-deadline').value,summary:$('case-summary').value.trim(),status:'active',createdAt:new Date().toISOString(),closedAt:null});$('case-dialog').close();persist();toast('新模组已开启')};
$('npc-form').onsubmit=e=>{e.preventDefault();const npc={name:$('npc-name').value.trim(),relation:$('npc-relation').value.trim(),preferences:lines($('npc-preferences').value),important:lines($('npc-important').value)};const existing=data.npcs.find(n=>n.id===editingNpcId);if(existing)Object.assign(existing,npc);else data.npcs.push({id:uid(),...npc,createdAt:new Date().toISOString()});$('npc-dialog').close();persist();toast(existing?'NPC 档案已更新':'NPC 已存入档案')};
$('skill-form').onsubmit=e=>{e.preventDefault();data.skills.push({id:uid(),name:$('skill-name').value.trim(),xp:0,createdAt:new Date().toISOString()});$('skill-dialog').close();persist();toast('技能已添加')};
$('clue-form').onsubmit=e=>{e.preventDefault();data.clues.push({id:uid(),caseId:currentCaseId,title:$('clue-title').value.trim(),detail:$('clue-detail').value.trim(),sourceNpcId:$('clue-source').value||null,obtainedAt:new Date().toISOString()});$('clue-dialog').close();persist();openCase(currentCaseId);toast('线索已归档')};
$('clock-form').onsubmit=e=>{e.preventDefault();const max=Number($('clock-max').value),current=Math.min(max,Number($('clock-current').value));data.clocks.push({id:uid(),caseId:currentCaseId,name:$('clock-name').value.trim(),current,max,note:$('clock-note').value.trim()});$('clock-dialog').close();persist();openCase(currentCaseId);toast('Clock 已建立')};
$('journal-form').onsubmit=e=>{e.preventDefault();data.journal.push({id:uid(),caseId:currentCaseId,text:$('journal-text').value.trim(),createdAt:new Date().toISOString()});$('journal-dialog').close();persist();openCase(currentCaseId);toast('调查手记已保存')};

$('case-add-action').onclick=()=>{const id=currentCaseId;$('case-detail-dialog').close();openAction(null,id)};
$('case-add-clue').onclick=()=>{$('case-detail-dialog').close();$('clue-form').reset();refreshSelects();showDialog('clue-dialog')};
$('case-add-clock').onclick=()=>{$('case-detail-dialog').close();$('clock-form').reset();$('clock-current').value=0;$('clock-max').value=6;showDialog('clock-dialog')};
$('case-add-journal').onclick=()=>{$('case-detail-dialog').close();$('journal-form').reset();showDialog('journal-dialog')};
$('case-toggle-status').onclick=()=>{const c=caseById(currentCaseId);if(!c)return;if(c.status==='active'){c.status='closed';c.closedAt=new Date().toISOString();const actions=data.actions.filter(a=>a.caseId===c.id),clues=data.clues.filter(x=>x.caseId===c.id),notes=data.journal.filter(x=>x.caseId===c.id);data.caseLogs.push({id:uid(),caseId:c.id,title:c.title,closedAt:c.closedAt,actionCount:actions.length,completedActions:actions.filter(a=>a.completed).length,clueCount:clues.length,journalCount:notes.length,summary:c.summary,actions:actions.map(a=>({title:a.title,completed:a.completed,date:a.date})),clues:clues.map(x=>({title:x.title,detail:x.detail,sourceNpc:npcById(x.sourceNpcId)?.name||''})),notes:notes.map(x=>({text:x.text,createdAt:x.createdAt}))});toast('模组已结案，Case Log 已生成')}else{c.status='active';c.closedAt=null;toast('模组已重新开启')}$('case-detail-dialog').close();persist()};

$('settle-day').onclick=()=>{const dayActions=data.actions.filter(a=>a.date===keyOf(selected)),done=dayActions.filter(a=>a.completed).length;$('session-summary').innerHTML=`<strong>${keyOf(selected)}</strong><p>完成 ${done} / ${dayActions.length} 项行动 · 今日课程 ${data.courses.filter(c=>courseOccurs(c,selected)).length} 门</p>`;const existing=data.sessionLogs.find(l=>l.date===keyOf(selected));$('session-note').value=existing?.note||'';showDialog('session-dialog')};
$('session-form').onsubmit=e=>{e.preventDefault();const date=keyOf(selected),actions=data.actions.filter(a=>a.date===date),entry={id:uid(),date,total:actions.length,done:actions.filter(a=>a.completed).length,note:$('session-note').value.trim(),createdAt:new Date().toISOString()};const existing=data.sessionLogs.find(l=>l.date===date);if(existing)Object.assign(existing,entry,{id:existing.id});else data.sessionLogs.push(entry);$('session-dialog').close();persist();toast('Session Log 已生成')};

$('term-start').onchange=e=>{data.termStart=e.target.value;persist();toast('学期周数已更新')};
$('rename-investigator').onclick=()=>{const name=prompt('调查员姓名',data.progression.name||'');if(name?.trim()){data.progression.name=name.trim().slice(0,40);persist()}};
$('avatar-input').onchange=e=>{const file=e.target.files[0];if(!file)return;if(file.size>2_000_000){toast('请选择小于 2MB 的图片');return}const reader=new FileReader();reader.onload=()=>{data.progression.avatar=reader.result;persist();toast('你的角色素材已保存到此设备')};reader.readAsDataURL(file)};

$('export-data').onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`life-campaign-backup-${keyOf(new Date())}.json`;a.click();URL.revokeObjectURL(url);toast('备份已导出')};
$('import-data').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{const imported=JSON.parse(await file.text());if(!imported||!Array.isArray(imported.actions)||!Array.isArray(imported.courses))throw new Error();const avatar=imported.progression?.avatar||data.progression.avatar;data={...structuredClone(initial),...imported,progression:{...initial.progression,...(imported.progression||{}),avatar}};persist();toast('备份已导入并保存在本机')}catch{toast('这不是有效的 Life Campaign 备份')}finally{e.target.value=''}};

document.body.addEventListener('click',e=>{
  const target=e.target.closest('button');if(!target)return;
  if(target.dataset.moveAction){openMoveAction(data.actions.find(a=>a.id===target.dataset.moveAction));return}
  if(target.dataset.movePreset){const base=new Date(selected);if(target.dataset.movePreset==='tomorrow')base.setDate(base.getDate()+1);if(target.dataset.movePreset==='next-week'){const day=base.getDay()||7;base.setDate(base.getDate()+(8-day))}$('move-action-date').value=keyOf(base);return}
  if(target.id==='roll-daily-event'){
    const date=keyOf(selected);if(date!==keyOf(new Date())||dailyEventOn(date)||!data.dailyEventTable.length)return;
    const event=data.dailyEventTable[Math.floor(Math.random()*data.dailyEventTable.length)];data.dailyEventRolls.push({id:uid(),date,eventId:event.id,name:event.name,description:event.description,xp:event.xp,coins:event.coins,status:'rolled',rolledAt:new Date().toISOString(),completedAt:null});persist();toast('今日事件已抽取，今天不能重抽');return
  }
  if(target.dataset.eventAccept){const roll=data.dailyEventRolls.find(x=>x.id===target.dataset.eventAccept);if(roll?.status==='rolled'){roll.status='accepted';persist();toast('已接受每日事件')}return}
  if(target.dataset.eventAbandon){const roll=data.dailyEventRolls.find(x=>x.id===target.dataset.eventAbandon);if(roll&&['rolled','accepted'].includes(roll.status)&&confirm('放弃今日事件？今天不能重新抽取。')){roll.status='abandoned';persist();toast('今日事件已放弃')}return}
  if(target.dataset.eventComplete){const roll=data.dailyEventRolls.find(x=>x.id===target.dataset.eventComplete);if(roll?.status==='accepted'&&confirm(`确认已完成“${roll.name}”？将获得 ${roll.xp} XP。`)){roll.status='completed';roll.completedAt=new Date().toISOString();adjustProgress(Number(roll.xp)||0);persist();toast(`事件完成：+${roll.xp} XP`)}return}
  if(target.dataset.editDailyEvent){const event=data.dailyEventTable.find(x=>x.id===target.dataset.editDailyEvent);if(event)openDailyEvent(event);return}
  if(target.dataset.deleteDailyEvent){const event=data.dailyEventTable.find(x=>x.id===target.dataset.deleteDailyEvent);if(event&&confirm(`从随机表删除“${event.name}”？已抽到的记录会保留。`)){data.dailyEventTable=data.dailyEventTable.filter(x=>x.id!==event.id);persist();toast('事件已从随机表删除')}return}
  if(target.dataset.editSupply){const entry=data.supplyEntries.find(x=>x.id===target.dataset.editSupply);if(entry)openSupply(entry)}
  if(target.dataset.deleteSupply&&confirm('删除这餐补给记录？')){data.supplyEntries=data.supplyEntries.filter(x=>x.id!==target.dataset.deleteSupply);persist();toast('这餐记录已删除')}
  if(target.dataset.editSupplyItem){const item=supplyItem(target.dataset.editSupplyItem);if(item)openSupplyItem(item)}
  if(target.dataset.complete){const a=data.actions.find(x=>x.id===target.dataset.complete);if(!a)return;const calculated=actionReward(a),wasCompleted=a.completed,reward={xp:wasCompleted?Number(a.rewardXp||calculated.xp):calculated.xp};a.completed=!a.completed;a.completedAt=a.completed?new Date().toISOString():null;if(a.completed){a.rewardXp=reward.xp}else{a.rewardXp=null}adjustProgress(a.completed?reward.xp:-reward.xp);const skill=skillById(a.skillId);if(skill)skill.xp=Math.max(0,Number(skill.xp||0)+(a.completed?reward.xp:-reward.xp));persist();toast(a.completed?`行动完成：+${reward.xp} XP`:'已取消完成')}
  if(target.dataset.editAction){if($('case-detail-dialog').open)$('case-detail-dialog').close();openAction(data.actions.find(x=>x.id===target.dataset.editAction))}
  if(target.dataset.deleteAction&&confirm('删除这个行动？')){const a=data.actions.find(x=>x.id===target.dataset.deleteAction);if(a?.completed){const calculated=actionReward(a),reward={xp:Number(a.rewardXp||calculated.xp)};adjustProgress(-reward.xp);const skill=skillById(a.skillId);if(skill)skill.xp=Math.max(0,Number(skill.xp||0)-reward.xp)}data.actions=data.actions.filter(x=>x.id!==target.dataset.deleteAction);persist()}
  if(target.dataset.editCourse)openCourse(data.courses.find(x=>x.id===target.dataset.editCourse));
  if(target.dataset.deleteCourse&&confirm('删除这门课程？')){data.courses=data.courses.filter(x=>x.id!==target.dataset.deleteCourse);persist()}
  if(target.dataset.habitToggle){const h=data.habits.find(x=>x.id===target.dataset.habitToggle),value=habitValue(h,selected),targetValue=Math.max(1,Number(h.target)||1);setHabitValue(h,selected,value>=targetValue?0:targetValue)}
  if(target.dataset.habitPlus){const h=data.habits.find(x=>x.id===target.dataset.habitPlus);setHabitValue(h,selected,habitValue(h,selected)+1)}
  if(target.dataset.habitMinus){const h=data.habits.find(x=>x.id===target.dataset.habitMinus);setHabitValue(h,selected,habitValue(h,selected)-1)}
  if(target.dataset.deleteHabit&&confirm('删除这个习惯？')){data.habits=data.habits.filter(x=>x.id!==target.dataset.deleteHabit);persist()}
  if(target.dataset.openCase)openCase(target.dataset.openCase);
  if(target.dataset.editNpc){const n=npcById(target.dataset.editNpc);editingNpcId=n.id;$('npc-name').value=n.name;$('npc-relation').value=n.relation||'';$('npc-preferences').value=(n.preferences||[]).join('\n');$('npc-important').value=(n.important||[]).join('\n');showDialog('npc-dialog')}
  if(target.dataset.deleteNpc&&confirm('删除这个 NPC 档案？相关线索会保留，但来源会变为空。')){data.npcs=data.npcs.filter(x=>x.id!==target.dataset.deleteNpc);data.clues.forEach(c=>{if(c.sourceNpcId===target.dataset.deleteNpc)c.sourceNpcId=null});persist()}
  if(target.dataset.clockPlus||target.dataset.clockMinus){const id=target.dataset.clockPlus||target.dataset.clockMinus,c=data.clocks.find(x=>x.id===id);c.current=Math.max(0,Math.min(Number(c.max),Number(c.current)+(target.dataset.clockPlus?1:-1)));persist()}
  if(target.dataset.deleteClock){data.clocks=data.clocks.filter(x=>x.id!==target.dataset.deleteClock);persist()}
  if(target.dataset.deleteClue){data.clues=data.clues.filter(x=>x.id!==target.dataset.deleteClue);persist()}
  if(target.dataset.deleteJournal){data.journal=data.journal.filter(x=>x.id!==target.dataset.deleteJournal);persist()}
  if(target.dataset.deleteSkill&&confirm('删除这个技能？行动仍会保留。')){data.skills=data.skills.filter(x=>x.id!==target.dataset.deleteSkill);data.actions.forEach(a=>{if(a.skillId===target.dataset.deleteSkill)a.skillId=null});persist()}
});

window.addEventListener('online',setLocalStatus);
window.addEventListener('offline',setLocalStatus);
if('serviceWorker' in navigator)navigator.serviceWorker.register('./service-worker.js').catch(error=>console.debug('Offline cache unavailable',error));
render();setLocalStatus();
