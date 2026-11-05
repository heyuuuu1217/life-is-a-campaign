(() => {
  'use strict';
  const content=window.STUDY_CONTENT;
  const TYPES={choice:{name:'选择题',symbol:'A'},fill:{name:'填空题',symbol:'＿'},judge:{name:'判断题',symbol:'√'},short:{name:'简答题',symbol:'≡'}};
  const ICONS={
    home:'<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
    book:'<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Z"/><path d="M12 5v15"/>',
    types:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    wrong:'<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/>',
    refresh:'<path d="M19 8a8 8 0 1 0 1 7M19 3v5h-5"/>',
    arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',
    left:'<path d="m14 6-6 6 6 6"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    up:'<path d="m6 15 6-6 6 6"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    play:'<path d="m8 4 12 8-12 8Z"/>',
    shuffle:'<path d="M3 6h3c6 0 6 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 3-1 4-3m4-6c1-2 2-3 4-3h3m-4-4 4 4-4 4"/>'
  };
  const icon=name=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||ICONS.book}</svg>`;
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const questionMap=new Map(content.questions.map(q=>[q.id,q]));
  const knowledgeMap=new Map((content.knowledge||[]).map(k=>[k.id,k]));
  const itemMap=new Map([...questionMap,...knowledgeMap]);
  const topicMap=new Map(content.topics.map(t=>[t.id,t]));
  const KEY='yiyeyiwen.study.v1';
  const routes=['home','topics','types','wrong','review','study','summary'];
  const emptyState=()=>({records:{},last:null});
  let storageOkay=true;
  function load(){
    try{
      const parsed=JSON.parse(localStorage.getItem(KEY)||'null');
      if(!parsed||typeof parsed!=='object')return emptyState();
      const records={};
      for(const [id,r] of Object.entries(parsed.records||{})){
        if(itemMap.has(id)&&r&&typeof r==='object')records[id]={seen:!!r.seen,wrong:questionMap.has(id)&&r.wrong===true,review:r.review===true||r.status==='review'};
      }
      let last=null;
      if(parsed.last&&Array.isArray(parsed.last.ids)){
        const ids=[...new Set(parsed.last.ids.filter(id=>questionMap.has(id)))];
        if(ids.length)last={ids,index:Math.max(0,Math.min(Number.isInteger(parsed.last.index)?parsed.last.index:0,ids.length-1)),label:String(parsed.last.label||'题型练习'),origin:['types','wrong','review','home'].includes(parsed.last.origin)?parsed.last.origin:'types',seen:Array.isArray(parsed.last.seen)?[...new Set(parsed.last.seen.filter(id=>ids.includes(id)))]:[],complete:!!parsed.last.complete};
      }
      return {records,last};
    }catch{storageOkay=false;return emptyState();}
  }
  let state=load(),revealed=false,selection=null,graded=false,noticeTimer;
  let topicFilter='all';
  const opened=new Set();
  const main=document.getElementById('main');
  const getRecord=id=>state.records[id]||{seen:false,wrong:false,review:false};
  const allQuestionIds=()=>content.questions.map(q=>q.id);
  const allItemIds=()=>[...(content.knowledge||[]).map(k=>k.id),...allQuestionIds()];
  const collectionIds=kind=>allItemIds().filter(id=>getRecord(id)[kind]&&(kind!=='wrong'||questionMap.has(id)));
  const counts=ids=>ids.reduce((r,id)=>{const v=getRecord(id);for(const key of ['seen','wrong','review'])if(v[key])r[key]++;return r;},{seen:0,wrong:0,review:0});
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{storageOkay=false;}}
  function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>t.classList.remove('show'),2000);}
  function shuffle(ids){const result=[...ids];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
  function route(){const r=location.hash.slice(1);return routes.includes(r)?r:'home';}
  function resetQuestion(){revealed=false;selection=null;graded=false;}
  function go(next){resetQuestion();if(route()===next){render();window.scrollTo({top:0});}else location.hash=next;}
  function start(ids,label,origin='types',random=false){
    const list=[...new Set(ids.filter(id=>questionMap.has(id)))];
    if(!list.length){toast('这里暂时没有题目。');return;}
    state.last={ids:random?shuffle(list):list,index:0,label,origin,seen:[],complete:false};save();go('study');
  }
  const demoNote=()=>content.demo?'<div class="demo-note"><span class="demo-dot"></span><p>当前为演示内容，正式知识点等你整理好后替换。</p></div>':'';
  const pageHead=(title,lead)=>`<div class="page-head"><h1>${escape(title)}</h1><p class="lead">${escape(lead)}</p></div>`;
  function nav(){
    const current=route(),active=['study','summary'].includes(current)?state.last?.origin||'types':current;
    const items=[['home','home','首页'],['topics','book','知识点'],['types','types','题型'],['wrong','wrong','错题'],['review','refresh','要再复习']];
    const html=items.map(([id,ico,label])=>`<a href="#${id}" class="nav-item ${active===id?'active':''}" ${active===id?'aria-current="page"':''}>${icon(ico)}<span>${label}</span></a>`).join('');
    document.getElementById('side-nav').innerHTML=html;document.getElementById('bottom-nav').innerHTML=html;
  }
  function home(){
    const resume=state.last&&!state.last.complete;
    return pageHead('现代信息技术 复习','选择知识点直接看定义，或按题型练习。')+demoNote()+`
      <div class="mode-grid"><a class="mode-card primary" href="#topics"><span class="mode-icon">${icon('book')}</span><h2>过知识点</h2><p>点击知识点名称，展开答案。</p><span class="mode-foot">${knowledgeMap.size} 个示例知识点${icon('arrow')}</span></a>
      <a class="mode-card" href="#types"><span class="mode-icon">${icon('types')}</span><h2>按题型练习</h2><p>选择、填空、判断、简答。</p><span class="mode-foot">${questionMap.size} 道示例题${icon('arrow')}</span></a></div>
      <div class="collection-shortcuts"><a href="#wrong">${icon('wrong')}<span>错题</span><strong>${collectionIds('wrong').length}</strong>${icon('arrow')}</a><a href="#review">${icon('refresh')}<span>要再复习</span><strong>${collectionIds('review').length}</strong>${icon('arrow')}</a></div>
      ${resume?`<button class="continue-card" data-action="resume"><span class="continue-icon">${icon('play')}</span><span><h3>继续：${escape(state.last.label)}</h3><p>第 ${state.last.index+1} / ${state.last.ids.length} 题</p></span>${icon('arrow')}</button>`:''}
      <p class="storage-note">${storageOkay?'错题和复习标记保存在当前浏览器，不跨设备同步。':'当前浏览器无法保存记录，仍可查看知识点和练习题。'}</p>`;
  }
  function answerBody(item){return `<div class="answer-points">${item.answer.map(p=>`<p>${escape(p)}</p>`).join('')}</div>${item.explanation?`<p class="explanation">${escape(item.explanation)}</p>`:''}${item.hint?`<p class="memory-hint"><span>记忆提示</span>${escape(item.hint)}</p>`:''}`;}
  function flagButton(id,kind){const active=getRecord(id)[kind],name=kind==='wrong'?'错题':'要再复习';return `<button class="flag-button ${kind} ${active?'active':''}" data-action="flag" data-id="${escape(id)}" data-value="${kind}" aria-pressed="${active}">${icon(kind==='wrong'?'wrong':'refresh')}${active?'已标记：'+name:name}</button>`;}
  function knowledgeCard(k){
    const open=opened.has(k.id),flag=getRecord(k.id).review;
    return `<article class="knowledge-card ${open?'is-open':''}"><button class="knowledge-toggle" id="toggle-${escape(k.id)}" data-action="knowledge-toggle" data-id="${escape(k.id)}" aria-expanded="${open}" aria-controls="answer-${escape(k.id)}"><h2>${escape(k.title)}</h2><span class="knowledge-toggle-end">${flag?'<span class="review-badge">要再复习</span>':''}${icon(open?'up':'down')}</span></button><div id="answer-${escape(k.id)}" class="knowledge-detail" ${open?'':'hidden'}>${open?`<section class="answer-panel" aria-label="知识点答案">${answerBody(k)}</section><div class="knowledge-actions">${flagButton(k.id,'review')}</div>`:''}</div></article>`;
  }
  function topics(){
    const visible=content.topics.filter(t=>topicFilter==='all'||topicFilter===t.id);
    return pageHead('过知识点','点一下知识点名称查看答案，再点一下收起。')+demoNote()+`<div class="topic-filters" role="group" aria-label="按模块筛选"><button class="filter-button ${topicFilter==='all'?'active':''}" data-action="topic-filter" data-id="all" aria-pressed="${topicFilter==='all'}">全部</button>${content.topics.map(t=>`<button class="filter-button ${topicFilter===t.id?'active':''}" data-action="topic-filter" data-id="${escape(t.id)}" aria-pressed="${topicFilter===t.id}">${escape(t.title)}</button>`).join('')}</div>`+visible.map(t=>{
      const list=[...knowledgeMap.values()].filter(k=>k.topic===t.id);
      return `<section class="knowledge-group"><div class="section-heading"><h2>${escape(t.title)}</h2><small>${list.length} 个知识点</small></div><div class="list-stack">${list.map(knowledgeCard).join('')}</div></section>`;
    }).join('');
  }
  function types(){return pageHead('按题型练习','先作答，再点击查看答案。')+demoNote()+`<div class="topic-grid">${Object.entries(TYPES).map(([id,t])=>`<button class="topic-card type-card" data-action="type" data-id="${id}"><span class="count">${content.questions.filter(q=>q.type===id).length} 道示例题</span><span class="type-symbol" aria-hidden="true">${t.symbol}</span><h2>${t.name}</h2></button>`).join('')}</div><button class="wide-button" data-action="shuffle">${icon('shuffle')}混合题型，随机练习</button>`;}
  function study(){
    if(!state.last)return empty('还没有开始练习','先选择一种题型。','types','选择题型');
    const s=state.last,q=questionMap.get(s.ids[s.index]);
    if(!q)return empty('这道题已更新','重新选择题型开始。','types','选择题型');
    const t=topicMap.get(q.topic),index=s.index;
    let options='';
    if(q.type==='choice')options=`<div class="options" role="group" aria-label="选择一个选项">${q.options.map((o,i)=>`<button class="option ${selection===i?'picked':''} ${revealed&&q.correct===i?'correct':''} ${revealed&&selection===i&&q.correct!==i?'wrong':''}" data-action="pick" data-value="${i}" aria-pressed="${selection===i}" ${revealed?'disabled':''}><b>${String.fromCharCode(65+i)}</b><span>${escape(o)}</span></button>`).join('')}</div>`;
    if(q.type==='judge')options=`<div class="options judge-options" role="group" aria-label="你的判断">${[true,false].map(v=>`<button class="option ${selection===v?'picked':''} ${revealed&&q.correct===v?'correct':''} ${revealed&&selection===v&&q.correct!==v?'wrong':''}" data-action="judge" data-value="${v}" aria-pressed="${selection===v}" ${revealed?'disabled':''}><span>${v?'正确':'错误'}</span></button>`).join('')}</div>`;
    return `<section class="study-page"><div class="study-head"><button class="back-button" data-action="leave">${icon('left')}返回</button><span class="study-label">${escape(s.label)}</span></div>
      <div class="progress-meta"><span>${escape(t?.title||'')}</span><strong>${index+1} / ${s.ids.length}</strong></div><div class="session-progress" role="progressbar" aria-label="本轮题目进度" aria-valuemin="0" aria-valuemax="${s.ids.length}" aria-valuenow="${index+1}"><span style="width:${(index+1)/s.ids.length*100}%"></span></div>
      <article class="question-card"><div class="question-meta"><span class="type-pill">${TYPES[q.type].name}</span><span class="question-id">第 ${index+1} 题</span></div><h1 class="question-title">${escape(q.title)}</h1><p class="think-note">${q.type==='short'||q.type==='fill'?'先自己想答案，再展开核对。':'先选择答案，再展开核对。'}</p>${options}
      ${revealed?`<section class="answer-panel" id="answer-panel" aria-label="参考答案"><div class="answer-title">${icon('check')}参考答案</div>${answerBody(q)}</section>`:''}
      <button class="answer-trigger" data-action="reveal" aria-expanded="${revealed}" ${revealed?'aria-controls="answer-panel"':''}>${icon(revealed?'up':'eye')}${revealed?'收起答案':'查看答案'}</button></article>
      <div class="flag-actions" role="group" aria-label="标记这道题">${flagButton(q.id,'wrong')}${flagButton(q.id,'review')}</div><p class="self-check-note">选择题、判断题答错后自动加入错题；其他题可手动标记。</p>
      <div class="question-nav"><button class="previous" data-action="previous" ${index===0?'disabled':''}>上一题</button><button class="next" data-action="next">${index===s.ids.length-1?'完成本轮':'下一题'}${icon('arrow')}</button></div></section>`;
  }
  function empty(title,text,target,label){return `<div class="empty"><span class="empty-icon">${icon('book')}</span><h2>${escape(title)}</h2><p>${escape(text)}</p><a class="wide-button" href="#${target}">${escape(label)}${icon('arrow')}</a></div>`;}
  function collection(kind){
    const ids=collectionIds(kind),wrong=kind==='wrong';
    let html=pageHead(wrong?'错题':'要再复习',wrong?'选择题、判断题答错后自动记录，也可以手动标记或移出。':'这里放着你标记为“要再复习”的知识点和题目。');
    if(!ids.length)return html+empty(wrong?'暂时没有错题':'暂时没有要再复习的内容',wrong?'练习时可以点击“错题”标记。':'展开知识点或练习题后，可以点击“要再复习”。',wrong?'types':'topics',wrong?'去练习':'去看知识点');
    const questions=ids.filter(id=>questionMap.has(id));
    html+=`<div class="section-heading"><small>共 ${ids.length} 项</small>${questions.length?`<button class="quiet-link" data-action="collection-start" data-value="${kind}">练习其中 ${questions.length} 道题${icon('arrow')}</button>`:''}</div><div class="list-stack">`;
    html+=ids.map(id=>{
      if(knowledgeMap.has(id))return knowledgeCard(knowledgeMap.get(id));
      const q=questionMap.get(id);
      return `<article class="collection-card"><button class="collection-card-main" data-action="open-item" data-id="${escape(id)}" data-origin="${kind}"><p class="tagline">${escape(topicMap.get(q.topic)?.title)} · ${TYPES[q.type].name}</p><h2>${escape(q.title)}</h2></button><button class="remove-record" data-action="flag" data-id="${escape(id)}" data-value="${kind}" aria-label="移出${wrong?'错题':'要再复习'}：${escape(q.title)}">移出</button></article>`;
    }).join('');
    return html+'</div><p class="storage-note">记录保存在当前浏览器。</p>';
  }
  function summary(){
    if(!state.last)return empty('还没有练习记录','选择一种题型开始。','types','选择题型');
    const s=state.last,c=counts(s.ids),seen=new Set(s.seen).size;
    return `<section class="study-page">${pageHead('本轮完成',s.label)}<div class="summary-card"><div class="summary-stats"><div><strong>${seen} / ${s.ids.length}</strong><span>本轮查看答案</span></div><div><strong>${c.wrong}</strong><span>错题</span></div><div><strong>${c.review}</strong><span>要再复习</span></div></div>${c.wrong?'<button class="answer-trigger" data-action="session-wrong">只练本轮错题</button>':''}<button class="wide-button" data-action="again">${icon('refresh')}再练一遍</button><a class="quiet-link" href="#types">返回题型${icon('arrow')}</a></div></section>`;
  }
  function render(){const views={home,topics,types,study,wrong:()=>collection('wrong'),review:()=>collection('review'),summary};main.innerHTML=views[route()]();nav();document.title='现代信息技术 复习';}
  function step(delta){
    if(!state.last)return;const s=state.last;
    if(delta>0&&s.index===s.ids.length-1){s.complete=true;save();go('summary');return;}
    s.index=Math.max(0,Math.min(s.index+delta,s.ids.length-1));s.complete=false;save();resetQuestion();render();window.scrollTo({top:0});main.focus({preventScroll:true});
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-action]');if(!button||button.disabled)return;
    const {action,id,value,origin}=button.dataset;
    switch(action){
      case 'topic-filter':if(id==='all'||topicMap.has(id)){topicFilter=id;render();}break;
      case 'knowledge-toggle':{
        if(!knowledgeMap.has(id))break;
        if(opened.has(id))opened.delete(id);else{opened.add(id);state.records[id]={...getRecord(id),seen:true};save();}
        render();document.getElementById('toggle-'+id)?.focus({preventScroll:true});break;
      }
      case 'type':if(TYPES[id])start(content.questions.filter(q=>q.type===id).map(q=>q.id),TYPES[id].name,'types');break;
      case 'shuffle':start(allQuestionIds(),'混合题型','types',true);break;
      case 'resume':if(state.last){state.last.complete=false;save();go('study');}break;
      case 'leave':go(state.last?.origin||'types');break;
      case 'pick':if(!revealed){selection=Number(value);graded=false;render();}break;
      case 'judge':if(!revealed){selection=value==='true';graded=false;render();}break;
      case 'reveal':{
        if(!state.last)break;revealed=!revealed;
        if(revealed){
          const qid=state.last.ids[state.last.index],q=questionMap.get(qid),r={...getRecord(qid),seen:true};
          if(!graded&&['choice','judge'].includes(q.type)&&selection!==null){if(selection!==q.correct)r.wrong=true;graded=true;}
          state.records[qid]=r;if(!state.last.seen.includes(qid))state.last.seen.push(qid);save();
        }
        render();main.querySelector('[data-action="reveal"]')?.focus({preventScroll:true});break;
      }
      case 'flag':{
        if(!itemMap.has(id)||!['wrong','review'].includes(value)||(value==='wrong'&&!questionMap.has(id)))break;
        const record=getRecord(id),enabled=!record[value];state.records[id]={...record,[value]:enabled};save();render();toast(enabled?'已加入'+(value==='wrong'?'错题':'要再复习'):'已移出'+(value==='wrong'?'错题':'要再复习'));break;
      }
      case 'previous':step(-1);break;
      case 'next':step(1);break;
      case 'collection-start':if(['wrong','review'].includes(value))start(collectionIds(value).filter(qid=>questionMap.has(qid)),value==='wrong'?'错题练习':'要再复习',value);break;
      case 'open-item':if(['wrong','review'].includes(origin)){
        const ids=collectionIds(origin).filter(qid=>questionMap.has(qid));if(!ids.includes(id))break;
        start(ids,origin==='wrong'?'错题练习':'要再复习',origin);state.last.index=ids.indexOf(id);save();render();
      }break;
      case 'again':if(state.last)start(state.last.ids,state.last.label,state.last.origin);break;
      case 'session-wrong':if(state.last)start(state.last.ids.filter(qid=>getRecord(qid).wrong),'本轮错题','wrong');break;
    }
  });
  window.addEventListener('hashchange',()=>{resetQuestion();render();window.scrollTo({top:0});main.focus({preventScroll:true});});
  document.addEventListener('keydown',e=>{if(route()!=='study'||e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}});
  window.RecallCore=Object.freeze({counts,shuffle,escape,getState:()=>JSON.parse(JSON.stringify(state)),contentVersion:content.version});
  render();
})();
