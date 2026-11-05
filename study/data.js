/* 第一章正式复习内容；题目按用户知识点编写。 */
window.STUDY_CONTENT = {
  "version": "chapter1-20261105",
  "demo": false,
  "topics": [
    {
      "id": "computer",
      "title": "第一章 计算机组成原理",
      "subtitle": "按你整理的第一章复习",
      "mark": "01",
      "icon": "chip"
    },
    {
      "id": "representation",
      "title": "信息的表示",
      "subtitle": "二进制、编码与数字化",
      "mark": "02",
      "icon": "binary"
    },
    {
      "id": "data",
      "title": "大数据",
      "subtitle": "数据怎样变成有用的信息",
      "mark": "03",
      "icon": "layers"
    },
    {
      "id": "ai",
      "title": "人工智能",
      "subtitle": "表示、推理与智能应用",
      "mark": "04",
      "icon": "spark"
    },
    {
      "id": "cloud-iot",
      "title": "云计算与物联网",
      "subtitle": "算力、感知与连接，放在一起",
      "mark": "05",
      "icon": "cloud"
    },
    {
      "id": "ml",
      "title": "机器学习",
      "subtitle": "从数据中学习，也学会评估",
      "mark": "06",
      "icon": "nodes"
    }
  ],
  "knowledge": [
    {
      "id": "ch1-k01",
      "topic": "computer",
      "title": "信息的定义",
      "answer": [
        "信息是经过加工处理的数据。",
        "信息反映客观事物的运动状态、变化，以及事物之间的联系和相互作用。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k02",
      "topic": "computer",
      "title": "信息技术的含义",
      "answer": [
        "利用计算机、网络等硬件设备、软件工具和科学方法，对文字、图像、声音、视频等信息进行获取、加工、存储、传输与使用的技术总和。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k03",
      "topic": "computer",
      "title": "计算机的基本工作原理",
      "answer": [
        "存储程序原理，也称冯·诺依曼原理。",
        "将程序和数据存入存储器，计算机在程序控制下自动完成相应操作。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k04",
      "topic": "computer",
      "title": "计算机硬件的五大部件及功能",
      "answer": [
        "运算器：完成算术运算和逻辑运算。",
        "控制器：组织、协调和控制各部件的工作。",
        "存储器：存放程序和数据，是实现存储程序原理的硬件基础。",
        "输入设备：接收输入的原始数据和程序。",
        "输出设备：把处理结果转换为人们能接受的形式并输出。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k05",
      "topic": "computer",
      "title": "计算机怎样工作，为什么采用这种方式",
      "answer": [
        "输入设备接收信息；程序和数据放入存储器；CPU 取出、译码并执行指令；结果存回存储器或由输出设备输出。",
        "这样设计使计算机能自动执行程序；更换程序即可改变任务；部件分工也便于组织和协调。"
      ],
      "explanation": "“为什么这样设计”为对你材料中待补部分的归纳：存储程序支持自动化和通用性，部件分工支持有序工作。"
    },
    {
      "id": "ch1-k06",
      "topic": "computer",
      "title": "计算机“三大件”",
      "answer": [
        "CPU、内存和主板。"
      ],
      "explanation": "“三大件”是本章介绍基本硬件时的说法，不等于冯·诺依曼体系的“五大部件”。"
    },
    {
      "id": "ch1-k07",
      "topic": "computer",
      "title": "CPU 的主要组成",
      "answer": [
        "控制器和运算器。",
        "进一步看，运算部分包括 ALU 和处理器寄存器；控制部分涉及指令寄存器 IR、程序计数器 PC 等。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k08",
      "topic": "computer",
      "title": "运算器与 ALU 的作用",
      "answer": [
        "完成算术运算和逻辑运算。",
        "ALU 是 Arithmetic Logic Unit，即算术逻辑单元。"
      ],
      "explanation": ""
    },
    {
      "id": "knowledge-02",
      "topic": "computer",
      "title": "控制器的作用",
      "answer": [
        "控制整个计算机各部件的工作，组织指令的执行过程。"
      ],
      "explanation": "与运算器区分：控制器负责组织和协调，运算器负责算术与逻辑运算。"
    },
    {
      "id": "ch1-k10",
      "topic": "computer",
      "title": "内存的作用",
      "answer": [
        "存放运行中的程序、程序需要的数据，以及运算过程和结果。",
        "CPU 从内存读取程序和数据，也会把计算结果写回内存。"
      ],
      "explanation": "内存容量影响能够同时容纳的程序和数据量，不能单凭内存越大就判断计算机越快。"
    },
    {
      "id": "ch1-k11",
      "topic": "computer",
      "title": "主板、芯片组和总线的作用",
      "answer": [
        "主板承载并连接计算机的主要部件。",
        "按本章的简化模型，芯片组协调数据流转，总线提供部件之间传输数据的通道。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k12",
      "topic": "computer",
      "title": "总线速度的含义",
      "answer": [
        "反映总线上数据传输的快慢。"
      ],
      "explanation": "实际传输能力还与总线宽度、传输机制等有关，不能只看一个频率数值。"
    },
    {
      "id": "ch1-k13",
      "topic": "computer",
      "title": "输入设备与输出设备",
      "answer": [
        "输入设备向计算机提供数据和信息，例如键盘、鼠标、麦克风、扫描仪。",
        "输出设备把处理结果表示为数字、字符、图像或声音等，例如显示器、打印机、音箱。",
        "触摸屏既能输入，也能输出。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k14",
      "topic": "computer",
      "title": "GPU 的作用及其与 CPU 的区别",
      "answer": [
        "显卡中包含 GPU，即图形处理器。GPU 擅长大量并行计算，常承担图像、视频、动画等图形相关计算。",
        "CPU 是中央处理器，承担通用计算、控制和协调等任务。",
        "GPU 可以与 CPU 同时工作，分担计算负载。"
      ],
      "explanation": "GPU 并非只能处理图形，也可执行其他适合并行的计算；本章重点是它与 CPU 的分工。"
    },
    {
      "id": "ch1-k15",
      "topic": "computer",
      "title": "冯·诺依曼体系的三个重要思想",
      "answer": [
        "采用二进制。",
        "程序和数据一样存储在存储器中。",
        "计算机由运算器、控制器、存储器、输入设备、输出设备五大部件组成。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k16",
      "topic": "computer",
      "title": "PC 与 IR 的作用",
      "answer": [
        "PC：Program Counter，程序计数器，保存取指所需的指令地址，通常指向下一条待执行指令。",
        "IR：Instruction Register，指令寄存器，保存当前取出的指令。"
      ],
      "explanation": "记忆：PC 指路，IR 存当前指令。顺序执行时 PC 指向后续指令，遇到转移指令时可以改指目标位置。"
    },
    {
      "id": "knowledge-01",
      "topic": "computer",
      "title": "指令周期的定义",
      "answer": [
        "CPU 从取出一条指令到执行完这条指令所需的全部时间。",
        "本章按“取指 → 译码 → 执行”三个阶段理解。"
      ],
      "explanation": "指令周期、机器周期和时钟周期不是同一概念。"
    },
    {
      "id": "ch1-k18",
      "topic": "computer",
      "title": "取指阶段做什么",
      "answer": [
        "按 PC 中的地址，从内存读出下一条指令，送入 IR。",
        "顺序执行时，PC 随后移向下一条指令。"
      ],
      "explanation": "课件写“PC 加 1”是以一个指令单位前进的简化表述。若按字节编址且指令占多个字节，通常按指令长度增加；转移指令还可改变 PC。"
    },
    {
      "id": "ch1-k19",
      "topic": "computer",
      "title": "译码阶段做什么",
      "answer": [
        "控制器分析 IR 中的指令，确定要执行的操作，以及操作数在哪里、如何取得等。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k20",
      "topic": "computer",
      "title": "执行阶段做什么",
      "answer": [
        "根据指令要求完成相应操作。",
        "算术、逻辑指令由相关运算部件处理，结果写回寄存器或内存；转移指令可修改 PC。"
      ],
      "explanation": "“执行”不只意味着做一次算术运算，不同指令的执行动作不同。"
    },
    {
      "id": "ch1-k21",
      "topic": "computer",
      "title": "存储器的层次结构与变化规律",
      "answer": [
        "典型层次：寄存器 → Cache（SRAM）→ 内存（DRAM）→ SSD / HDD。",
        "通常越靠近 CPU，速度越快、单位容量成本越高、容量越小；向下则相反。",
        "本章用相邻层之间传递数据的层次模型理解存储系统。"
      ],
      "explanation": "图中的 SSD、HDD 表示典型外存层次，不是说每台计算机都必须同时配置两者。",
      "diagram": "memory",
      "level": "了解为主"
    },
    {
      "id": "ch1-k22",
      "topic": "computer",
      "title": "寄存器的特点",
      "answer": [
        "位于 CPU 内部，属于 CPU 的重要组成部分。",
        "速度很快、容量很小，只能保存有限的信息。"
      ],
      "explanation": "",
      "level": "了解为主"
    },
    {
      "id": "ch1-k23",
      "topic": "computer",
      "title": "CPU 高速缓存的常见层级",
      "answer": [
        "常见有 L1、L2、L3 三层 Cache。",
        "L1 通常靠近 CPU 核心，并分为指令缓存和数据缓存。"
      ],
      "explanation": "Cache 用来缓解 CPU 与内存之间的速度差异。具体层数和共享方式取决于处理器设计。",
      "level": "了解为主"
    },
    {
      "id": "ch1-k24",
      "topic": "computer",
      "title": "SRAM 的名称与特点",
      "answer": [
        "Static Random-Access Memory，静态随机存取存储器。",
        "通电时不需要像 DRAM 那样周期性刷新即可保持数据；断电后数据丢失。",
        "速度快、单位容量成本高、存储密度相对较低，常用于 Cache。"
      ],
      "explanation": "",
      "level": "了解为主"
    },
    {
      "id": "knowledge-03",
      "topic": "computer",
      "title": "DRAM 的名称、刷新与特点",
      "answer": [
        "Dynamic Random Access Memory，动态随机存取存储器。",
        "利用电容保存信息；电荷会逐渐泄漏，所以需要周期性刷新。",
        "相对 SRAM，密度较高、成本较低、容量更容易做大，但访问延时更长。"
      ],
      "explanation": "DRAM 常用于内存；刷新不能使它在断电后继续保存数据。",
      "level": "了解为主"
    },
    {
      "id": "ch1-k26",
      "topic": "computer",
      "title": "SRAM 与 DRAM 的比较",
      "answer": [
        "SRAM：静态；不需周期性刷新；速度较快；成本较高；密度较低；常用于 Cache。",
        "DRAM：动态；需要刷新；速度相对较慢；成本较低；密度较高；常用于内存。",
        "两者都是易失性存储器，断电后数据都会丢失。"
      ],
      "explanation": "",
      "level": "了解为主"
    },
    {
      "id": "ch1-k27",
      "topic": "computer",
      "title": "SSD 与 HDD 的区别",
      "answer": [
        "SSD：固态硬盘，主要由闪存颗粒和主控芯片组成，没有机械运动结构，也不需要磁头。",
        "HDD：机械硬盘，依靠磁盘高速旋转和磁头定位读写数据。",
        "SSD 的访问速度通常较快；HDD 通常具有较低的单位容量成本。"
      ],
      "explanation": "",
      "level": "了解为主"
    },
    {
      "id": "ch1-k28",
      "topic": "computer",
      "title": "内存与外存的区别",
      "answer": [
        "本章常用 RAM 内存：访问较快、相对单位容量成本较高、断电后数据丢失。",
        "SSD / HDD 等外存：相对访问较慢、单位容量成本较低、断电后仍能保存数据。"
      ],
      "explanation": "“内存易失”在这里主要指 RAM，不能概括为所有内部存储器都易失；“外存永久性”指非易失性，不代表数据永远不会损坏。",
      "level": "了解为主"
    },
    {
      "id": "ch1-k29",
      "topic": "computer",
      "title": "为什么不把 Cache 做得和内存一样大",
      "answer": [
        "成本：SRAM 的单位容量成本高，大容量 Cache 会显著增加芯片面积和成本。",
        "电路复杂度：容量增大，寻址、译码、选择和布线等电路更复杂，延时和功耗也会增加。",
        "物理距离：芯片面积增大后，部分存储单元与 CPU 的距离变远，信号传播时间增长。"
      ],
      "explanation": "因此采用小而快的 Cache 与较大、较便宜的内存组成层次结构，折中速度、容量和成本。"
    },
    {
      "id": "ch1-k30",
      "topic": "computer",
      "title": "总线的定义与设计目的",
      "answer": [
        "总线是计算机各部件之间进行通信的一组公共线路。",
        "用共享通道代替复杂的两两互连，减少互连复杂性和部件之间的耦合。"
      ],
      "explanation": "CPU、内存与输入输出设备可以通过总线进行通信。"
    },
    {
      "id": "ch1-k31",
      "topic": "computer",
      "title": "总线的三类线路及作用",
      "answer": [
        "数据线（Data Bus）：传输实际的数据。",
        "地址线（Address Bus）：确定访问的内存位置或 I/O 设备等目标。",
        "控制线（Control Bus）：传递控制信息、协调总线访问。"
      ],
      "explanation": "可记为：传什么、传到哪里、怎样协调传输。"
    },
    {
      "id": "ch1-k32",
      "topic": "computer",
      "title": "微型计算机硬件系统与 I/O 接口",
      "answer": [
        "微处理器 CPU、内存和各类 I/O 接口连接到系统总线。",
        "外存、输入设备、输出设备等通常通过相应接口与总线连接，再与 CPU 通信。"
      ],
      "explanation": "画图时抓住“CPU / 内存 / 接口接总线，实际外设接接口”的关系。",
      "diagram": "hardware"
    },
    {
      "id": "ch1-k33",
      "topic": "computer",
      "title": "计算机系统的组成结构",
      "answer": [
        "计算机系统 = 硬件系统 + 软件系统。",
        "硬件系统：主机与外部设备；主机包括 CPU、内存，CPU 包括运算器和控制器。",
        "外部设备包括输入设备、输出设备、外存和其他辅助设备。",
        "软件系统包括系统软件和应用软件。"
      ],
      "explanation": "",
      "diagram": "system"
    },
    {
      "id": "ch1-k34",
      "topic": "computer",
      "title": "系统软件与应用软件",
      "answer": [
        "软件通常包括程序，以及有关的数据和文档资料。",
        "系统软件：控制、协调计算机及外设，支持应用程序的开发和运行，例如操作系统、数据库管理系统。",
        "应用软件：满足具体领域或用户任务，例如办公软件、翻译软件。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-k35",
      "topic": "computer",
      "title": "存储程序原理解决了什么问题",
      "answer": [
        "把操作步骤表示为指令并存入存储器，使 CPU 能自动取指并连续执行，不必逐步人工干预。",
        "改变任务主要靠更换程序，提升了计算机的通用性和使用效率。",
        "若程序不能像数据一样保存，往往需要人工逐步设置操作，或改接线、改开关、另用外部指令控制装置等，改任务会更麻烦。"
      ],
      "explanation": "不能简单说“完全不能计算”；关键是缺少在存储器中保存并自动执行程序的便利。"
    },
    {
      "id": "ch1-k36",
      "topic": "computer",
      "title": "5 个设备两两互连与总线方案的比较",
      "answer": [
        "两两各用一条独立的双向逻辑链路：5 × 4 ÷ 2 = 10 条。",
        "总线方案：使用一组共享总线，5 个设备各自接入；若按设备接入支路计数，就是 5 处接入。",
        "共享也带来总线争用，需要仲裁和协调，且共享带宽可能形成瓶颈。"
      ],
      "explanation": "“一组总线”不等于“一根电线”。总线内部有多条数据、地址和控制线路；题目需区分逻辑互连与物理导线数。"
    }
  ],
  "questions": [
    {
      "id": "demo-01",
      "topic": "computer",
      "type": "choice",
      "title": "CPU 中，主要负责组织和协调各部件工作的部分是？",
      "answer": [
        "B · 控制器。"
      ],
      "explanation": "控制器负责组织和协调；运算器主要完成算术、逻辑运算。",
      "options": [
        "运算器",
        "控制器",
        "硬盘",
        "显示器"
      ],
      "correct": 1
    },
    {
      "id": "ch1-choice-02",
      "topic": "computer",
      "type": "choice",
      "title": "运算器 ALU 的主要任务是？",
      "answer": [
        "C · 完成算术运算与逻辑运算。"
      ],
      "explanation": "ALU 是算术逻辑单元。",
      "options": [
        "存放所有外存文件",
        "显示图像",
        "完成算术运算与逻辑运算",
        "刷新显示器"
      ],
      "correct": 2
    },
    {
      "id": "ch1-choice-03",
      "topic": "computer",
      "type": "choice",
      "title": "CPU 要从内存取出下一条指令时，首先需要参考哪个寄存器中的地址？",
      "answer": [
        "B · PC。"
      ],
      "explanation": "PC 给出取指地址，IR 保存当前取出的指令。",
      "options": [
        "IR",
        "PC",
        "显存",
        "输入缓冲区"
      ],
      "correct": 1
    },
    {
      "id": "ch1-choice-04",
      "topic": "computer",
      "type": "choice",
      "title": "当前取出的指令通常保存在什么位置？",
      "answer": [
        "A · IR。"
      ],
      "explanation": "IR 是指令寄存器。",
      "options": [
        "IR",
        "SSD",
        "主板电池",
        "显示器缓存"
      ],
      "correct": 0
    },
    {
      "id": "ch1-choice-05",
      "topic": "computer",
      "type": "choice",
      "title": "计算机能在程序控制下自动完成操作，依赖的基本原理是？",
      "answer": [
        "C · 存储程序。"
      ],
      "explanation": "程序和数据预先存入存储器，CPU 自动取指、译码、执行。",
      "options": [
        "逐条人工操作",
        "单纯提高总线速度",
        "存储程序",
        "把所有设备两两连接"
      ],
      "correct": 2
    },
    {
      "id": "ch1-choice-06",
      "topic": "computer",
      "type": "choice",
      "title": "按本章常见实现，CPU 高速缓存主要使用哪类芯片？",
      "answer": [
        "B · SRAM。"
      ],
      "explanation": "SRAM 速度快，常用于 Cache；DRAM 常用于内存。",
      "options": [
        "DRAM",
        "SRAM",
        "HDD",
        "光盘"
      ],
      "correct": 1
    },
    {
      "id": "ch1-choice-07",
      "topic": "computer",
      "type": "choice",
      "title": "下列哪一种存储器需要周期性刷新？",
      "answer": [
        "C · DRAM。"
      ],
      "explanation": "DRAM 用电容保存信息，需要刷新补充电荷。",
      "options": [
        "SRAM",
        "SSD",
        "DRAM",
        "HDD"
      ],
      "correct": 2
    },
    {
      "id": "ch1-choice-08",
      "topic": "computer",
      "type": "choice",
      "title": "关于 SSD，下列说法正确的是？",
      "answer": [
        "D · 通常使用闪存，没有机械运动部件。"
      ],
      "explanation": "SSD 是固态硬盘，HDD 才依靠旋转磁盘和磁头。",
      "options": [
        "通过旋转磁盘和磁头定位读写",
        "必须定时刷新才能断电保存",
        "只能放在 CPU 内部",
        "通常使用闪存，没有机械运动部件"
      ],
      "correct": 3
    },
    {
      "id": "ch1-choice-09",
      "topic": "computer",
      "type": "choice",
      "title": "系统总线中，用来确定访问目标位置的是？",
      "answer": [
        "B · 地址线。"
      ],
      "explanation": "地址线确定访问哪里，数据线传送实际数据。",
      "options": [
        "数据线",
        "地址线",
        "电源线",
        "音频线"
      ],
      "correct": 1
    },
    {
      "id": "ch1-choice-10",
      "topic": "computer",
      "type": "choice",
      "title": "下列哪一项属于系统软件？",
      "answer": [
        "C · 操作系统。"
      ],
      "explanation": "操作系统控制和协调系统资源，属于系统软件。",
      "options": [
        "办公文档",
        "翻译软件",
        "操作系统",
        "一张照片"
      ],
      "correct": 2
    },
    {
      "id": "ch1-choice-11",
      "topic": "computer",
      "type": "choice",
      "title": "显卡中的 GPU 最突出的工作特点是？",
      "answer": [
        "A · 擅长大量并行计算，常承担图形相关计算。"
      ],
      "explanation": "GPU 可与 CPU 同时工作，分担适合并行处理的任务。",
      "options": [
        "擅长大量并行计算，常承担图形相关计算",
        "只能代替内存存放程序",
        "只能逐条输入指令",
        "必须等 CPU 完全停止才能工作"
      ],
      "correct": 0
    },
    {
      "id": "ch1-choice-12",
      "topic": "computer",
      "type": "choice",
      "title": "外存、键盘等实际 I/O 设备通常怎样连接到系统总线？",
      "answer": [
        "B · 通过相应 I/O 接口。"
      ],
      "explanation": "接口连接系统总线与实际设备，协调设备通信。",
      "options": [
        "都直接连接到 ALU 内部",
        "通过相应 I/O 接口",
        "必须经过显示器",
        "只经过程序计数器"
      ],
      "correct": 1
    },
    {
      "id": "ch1-fill-13",
      "topic": "computer",
      "type": "fill",
      "title": "信息是经过 ______ 的数据。",
      "answer": [
        "加工处理。"
      ],
      "explanation": "这是本章对信息的简要定义。"
    },
    {
      "id": "ch1-fill-14",
      "topic": "computer",
      "type": "fill",
      "title": "信息技术对文字、图像、声音、视频等信息进行获取、加工、______、______ 与使用。",
      "answer": [
        "存储；传输。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-15",
      "topic": "computer",
      "type": "fill",
      "title": "本章介绍的计算机“三大件”是 ______、______ 和 ______。",
      "answer": [
        "CPU、内存、主板。"
      ],
      "explanation": "不要与冯·诺依曼的五大部件混淆。"
    },
    {
      "id": "ch1-fill-16",
      "topic": "computer",
      "type": "fill",
      "title": "CPU 主要由 ______ 和 ______ 两部分组成。",
      "answer": [
        "控制器；运算器。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-17",
      "topic": "computer",
      "type": "fill",
      "title": "ALU 的中文名称是 ______。",
      "answer": [
        "算术逻辑单元。"
      ],
      "explanation": "负责算术运算和逻辑运算。"
    },
    {
      "id": "ch1-fill-18",
      "topic": "computer",
      "type": "fill",
      "title": "冯·诺依曼体系采用 ______；程序与 ______ 一样存储在存储器中。",
      "answer": [
        "二进制；数据。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-19",
      "topic": "computer",
      "type": "fill",
      "title": "硬件五大部件中，除运算器、控制器、存储器外，还有 ______ 和 ______。",
      "answer": [
        "输入设备；输出设备。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-20",
      "topic": "computer",
      "type": "fill",
      "title": "指令周期的三个基本阶段依次为 ______、______、______。",
      "answer": [
        "取指；译码；执行。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-21",
      "topic": "computer",
      "type": "fill",
      "title": "程序计数器缩写为 ______，指令寄存器缩写为 ______。",
      "answer": [
        "PC；IR。"
      ],
      "explanation": "PC 指路，IR 保存当前指令。"
    },
    {
      "id": "ch1-fill-22",
      "topic": "computer",
      "type": "fill",
      "title": "常见存储层次：寄存器 → ______（SRAM）→ ______（DRAM）→ SSD / HDD。",
      "answer": [
        "Cache（高速缓存）；内存。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-23",
      "topic": "computer",
      "type": "fill",
      "title": "总线常见三类线路为 ______、______、______。",
      "answer": [
        "数据线；地址线；控制线。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-fill-24",
      "topic": "computer",
      "type": "fill",
      "title": "软件系统按用途通常分为 ______ 软件和 ______ 软件。",
      "answer": [
        "系统；应用。"
      ],
      "explanation": ""
    },
    {
      "id": "demo-02",
      "topic": "computer",
      "type": "judge",
      "title": "DRAM 需要周期性刷新，才能保持其中的数据。",
      "answer": [
        "正确。"
      ],
      "explanation": "DRAM 电容中的电荷会泄漏，需要定时刷新。",
      "correct": true
    },
    {
      "id": "ch1-judge-26",
      "topic": "computer",
      "type": "judge",
      "title": "SRAM 被称为静态存储器，所以断电后也能保持数据。",
      "answer": [
        "错误。"
      ],
      "explanation": "“静态”指通电时不需要周期性刷新；断电后 SRAM 数据仍会丢失。",
      "correct": false
    },
    {
      "id": "ch1-judge-27",
      "topic": "computer",
      "type": "judge",
      "title": "Cache 与内存采用不同实现，常见情况下 Cache 用 SRAM，内存用 DRAM。",
      "answer": [
        "正确。"
      ],
      "explanation": "这是本章的常见实现对比。",
      "correct": true
    },
    {
      "id": "ch1-judge-28",
      "topic": "computer",
      "type": "judge",
      "title": "PC 的作用是保存当前取出的指令内容，IR 的作用是保存下一条指令地址。",
      "answer": [
        "错误。"
      ],
      "explanation": "两者颠倒：PC 保存取指地址，IR 保存当前取出的指令。",
      "correct": false
    },
    {
      "id": "ch1-judge-29",
      "topic": "computer",
      "type": "judge",
      "title": "任何计算机在取指后，PC 都必须固定增加 1，且不能被跳转指令修改。",
      "answer": [
        "错误。"
      ],
      "explanation": "PC 的顺序增量与地址单位、指令长度有关；跳转指令可以修改 PC。",
      "correct": false
    },
    {
      "id": "ch1-judge-30",
      "topic": "computer",
      "type": "judge",
      "title": "GPU 可以与 CPU 同时执行计算，从而分担部分计算负载。",
      "answer": [
        "正确。"
      ],
      "explanation": "二者可并行工作，GPU 常承担适合大量并行处理的计算。",
      "correct": true
    },
    {
      "id": "ch1-judge-31",
      "topic": "computer",
      "type": "judge",
      "title": "SSD 与 HDD 都必须依靠磁盘旋转和磁头才能读写数据。",
      "answer": [
        "错误。"
      ],
      "explanation": "HDD 使用磁盘和磁头；SSD 通常使用闪存，没有机械运动部件。",
      "correct": false
    },
    {
      "id": "ch1-judge-32",
      "topic": "computer",
      "type": "judge",
      "title": "在本章典型层次模型中，越靠近 CPU，通常速度越快、单位容量成本越高、容量越小。",
      "answer": [
        "正确。"
      ],
      "explanation": "这是速度、容量、成本之间的典型折中规律。",
      "correct": true
    },
    {
      "id": "ch1-judge-33",
      "topic": "computer",
      "type": "judge",
      "title": "总线的数据线负责确定访问目标，地址线负责传输实际数据。",
      "answer": [
        "错误。"
      ],
      "explanation": "数据线传数据，地址线确定访问目标。",
      "correct": false
    },
    {
      "id": "ch1-judge-34",
      "topic": "computer",
      "type": "judge",
      "title": "使用共享总线可以减少复杂的两两互连，但仍可能产生争用和带宽瓶颈。",
      "answer": [
        "正确。"
      ],
      "explanation": "共享资源需要协调访问，多个设备可能竞争同一总线。",
      "correct": true
    },
    {
      "id": "ch1-judge-35",
      "topic": "computer",
      "type": "judge",
      "title": "所有 I/O 设备都直接连接系统总线，不需要任何接口。",
      "answer": [
        "错误。"
      ],
      "explanation": "本章结构中，实际 I/O 设备通常通过相应接口接入总线。",
      "correct": false
    },
    {
      "id": "ch1-judge-36",
      "topic": "computer",
      "type": "judge",
      "title": "操作系统和数据库管理系统属于系统软件，办公软件和翻译软件属于应用软件。",
      "answer": [
        "正确。"
      ],
      "explanation": "按是否管理、支持系统或满足具体应用任务来区分。",
      "correct": true
    },
    {
      "id": "ch1-short-37",
      "topic": "computer",
      "type": "short",
      "title": "简述计算机硬件的五大部件及其功能。",
      "answer": [
        "运算器：完成算术运算和逻辑运算。",
        "控制器：组织、协调和控制各部件的工作。",
        "存储器：存放程序和数据，是实现存储程序原理的硬件基础。",
        "输入设备：接收输入的原始数据和程序。",
        "输出设备：把处理结果转换为人们能接受的形式并输出。"
      ],
      "explanation": "回答时把名称和功能逐一对应。"
    },
    {
      "id": "ch1-short-38",
      "topic": "computer",
      "type": "short",
      "title": "“存储程序”原理解决了什么问题？如果程序不能像数据一样存进内存，使用计算机会怎样？",
      "answer": [
        "把操作步骤表示为指令并存入存储器，使 CPU 能自动取指并连续执行，不必逐步人工干预。",
        "改变任务主要靠更换程序，提升了计算机的通用性和使用效率。",
        "若程序不能像数据一样保存，往往需要人工逐步设置操作，或改接线、改开关、另用外部指令控制装置等，改任务会更麻烦。"
      ],
      "explanation": "不能简单说“完全不能计算”；关键是缺少在存储器中保存并自动执行程序的便利。"
    },
    {
      "id": "ch1-short-39",
      "topic": "computer",
      "type": "short",
      "title": "概括冯·诺依曼体系的三个重要思想，并说明程序和数据同存有什么意义。",
      "answer": [
        "采用二进制。",
        "程序和数据一样存储在存储器中。",
        "计算机由运算器、控制器、存储器、输入设备、输出设备五大部件组成。",
        "程序可由 CPU 自动读取、执行；更换程序即可改变任务。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-short-40",
      "topic": "computer",
      "type": "short",
      "title": "简述取指、译码、执行三个阶段，并说明 PC 和 IR 的作用。",
      "answer": [
        "取指：按 PC 中的地址从内存读取指令，放入 IR，并更新后续取指地址。",
        "译码：控制器分析 IR 中的指令，确定操作与操作数位置等。",
        "执行：完成指令要求的操作，保存结果，必要时修改 PC。",
        "PC 保存取指地址；IR 保存当前取出的指令。"
      ],
      "explanation": "课件“PC 加 1”按简化的指令单位理解，不能推广为所有机器固定增加一个字节。"
    },
    {
      "id": "ch1-short-41",
      "topic": "computer",
      "type": "short",
      "title": "CPU 与 GPU 有什么分工？两者能否同时工作？",
      "answer": [
        "显卡中包含 GPU，即图形处理器。GPU 擅长大量并行计算，常承担图像、视频、动画等图形相关计算。",
        "CPU 是中央处理器，承担通用计算、控制和协调等任务。",
        "GPU 可以与 CPU 同时工作，分担计算负载。"
      ],
      "explanation": "GPU 并非只能处理图形，也可执行其他适合并行的计算；本章重点是它与 CPU 的分工。"
    },
    {
      "id": "ch1-short-42",
      "topic": "computer",
      "type": "short",
      "title": "画出典型存储层次，并概括从上到下的速度、容量与单位成本变化。",
      "answer": [
        "典型层次：寄存器 → Cache（SRAM）→ 内存（DRAM）→ SSD / HDD。",
        "通常越靠近 CPU，速度越快、单位容量成本越高、容量越小；向下则相反。",
        "本章用相邻层之间传递数据的层次模型理解存储系统。"
      ],
      "explanation": "图中的 SSD、HDD 表示典型外存层次，不是说每台计算机都必须同时配置两者。",
      "diagram": "memory"
    },
    {
      "id": "ch1-short-43",
      "topic": "computer",
      "type": "short",
      "title": "既然 Cache 比内存快，为什么不把 Cache 做得和内存一样大？从成本、电路复杂度和物理距离三个角度回答。",
      "answer": [
        "成本：SRAM 的单位容量成本高，大容量 Cache 会显著增加芯片面积和成本。",
        "电路复杂度：容量增大，寻址、译码、选择和布线等电路更复杂，延时和功耗也会增加。",
        "物理距离：芯片面积增大后，部分存储单元与 CPU 的距离变远，信号传播时间增长。"
      ],
      "explanation": "因此采用小而快的 Cache 与较大、较便宜的内存组成层次结构，折中速度、容量和成本。"
    },
    {
      "id": "ch1-short-44",
      "topic": "computer",
      "type": "short",
      "title": "比较 SRAM 和 DRAM 的刷新要求、速度、成本、密度及常见用途。",
      "answer": [
        "SRAM：静态；不需周期性刷新；速度较快；成本较高；密度较低；常用于 Cache。",
        "DRAM：动态；需要刷新；速度相对较慢；成本较低；密度较高；常用于内存。",
        "两者都是易失性存储器，断电后数据都会丢失。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-short-45",
      "topic": "computer",
      "type": "short",
      "title": "SSD 和 HDD 的工作结构有什么区别？",
      "answer": [
        "SSD：固态硬盘，主要由闪存颗粒和主控芯片组成，没有机械运动结构，也不需要磁头。",
        "HDD：机械硬盘，依靠磁盘高速旋转和磁头定位读写数据。",
        "SSD 的访问速度通常较快；HDD 通常具有较低的单位容量成本。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-short-46",
      "topic": "computer",
      "type": "short",
      "title": "总线是什么？数据线、地址线、控制线分别做什么？",
      "answer": [
        "总线是计算机各部件之间进行通信的一组公共线路。",
        "用共享通道代替复杂的两两互连，减少互连复杂性和部件之间的耦合。",
        "数据线（Data Bus）：传输实际的数据。",
        "地址线（Address Bus）：确定访问的内存位置或 I/O 设备等目标。",
        "控制线（Control Bus）：传递控制信息、协调总线访问。"
      ],
      "explanation": ""
    },
    {
      "id": "ch1-short-47",
      "topic": "computer",
      "type": "short",
      "title": "5 个设备两两互连需要多少条独立链路？改用总线后如何连接，又会带来什么新问题？",
      "answer": [
        "两两各用一条独立的双向逻辑链路：5 × 4 ÷ 2 = 10 条。",
        "总线方案：使用一组共享总线，5 个设备各自接入；若按设备接入支路计数，就是 5 处接入。",
        "共享也带来总线争用，需要仲裁和协调，且共享带宽可能形成瓶颈。"
      ],
      "explanation": "“一组总线”不等于“一根电线”。总线内部有多条数据、地址和控制线路；题目需区分逻辑互连与物理导线数。"
    },
    {
      "id": "ch1-short-48",
      "topic": "computer",
      "type": "short",
      "title": "画出微型计算机硬件系统的基本连接关系，并区分系统软件和应用软件。",
      "answer": [
        "微处理器 CPU、内存和各类 I/O 接口连接到系统总线。",
        "外存、输入设备、输出设备等通常通过相应接口与总线连接，再与 CPU 通信。",
        "系统软件用于控制、协调和支持系统，例如操作系统、数据库管理系统；应用软件完成具体任务，例如办公软件、翻译软件。"
      ],
      "explanation": "画图时保留系统总线及各 I/O 接口，不要把实际设备和接口混为一体。",
      "diagram": "hardware"
    }
  ],
  "notice": "已加入第一章：计算机组成原理。其他章节待添加。",
  "checklists": [
    {
      "topic": "computer",
      "title": "第一章复习自查",
      "items": [
        {
          "id": "ch1-check-hardware",
          "text": "能说出硬件五大部件及各自功能。"
        },
        {
          "id": "ch1-check-von",
          "text": "能复述冯·诺依曼的三个重要思想。"
        },
        {
          "id": "ch1-check-cycle",
          "text": "能说明取指、译码、执行，以及 PC、IR 的作用。"
        },
        {
          "id": "ch1-check-memory",
          "text": "能画出存储层次，比较 SRAM、DRAM、SSD、HDD。"
        },
        {
          "id": "ch1-check-bus",
          "text": "能区分数据线、地址线、控制线，并解释共享总线。"
        },
        {
          "id": "ch1-check-system",
          "text": "能画出硬件系统结构，区分系统软件与应用软件。"
        }
      ]
    }
  ]
};
