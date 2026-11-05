/* 示例题。用户整理正式知识点后，替换这里的数据，页面与学习流程无需重做。
 * id 要稳定且唯一；type 为 choice / fill / judge / short。
 * 答案使用纯文本数组，不把用户内容当成 HTML 执行。
 */
window.STUDY_CONTENT = {
  version: 'demo-20261105', demo: true,
  topics: [
    {id:'computer', title:'计算机组成', subtitle:'从部件到计算机的工作方式', mark:'01', icon:'chip'},
    {id:'representation', title:'信息的表示', subtitle:'二进制、编码与数字化', mark:'02', icon:'binary'},
    {id:'data', title:'大数据', subtitle:'数据怎样变成有用的信息', mark:'03', icon:'layers'},
    {id:'ai', title:'人工智能', subtitle:'表示、推理与智能应用', mark:'04', icon:'spark'},
    {id:'cloud-iot', title:'云计算与物联网', subtitle:'算力、感知与连接，放在一起', mark:'05', icon:'cloud'},
    {id:'ml', title:'机器学习', subtitle:'从数据中学习，也学会评估', mark:'06', icon:'nodes'}
  ],
  questions: [
    {id:'demo-01',topic:'computer',type:'choice',title:'CPU 中，主要负责组织和协调各部件工作的部分是？',options:['运算器','控制器','硬盘','显示器'],correct:1,answer:['B · 控制器。'],explanation:'控制器按指令组织工作；运算器主要完成算术与逻辑运算。',hint:'控制器管“怎么安排”，运算器管“怎么算”。'},
    {id:'demo-02',topic:'computer',type:'judge',title:'DRAM 需要周期性刷新，才能保持其中的数据。',correct:true,answer:['正确。'],explanation:'DRAM 依靠电容储存信息，需要定时刷新；它通常也会在断电后丢失数据。',hint:'刷新是保持数据的机制，不是“重新打开文件”。'},
    {id:'demo-03',topic:'representation',type:'fill',title:'十进制数 13，转换成二进制是 ______。',answer:['1101₂。'],explanation:'13 = 8 + 4 + 1，对应 2³、2²、2⁰，所以写为 1101。',hint:'先找 2 的幂，再检查按位相加是否还等于 13。'},
    {id:'demo-04',topic:'representation',type:'fill',title:'1 个字节（Byte）固定包含 ______ 个二进制位（bit）。',answer:['8 个。'],explanation:'字节固定为 8 位；“字”的长度则要结合处理器或题目约定。',hint:'Byte 和 bit 不一样；容量题留意 B 与 b。'},
    {id:'demo-05',topic:'data',type:'short',title:'大数据的 4V 分别是什么？“价值密度低”是否等于没有价值？',answer:['Volume：体量大。','Velocity：产生与处理速度快。','Variety：数据类型多样。','Value：价值。'],explanation:'潜在总体价值可以很高，但有用信息可能只占海量记录中的一小部分。“价值密度低”不等于整体没有价值。',hint:'记住四个维度，也要能结合场景解释。'},
    {id:'demo-06',topic:'data',type:'choice',title:'没有预先给定用户类别，按用电曲线的相似性自然分组，属于什么任务？',options:['监督分类','字符编码','聚类','数值进制转换'],correct:2,answer:['C · 聚类。'],explanation:'聚类从数据自身的相似关系中发现分组；分类通常利用已标记的类别来学习预测。',hint:'先问一句：训练时有没有预先给好的类别标签？'},
    {id:'demo-07',topic:'ai',type:'judge',title:'人工智能和机器学习是完全相同的概念。',correct:false,answer:['错误。'],explanation:'机器学习是人工智能的重要分支。人工智能还包括知识表示、逻辑推理、专家系统等研究方向。',hint:'机器学习属于人工智能，但不是它的全部。'},
    {id:'demo-08',topic:'ai',type:'short',title:'什么是知识表示？请给出一种表示方法。',answer:['把知识形式化或模型化，使计算机能够处理和利用。','例如：用逻辑表达式或产生式规则表示知识。'],explanation:'知识表示回答“怎样把知识放进可处理的结构”；推理则进一步利用这些表示求解问题。',hint:'表示是把知识写成机器可用的形式。'},
    {id:'demo-09',topic:'cloud-iot',type:'choice',title:'直接登录在线文档，使用已经提供好的编辑功能，最贴近哪一种云服务？',options:['IaaS · 基础设施即服务','PaaS · 平台即服务','SaaS · 软件即服务','HDFS · 分布式文件系统'],correct:2,answer:['C · SaaS，软件即服务。'],explanation:'用户直接使用软件功能。IaaS 主要交付基础计算资源，PaaS 主要交付开发与运行平台。',hint:'分清交付的是资源、平台，还是可直接使用的软件。'},
    {id:'demo-10',topic:'cloud-iot',type:'fill',title:'物联网常见的三层架构，从下到上依次是：______、______、______。',answer:['感知层、网络层、应用层。'],explanation:'感知层采集和识别；网络层负责接入与传输；应用层结合业务进行管理、分析或控制。',hint:'感知“采”，网络“传”，应用“用”。'},
    {id:'demo-11',topic:'ml',type:'judge',title:'用带有“正常 / 故障”标签的历史样本训练二分类模型，属于监督学习。',correct:true,answer:['正确。'],explanation:'这里每条样本有明确的目标类别，学习算法利用输入与标签建立预测关系。',hint:'“监督”看目标标签，不是有没有人盯着电脑。'},
    {id:'demo-12',topic:'ml',type:'short',title:'模型在训练数据上表现很好，在未见数据上却明显变差，可能是什么问题？',answer:['可能出现过拟合。','同时也需要排查数据分布变化、数据泄漏或评估方式等问题。'],explanation:'过拟合是过度贴合训练数据，没能学到对新样本也适用的规律。不能只凭训练分数高就说模型好。',hint:'背熟旧题，不等于会做新题。'}
  ]
};
