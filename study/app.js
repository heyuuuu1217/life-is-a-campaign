(() => {
  'use strict';
  const content = window.STUDY_CONTENT;
  const TYPES = {
    choice:{name:'选择题',symbol:'A',description:'在相似选项里，找准概念的边界。'},
    fill:{name:'填空题',symbol:'＿',description:'把关键词和关键数值，自己补完整。'},
    judge:{name:'判断题',symbol:'√',description:'多想一步：为什么对，哪里不对？'},
    short:{name:'简答题',symbol:'≡',description:'先组织自己的答案，再对照要点。'}
  };
  const ICONS = {
    home:'<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
    book:'<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Z"/><path d="M12 5v15"/>',
    types:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4Z"/>',
    arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',
    left:'<path d="m14 6-6 6 6 6"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    up:'<path d="m6 15 6-6 6 6"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    refresh:'<path d="M19 8a8 8 0 1 0 1 7M19 3v5h-5"/>',
    chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/><rect x="9" y="9" width="6" height="6" rx="1"/>',
    binary:'<path d="M6 6v12m7-12h4v12h-4zm-9 0h4m-4 0h4"/>',
    layers:'<path d="m12 3 10 5-10 5L2 8Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
    spark:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4ZM20 2v4m-2-2h4"/>',
    cloud:'<path d="M6 18a4 4 0 1 1 .1-8A6 6 0 0 1 18 9a4.5 4.5 0 1 1 0 9ZM8 21h8"/>',
    nodes:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="18" r="2"/><path d="m7 6 10 10M7 18 17 7M7 5l10 1M8 19l8-1"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    play:'<path d="m8 4 12 8-12 8Z"/>',
    shuffle:'<path d="M3 6h3c6 0 6 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 3-1 4-3m4-6c1-2 2-3 4-3h3m-4-4 4 4-4 4"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.book}</svg>`;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const questionMap = new Map(content.questions.map(q => [q.id,q]));
  const topicMap = new Map(content.topics.map(t => [t.id,t]));
  const KEY = 'yiyeyiwen.study.v1';
  const emptyState = () => ({records:{},saved:[],last:null});
  let storageOkay = true;
  function load() {
    try {
      const parsed=JSON.parse(localStorage.getItem(KEY)||'null');
      if (!parsed || typeof parsed!=='object') return emptyState();
      const records={};
      for (const [id,r] of Object.entries(parsed.records||{})) {
        if(questionMap.has(id) && r && typeof r==='object') records[id]={seen:!!r.seen,status:['known','review'].includes(r.status)?r.status:null};
      }
      const saved=Array.isArray(parsed.saved)?[...new Set(parsed.saved.filter(id=>questionMap.has(id)))]:[];
      let last=null;
      if(parsed.last && Array.isArray(parsed.last.ids)) {
        const ids=[...new Set(parsed.last.ids.filter(id=>questionMap.has(id)))];
        if(ids.length) last={ids,index:Math.max(0,Math.min(Number.isInteger(parsed.last.index)?parsed.last.index:0,ids.length-1)),label:String(parsed.last.label||'继续复习'),origin:['home','topics','types','saved','review'].includes(parsed.last.origin)?parsed.last.origin:'home',seen:Array.isArray(parsed.last.seen)?parsed.last.seen.filter(id=>ids.includes(id)):[],complete:!!parsed.last.complete};
      }
      return {records,saved,last};
    } catch { storageOkay=false;return emptyState(); }
  }
  let state=load();
  let revealed=false, selection=null, noticeTimer;
  const main=document.getElementById('main');
  const getRecord=id=>state.records[id]||{seen:false,status:null};
  const counts=ids=>ids.reduce((r,id)=>{const v=getRecord(id);if(v.seen)r.seen++;if(v.status==='known')r.known++;if(v.status==='review')r.review++;return r;},{seen:0,known:0,review:0});
  const allIds=()=>content.questions.map(q=>q.id);
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{storageOkay=false;}}
  function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>t.classList.remove('show'),2000);}
  function shuffle(ids){const result=[...ids];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
  function route(){return location.hash.slice(1)||'home';}
  function go(next){revealed=false;selection=null;if(route()===next){render();window.scrollTo({top:0});}else location.hash=next;}
  function start(ids,label,origin='home',random=false){
    const list=[...new Set(ids.filter(id=>questionMap.has(id)))];
    if(!list.length){toast('这里还没有题目，等知识点整理好再补上。');return;}
    state.last={ids:random?shuffle(list):list,index:0,label,origin,seen:[],complete:false};save();go('study');
  }
  const demoNote=()=>content.demo?'<div class="demo-note"><span class="demo-dot"></span><p>现在是少量示例题，用来体验页面。正式知识点等你整理好后再放进来。</p></div>':'';
  const pageHead=(eyebrow,title,lead)=>`<div class="page-head"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="lead">${lead}</p></div>`;
  function nav(){
    const current=route();
    const active=current==='study'||current==='summary'?state.last?.origin||'home':current;
    const items=[['home','home','首页'],['topics','book','知识点'],['types','types','题型'],['saved','bookmark','收藏']];
    const html=items.map(([id,ico,label])=>`<a href="#${id}" class="nav-item ${active===id?'active':''}" ${active===id?'aria-current="page"':''}>${icon(ico)}<span>${label}</span></a>`).join('');
    document.getElementById('side-nav').innerHTML=html;document.getElementById('bottom-nav').innerHTML=html;
  }
  function home(){
    const stat=counts(allIds());
    const canResume=state.last&&!state.last.complete;
    return `<div class="topline"><p class="eyebrow">A LITTLE EVERY DAY</p><span class="round-date"><i></i>今天，也学一点</span></div>
      <section class="hero"><div class="hero-copy"><h1>从一个问题<br>开始。</h1><p class="lead">先想一想，再翻开答案。<br>把零散的知识，一点点连起来。</p></div><div class="hero-art" aria-hidden="true"><div class="paper-card back"></div><div class="paper-card front">?</div><span class="art-star">✳</span></div></section>
      ${demoNote()}
      <section aria-label="复习方式"><div class="section-heading"><h2>今天，想怎么复习？</h2><small>选一种顺手的方式</small></div><div class="mode-grid">
        <a class="mode-card primary" href="#topics"><span class="mode-icon">${icon('book')}</span><h2>按知识点</h2><p>顺着知识脉络，逐个想明白。</p><span class="mode-foot">${content.topics.length} 个模块${icon('arrow')}</span></a>
        <a class="mode-card" href="#types"><span class="mode-icon">${icon('types')}</span><h2>按题型</h2><p>换一种问法，检验记得牢不牢。</p><span class="mode-foot">选择 · 填空 · 判断 · 简答${icon('arrow')}</span></a>
      </div></section>
      <div class="stats-strip" aria-label="学习记录"><div class="stat"><strong>${stat.seen}</strong><span>已看过答案</span></div><div class="stat"><strong>${stat.known}</strong><span>标记记住了</span></div><div class="stat"><strong>${stat.review}</strong><span>还需巩固</span></div></div>
      <div class="section-heading"><h2>${canResume?'接着上次的小进度':'不想选？直接开始'}</h2><a href="#review">查看待巩固</a></div>
      <button class="continue-card" data-action="${canResume?'resume':'all'}"><span class="continue-icon">${icon('play')}</span><span><h3>${canResume?escape(state.last.label):'从第一张卡片开始'}</h3><p>${canResume?`上次停在第 ${state.last.index+1} / ${state.last.ids.length} 题`:`${content.questions.length} 道示例题 · 答案默认收起`}</p></span>${icon('arrow')}</button>
      <button class="quiet-link" data-action="shuffle">${icon('shuffle')}换个顺序，随机过一遍</button>
      <p class="storage-note">${storageOkay?'学习标记和收藏保存在当前浏览器，不跨设备同步。':'当前浏览器无法持久保存记录，仍可正常浏览题目与答案。'}</p>`;
  }
  function topics(){return pageHead('BY KNOWLEDGE','顺着知识点，过一遍。','先把一个模块想明白，再慢慢接上下一块。')+demoNote()+`<div class="topic-grid">${content.topics.map(t=>{
    const ids=content.questions.filter(q=>q.topic===t.id).map(q=>q.id),c=counts(ids),pct=ids.length?c.known/ids.length*100:0;
    return `<button class="topic-card" data-action="topic" data-id="${escape(t.id)}"><div class="topic-card-head"><span class="topic-number">${t.mark}</span><span class="topic-icon">${icon(t.icon)}</span></div><h2>${escape(t.title)}</h2><p>${escape(t.subtitle)}</p><div class="topic-bottom"><span>${ids.length} 道${content.demo?'示例':''}</span><div class="tiny-progress"><span style="width:${pct}%"></span></div><span>${c.known}/${ids.length}</span></div></button>`;
  }).join('')}</div><button class="wide-button" data-action="all">把所有知识点连起来复习${icon('arrow')}</button>`;}
  function types(){return pageHead('BY QUESTION TYPE','换个问法，再想一次。','四种题型，都先留一点自己思考的时间。')+demoNote()+`<div class="topic-grid">${Object.entries(TYPES).map(([id,t])=>`<button class="topic-card type-card" data-action="type" data-id="${id}"><span class="count">${content.questions.filter(q=>q.type===id).length} 道${content.demo?'示例':''}</span><span class="type-symbol" aria-hidden="true">${t.symbol}</span><h2>${t.name}</h2><p>${t.description}</p></button>`).join('')}</div><button class="wide-button" data-action="shuffle">${icon('shuffle')}混合题型，随机复习</button>`;}
  function study(){
    if(!state.last||!state.last.ids.length) return empty('还没有开始这一轮','先选一个知识点或题型，就可以看到第一张卡片。','book','topics','选一个知识点');
    const session=state.last,q=questionMap.get(session.ids[session.index]);
    if(!q)return empty('这道题已更新','回到知识点页，重新开始这一轮。','book','topics','返回知识点');
    const t=topicMap.get(q.topic),type=TYPES[q.type],record=getRecord(q.id),saved=state.saved.includes(q.id),index=session.index;
    let options='';
    if(q.type==='choice')options=`<div class="options" role="group" aria-label="选择一个选项">${q.options.map((o,i)=>`<button class="option ${selection===i?'picked':''} ${revealed&&q.correct===i?'correct':''} ${revealed&&selection===i&&q.correct!==i?'wrong':''}" data-action="pick" data-value="${i}" aria-pressed="${selection===i}"><b>${String.fromCharCode(65+i)}</b><span>${escape(o)}</span></button>`).join('')}</div>`;
    if(q.type==='judge')options=`<div class="options judge-options" role="group" aria-label="你的判断">${[true,false].map((v,i)=>`<button class="option ${selection===v?'picked':''} ${revealed&&q.correct===v?'correct':''} ${revealed&&selection===v&&q.correct!==v?'wrong':''}" data-action="judge" data-value="${v}" aria-pressed="${selection===v}">${icon(i===0?'check':'refresh')}<span>${v?'正确':'错误'}</span></button>`).join('')}</div>`;
    return `<section class="study-page"><div class="study-head"><button class="back-button" data-action="leave">${icon('left')}返回</button><span class="study-label">${escape(session.label)}</span><button class="icon-button ${saved?'selected':''}" data-action="save" aria-label="${saved?'取消收藏这道题':'收藏这道题'}" aria-pressed="${saved}">${icon('bookmark')}</button></div>
      <div class="progress-meta"><span>${escape(t?.title||'知识点')}</span><strong>${String(index+1).padStart(2,'0')} <span class="muted">/ ${String(session.ids.length).padStart(2,'0')}</span></strong></div><div class="session-progress" role="progressbar" aria-label="本轮题目进度" aria-valuemin="0" aria-valuemax="${session.ids.length}" aria-valuenow="${index+1}"><span style="width:${(index+1)/session.ids.length*100}%"></span></div>
      <article class="question-card"><div class="question-meta"><span class="type-pill">${type.name}</span><span class="question-id">QUESTION ${String(index+1).padStart(2,'0')}</span></div><h1 class="question-title">${escape(q.title)}</h1><p class="think-note">${q.type==='short'?'试着说出自己的要点，再对照参考答案。':q.type==='fill'?'在心里补完整，想好了再看答案。':'可以先选一个答案，再展开核对。'}</p>${options}
      ${revealed?`<section class="answer-panel" id="answer-panel" aria-label="参考答案" tabindex="-1"><div class="answer-title">${icon('check')}参考答案</div><div class="answer-points">${q.answer.map(p=>`<p>${escape(p)}</p>`).join('')}</div><p class="explanation">${escape(q.explanation)}</p>${q.hint?`<p class="memory-hint"><span>记忆提示</span>${escape(q.hint)}</p>`:''}</section>`:''}
      <button class="answer-trigger" data-action="reveal" aria-expanded="${revealed}" ${revealed?'aria-controls="answer-panel"':''}>${icon(revealed?'up':'eye')}${revealed?'收起答案':'想好了，查看答案'}</button></article>
      ${revealed?`<div class="mastery-actions" role="group" aria-label="自我检查"><button class="mastery-button review ${record.status==='review'?'active':''}" data-action="mastery" data-value="review" aria-pressed="${record.status==='review'}">${icon('refresh')}还需巩固</button><button class="mastery-button known ${record.status==='known'?'active':''}" data-action="mastery" data-value="known" aria-pressed="${record.status==='known'}">${icon('check')}记住了</button></div><p class="self-check-note">按自己的情况标记，没有分数，也不用着急。</p>`:''}
      <div class="question-nav"><button class="previous" data-action="previous" ${index===0?'disabled':''}>上一题</button><button class="next" data-action="next">${index===session.ids.length-1?'完成本轮':'下一题'}${icon('arrow')}</button></div><p class="mobile-hint">答案默认收起 · 随时可以回来再看</p></section>`;
  }
  function empty(title,text,ico,target,label){return `<div class="empty"><span class="empty-icon">${icon(ico)}</span><h2>${title}</h2><p>${text}</p><a class="wide-button" href="#${target}">${label}${icon('arrow')}</a></div>`;}
  function collection(review=false){
    const ids=review?allIds().filter(id=>getRecord(id).status==='review'):state.saved;
    let html=pageHead(review?'ONE MORE LOOK':'SAVED FOR LATER',review?'再看一遍，也没关系。':'把想再看的，留在这里。',review?'这里放着你标记为“还需巩固”的题目。':'题目右上角的小书签，可以把它留到这里。');
    if(!ids.length)return html+empty(review?'暂时没有待巩固题目':'还没有收藏的题目',review?'看完答案后，可以按真实情况标记。这里会慢慢长成你的复习清单。':'遇到想再琢磨的题目，点一下书签。下次不用重新找。',review?'check':'bookmark','topics','去看知识点');
    html+=`<div class="section-heading"><small>共 ${ids.length} 道</small><button class="quiet-link" data-action="collection-start" data-value="${review?'review':'saved'}">依次复习${icon('arrow')}</button></div><div class="list-stack">`;
    html+=ids.map(id=>{const q=questionMap.get(id);return `<article class="saved-card"><button class="saved-card-main" data-action="open-item" data-id="${escape(id)}" data-origin="${review?'review':'saved'}"><p class="tagline">${escape(topicMap.get(q.topic)?.title)} · ${TYPES[q.type].name}</p><h2>${escape(q.title)}</h2></button>${review?'':`<button class="icon-button selected" data-action="unsave" data-id="${escape(id)}" aria-label="取消收藏：${escape(q.title)}">${icon('bookmark')}</button>`}</article>`;}).join('');
    return html+'</div><p class="storage-note">记录保存在当前浏览器。更换设备或清理浏览器数据后，不会自动同步。</p>';
  }
  function summary(){
    if(!state.last)return empty('还没有这一轮的记录','选一种方式开始，结束后就会看到本轮小结。','book','topics','开始复习');
    const s=state.last,stat=counts(s.ids),seen=new Set(s.seen||[]).size;
    return `<section class="study-page">${pageHead('A SMALL STEP','这一轮，到这里。','不必一次全记住。把模糊的，再留给下一次。')}<div class="summary-card"><span class="summary-icon">${icon('check')}</span><h1>又往前走了一小步。</h1><p class="lead">${escape(s.label)} · 共 ${s.ids.length} 道题</p><div class="summary-stats"><div><strong>${seen}</strong><span>本轮展开答案</span></div><div><strong>${stat.known}</strong><span>标记记住了</span></div><div><strong>${stat.review}</strong><span>还需巩固</span></div></div><p class="lead">${stat.review?'把待巩固的几道，再慢慢想一遍。':'如果还有没把握的，随时可以再回来。'}</p>${stat.review?`<button class="answer-trigger" data-action="session-review">${icon('refresh')}只过本轮待巩固题目</button>`:''}<button class="wide-button" data-action="again">${icon('refresh')}这一组，再过一遍</button><a class="quiet-link" href="#home">回到首页${icon('arrow')}</a></div></section>`;
  }
  function render(){
    const r=route();const views={home,topics,types,study,saved:()=>collection(false),review:()=>collection(true),summary};
    main.innerHTML=(views[r]||home)();nav();
    document.title=(r==='study'?'正在复习':r==='topics'?'按知识点':r==='types'?'按题型':r==='saved'?'我的收藏':r==='review'?'待巩固':'一页一问')+' · 复习卡片';
  }
  function step(delta){
    if(!state.last)return;
    const s=state.last;
    if(delta>0&&s.index===s.ids.length-1){s.complete=true;save();go('summary');return;}
    s.index=Math.max(0,Math.min(s.index+delta,s.ids.length-1));s.complete=false;save();revealed=false;selection=null;render();window.scrollTo({top:0,behavior:'instant'});main.focus({preventScroll:true});
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-action]');if(!button||button.disabled)return;
    const {action,id,value,origin}=button.dataset;
    switch(action){
      case 'topic':start(content.questions.filter(q=>q.topic===id).map(q=>q.id),topicMap.get(id).title,'topics');break;
      case 'type':start(content.questions.filter(q=>q.type===id).map(q=>q.id),TYPES[id].name,'types');break;
      case 'all':start(allIds(),'全部知识点','home');break;
      case 'shuffle':start(allIds(),'随机复习','home',true);break;
      case 'resume':if(state.last){state.last.complete=false;save();go('study');}break;
      case 'leave':go(state.last?.origin||'home');break;
      case 'pick':if(!revealed){selection=Number(value);render();main.querySelector(`[data-action="pick"][data-value="${value}"]`)?.focus({preventScroll:true});}break;
      case 'judge':if(!revealed){selection=value==='true';render();main.querySelector(`[data-action="judge"][data-value="${value}"]`)?.focus({preventScroll:true});}break;
      case 'reveal':{
        if(!state.last)break;
        revealed=!revealed;
        if(revealed){const qid=state.last.ids[state.last.index];state.records[qid]={...getRecord(qid),seen:true};if(!state.last.seen.includes(qid))state.last.seen.push(qid);save();}
        render();main.querySelector('[data-action="reveal"]')?.focus({preventScroll:true});break;
      }
      case 'save':{
        const qid=state.last?.ids[state.last.index];if(!qid)break;
        const found=state.saved.includes(qid);state.saved=found?state.saved.filter(x=>x!==qid):[...state.saved,qid];save();render();toast(found?'已取消收藏':'已收藏，下次可以直接找到');break;
      }
      case 'unsave':state.saved=state.saved.filter(x=>x!==id);save();render();toast('已取消收藏');break;
      case 'mastery':{
        if(!revealed||!state.last)break;
        const qid=state.last.ids[state.last.index],old=getRecord(qid).status;
        state.records[qid]={...getRecord(qid),seen:true,status:old===value?null:value};save();render();toast(old===value?'已取消这次标记':value==='known'?'已标记：记住了':'已放进待巩固清单');break;
      }
      case 'previous':step(-1);break;
      case 'next':step(1);break;
      case 'collection-start':{
        const review=value==='review',ids=review?allIds().filter(qid=>getRecord(qid).status==='review'):state.saved;
        start(ids,review?'待巩固':'我的收藏',review?'review':'saved');break;
      }
      case 'open-item':{
        const ids=origin==='review'?allIds().filter(qid=>getRecord(qid).status==='review'):state.saved;
        start(ids,origin==='review'?'待巩固':'我的收藏',origin);state.last.index=Math.max(0,state.last.ids.indexOf(id));save();if(route()==='study')render();break;
      }
      case 'again':if(state.last)start([...state.last.ids],state.last.label,state.last.origin);break;
      case 'session-review':if(state.last)start(state.last.ids.filter(qid=>getRecord(qid).status==='review'),'本轮待巩固','review');break;
    }
  });
  window.addEventListener('hashchange',()=>{revealed=false;selection=null;render();window.scrollTo({top:0});main.focus({preventScroll:true});});
  document.addEventListener('keydown',e=>{if(route()!=='study'||e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}});
  // Small pure helpers are exposed for local validation; no network or account data is used.
  window.RecallCore=Object.freeze({counts,shuffle,escape,getState:()=>JSON.parse(JSON.stringify(state)),contentVersion:content.version});
  render();
})();
