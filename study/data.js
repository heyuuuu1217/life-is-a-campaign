/* 原稿知识点、明确请求的补充解答；题库沿用原版本。 */
window.STUDY_CONTENT = {
  "version": "verbatim-tablet-20261107-1",
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
      "title": "第二章 信息的表示",
      "subtitle": "二进制、编码与数字化",
      "mark": "02",
      "icon": "binary"
    },
    {
      "id": "data",
      "title": "第三章 大数据技术与应用",
      "subtitle": "数据怎样变成有用的信息",
      "mark": "03",
      "icon": "layers"
    },
    {
      "id": "ai",
      "title": "第四章 人工智能技术与应用",
      "subtitle": "表示、推理与智能应用",
      "mark": "04",
      "icon": "spark"
    },
    {
      "id": "cloud-iot",
      "title": "第五章 云计算与物联网",
      "subtitle": "算力、感知与连接，放在一起",
      "mark": "05",
      "icon": "cloud"
    },
    {
      "id": "ml",
      "title": "第七章 机器学习简介",
      "subtitle": "从数据中学习，也学会评估",
      "mark": "07",
      "icon": "nodes"
    }
  ],
  "knowledge": [
    {
      "id": "ch1-k01",
      "topic": "computer",
      "title": "信息的定义",
      "answer": [
        "信息的定义：信息是经过加工处理的数据。\n\n信息是对客观世界中各种事物的运动状态和变化的反映，是客观事物之间相互联系和相互作用的表征，表的是客观事物运动状态和变化的实质内容。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k02",
      "topic": "computer",
      "title": "信息技术的含义",
      "answer": [
        "“信息技术教育”中的“信息技术”\n指利用计算机、网络等各种硬件设备及软件工具与科学方法，对文、图、声、像各种信息进行获\n取、加工、存储、传输与使用的技术之和。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k03",
      "topic": "computer",
      "title": "计算机的基本工作原理",
      "answer": [
        "计算机的基本工作原理：“存储程序”的原理\n计算机能够自动完成运算，是因为在存储器中“存储”了程序。计算机是在程序的控制下自动完成相应操作的。这就是所谓“存储程序”原理，即计算机的基本工作原理，又被称为“冯·诺依曼原理”。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k04",
      "topic": "computer",
      "title": "计算机硬件的五大部件及功能",
      "answer": [
        "各部件功能\n运算器：负责完成所有算术运算、逻辑运算任务。\n控制器：控制整个计算机所有部件的工作。可以认为控制器控制着计算机硬件系统的全部动作。\n存储器：是计算机能够实现“存储程序”原理的硬件基础。程序和数据均以二进制形式存储在其中。\n输入设备：用来接受用户输入的原始数据和程序。\n输出设备：用于将计算机处理得到的运算结果等，转变为人们所能接受的形式，输出到相应的介质上，供观看、保存等。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k05",
      "topic": "computer",
      "title": "计算机的工作过程",
      "answer": [
        "所有的计算机程序，都可以抽象为从输入设备读取输入信息，通过运算器和控制器来执行存储在存储器里的程序，最终把结果输出到输出设备中。无论高级还是低级语言的程序，也都是基于这样一个抽象框架来进行运作的。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k06",
      "topic": "computer",
      "title": "计算机“三大件”",
      "answer": [
        "计算机三大件：CPU、内存和主板"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k07",
      "topic": "computer",
      "title": "CPU 的主要组成",
      "answer": [
        "中央处理器主要包括两个部分：控制器、运算器。",
        "计算机的组成部分：\n包含算术逻辑单元（Arithmetic Logic Unit，ALU）和处理器寄存器（Processor Register）的处理器单元。用来完成各种算术和逻辑运算。它能够完成各种数据的处理或者计算工作。\n包含指令寄存器（Instruction Register）和程序计数器（Program Counter）的控\n制器单元（Control Unit/CU），用来控制程序的流程，通常就是不同条件下的分支和跳转。在\n现在的计算机里，上面的算术逻辑单元和这里的控制器单元，共同组成了我们说的 CPU。\n用来存储数据（Data）和指令（Instruction）的内存\n输入和输出设备，以及对应的输入和输出机制。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k08",
      "topic": "computer",
      "title": "运算器与 ALU 的作用",
      "answer": [
        "运算器(ALU)：负责完成所有算术运算、逻辑运算任务。"
      ],
      "origin": "outline"
    },
    {
      "id": "knowledge-02",
      "topic": "computer",
      "title": "控制器的作用",
      "answer": [
        "控制器：控制整个计算机所有部件的工作。可以认为控制器控制着计算机硬件系统的全部动作。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k10",
      "topic": "computer",
      "title": "内存的作用",
      "answer": [
        "内存：程序、打开的浏览器、运行的游戏，都要加载到内存里才能运行。程序读取的数据、计算得到的结果，也都要放在内存里。内存越大，能加载的东西自然也就越多。存放在内存里的程序和数据，需要被 CPU 读取，CPU 计算完之后，还要把数据写回到内存。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k11",
      "topic": "computer",
      "title": "主板、芯片组和总线的作用",
      "answer": [
        "主板：主板的芯片组（Chipset）和总线（Bus）解决了 CPU 和内存之间如何通信的问题。芯片组控制\n了数据传输的流转，也就是数据从哪里到哪里的问题。总线则是实际数据传输的高速公路。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k12",
      "topic": "computer",
      "title": "总线速度的含义",
      "answer": [
        "总线速度（Bus Speed）：决定了数据能传输得多快。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k13",
      "topic": "computer",
      "title": "输入设备与输出设备",
      "answer": [
        "输出设备：显示器\n输入设备：鼠标和键盘"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k14",
      "topic": "computer",
      "title": "GPU 的作用及其与 CPU 的区别",
      "answer": [
        "显卡：内含GPU\n\nGPU作用：GPU 的工作方式与 CPU 类似——它以极快的速度执行计算。\nGPU 的主要工作是进行与图形相关的计算，以便 CPU 可以继续处理其他所有事情。\n由于它是一个独立的芯片，它可以与 CPU 同时执行计算，从而为其他任务腾出处理能力\n\nGPU与CPU不同：CPU 是中央处理器，它是计算机的主要大脑。\nGPU 专用于执行在计算机上渲染图像、视频和动画所需的密集计算。\nGPU 对于需要大量处理能力的高分辨率视频游戏尤为重要。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k15",
      "topic": "computer",
      "title": "冯·诺依曼体系的三个重要思想",
      "answer": [
        "冯·诺依曼的重要思想：\n二进制； 程序与数据一样存储在内存； 五大部件组成。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k16",
      "topic": "computer",
      "title": "PC 与 IR 的作用",
      "answer": [
        "指令周期：取指 → 译码 → 执行；PC 指路，IR 存当前指令"
      ],
      "origin": "outline"
    },
    {
      "id": "knowledge-01",
      "topic": "computer",
      "title": "指令周期",
      "answer": [
        "取指（Fetch）：按程序计数器 PC 中的地址，从内存读出下一条指令，存入指令寄存器 IR；\n随后 PC 自动加 1\n译码（Decode）：控制器解读 IR 中的指令——做什么操作？数据在哪里？\n执行（Execute）：运算器完成运算，结果写回寄存器或内存；遇到跳转指令则修改 PC"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k18",
      "topic": "computer",
      "title": "取指阶段做什么",
      "answer": [
        "取指（Fetch）：按程序计数器 PC 中的地址，从内存读出下一条指令，存入指令寄存器 IR；\n随后 PC 自动加 1"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k19",
      "topic": "computer",
      "title": "译码阶段做什么",
      "answer": [
        "译码（Decode）：控制器解读 IR 中的指令——做什么操作？数据在哪里？"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k20",
      "topic": "computer",
      "title": "执行阶段做什么",
      "answer": [
        "执行（Execute）：运算器完成运算，结果写回寄存器或内存；遇到跳转指令则修改 PC"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k21",
      "topic": "computer",
      "title": "存储器的层次结构与变化规律",
      "answer": [
        "存储器层次：寄存器 → Cache(SRAM) → 内存(DRAM) →\nSSD/HDD——越靠近 CPU 越快、越贵、容量越小，每层只与相邻层打交道"
      ],
      "origin": "outline",
      "diagram": "memory"
    },
    {
      "id": "ch1-k22",
      "topic": "computer",
      "title": "寄存器的特点",
      "answer": [
        "CPU中的寄存器（Register）。寄存器与其说是存储器，其实它更像是CPU 本身的一部分，只能存放极其有限的信息，但是速度非常快，和 CPU 同步。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k23",
      "topic": "computer",
      "title": "CPU 高速缓存的常见层级",
      "answer": [
        "在 CPU 里，通常会有 L1、L2、L3 这样三层高速缓存。每个 CPU 核心都有一块属于自己的 L1 高速缓存，通常分成指令缓存和数据缓存，分开存放 CPU 使用的指令和数据。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k24",
      "topic": "computer",
      "title": "SRAM 的名称与特点",
      "answer": [
        "CPUCache 用的是一种叫作 SRAM（Static Random-Access Memory，静态随机存取存储器）的芯片。  SRAM 之所以被称为“静态”存储器，是因为只要处在通电状态，里面的数据就可以保持存在。而一旦断电，里面的数据就会丢失了。"
      ],
      "origin": "outline"
    },
    {
      "id": "knowledge-03",
      "topic": "computer",
      "title": "DRAM 的名称、刷新与特点",
      "answer": [
        "内存用的芯片和 Cache 有所不同，它用的是一种叫作 DRAM（Dynamic Random Access\nMemory，动态随机存取存储器）的芯片，比起 SRAM 来说，它的密度更高，有更大的容量，\n而且它也比 SRAM 芯片便宜不少。\nDRAM 被称为“动态”存储器，是因为 DRAM 需要靠不断地“刷新”，才能保持数据被存储起\n来。DRAM 在同样的物理空间下，能够存储的数据也就更多，也就是存储的“密度”更大。\n但是，因为数据是存储在电容里的，电容会不断漏电，所以需要定时刷新充电，才能保持数据不\n丢失。DRAM 的数据访问电路和刷新电路都比 SRAM 更复杂，所以访问延时也就更长。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k26",
      "topic": "computer",
      "title": "SRAM 与 DRAM 的比较",
      "answer": [
        "CPUCache 用的是一种叫作 SRAM（Static Random-Access Memory，静态随机存取存储器）的芯片。  SRAM 之所以被称为“静态”存储器，是因为只要处在通电状态，里面的数据就可以保持存在。而一旦断电，里面的数据就会丢失了。",
        "内存用的芯片和 Cache 有所不同，它用的是一种叫作 DRAM（Dynamic Random Access\nMemory，动态随机存取存储器）的芯片，比起 SRAM 来说，它的密度更高，有更大的容量，\n而且它也比 SRAM 芯片便宜不少。\nDRAM 被称为“动态”存储器，是因为 DRAM 需要靠不断地“刷新”，才能保持数据被存储起\n来。DRAM 在同样的物理空间下，能够存储的数据也就更多，也就是存储的“密度”更大。\n但是，因为数据是存储在电容里的，电容会不断漏电，所以需要定时刷新充电，才能保持数据不\n丢失。DRAM 的数据访问电路和刷新电路都比 SRAM 更复杂，所以访问延时也就更长。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k27",
      "topic": "computer",
      "title": "SSD 与 HDD 的区别",
      "answer": [
        "SSD（Solid-state drive 或 Solid-state disk，固态硬盘）\n由多个闪存颗粒和主控芯片组成，没有运动结构设计，可以想象成一个大U盘。不用磁头，读取速度相对机械硬盘更快\n\nHDD（Hard Disk Drive，机械硬盘）\n机械硬盘工作时，通过磁盘高速旋转，用磁头在磁盘上寻找数据"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k28",
      "topic": "computer",
      "title": "内存与外存的区别",
      "answer": [
        "内存 外存区别\n内部存储器：访问速度快、信息易失性、相对价格高\n外部存储器：访问速度慢、信息永久性、相对价格低"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k29",
      "topic": "computer",
      "title": "存储器的层级结构",
      "answer": [
        "存储器的层级结构（也是了解即可）\n整个存储器的层次结构，其实都类似于 SRAM 和 DRAM 在性能和价格上的差异。SRAM 更贵，\n速度更快。DRAM 更便宜，容量更大。SRAM 好像我们的大脑中的记忆，而 DRAM 就好像属于\n我们自己的书桌。\n大脑（CPU）中的记忆（L1 Cache），不仅受成本层面的限制，更受物理层面的限制。这就好比\nL1 Cache 不仅昂贵，其访问速度和它到 CPU 的物理距离有关。芯片造得越大，总有部分离 CPU\n的距离会变远。电信号的传输速度又受物理原理的限制，没法超过光速。所以想要快，并不是靠多\n花钱就能解决的。\n我们自己的书房和书桌（也就是内存）空间一般是有限的，没有办法放下所有书（也就是数据）。\n如果想要扩大空间的话，就相当于要多买几平方米的房子，成本就会很高。于是，想要放下更多的\n书，我们就要寻找更加廉价的解决方案。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k30",
      "topic": "computer",
      "title": "总线的定义与设计目的",
      "answer": [
        "总线：计算机里各个不同的组件之间用来通信的渠道。\n\n总线的设计思路，核心是为了减少多个模块之间交互的复杂性和耦合度。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k31",
      "topic": "computer",
      "title": "总线的三类线路及作用",
      "answer": [
        "总线通常有三类线路\na. 数据线（Data Bus），用来传输实际的数据信息。\nb. 地址线（Address Bus），用来确定到底把数据传输到哪里去，是内存的某个位置，还是某一个 I/O 设备。\nc. 控制线（Control Bus），用来控制对于总线的访问"
      ],
      "origin": "outline"
    },
    {
      "id": "ch1-k32",
      "topic": "computer",
      "title": "微型计算机的硬件系统",
      "answer": [],
      "origin": "slides",
      "diagram": "hardware",
      "sourceNote": "原课件 PDF 第11页右下。"
    },
    {
      "id": "ch1-k33",
      "topic": "computer",
      "title": "计算机系统的组成",
      "answer": [],
      "origin": "slides",
      "diagram": "system",
      "sourceNote": "原课件 PDF 第12页左上。"
    },
    {
      "id": "ch1-k34",
      "topic": "computer",
      "title": "计算机系统的软件系统",
      "answer": [],
      "origin": "slides",
      "diagram": "software",
      "sourceNote": "原课件 PDF 第12页右上。"
    },
    {
      "id": "ch1-k35",
      "topic": "computer",
      "title": "思考题：存储程序原理解决了什么问题？",
      "answer": [
        "把操作步骤表示为指令并存入存储器，使 CPU 能自动取指并连续执行，不必逐步人工干预。",
        "改变任务主要靠更换程序，提升了计算机的通用性和使用效率。",
        "若程序不能像数据一样保存，往往需要人工逐步设置操作，或改接线、改开关、另用外部指令控制装置等，改任务会更麻烦。"
      ],
      "origin": "supplement"
    },
    {
      "id": "ch1-k36",
      "topic": "computer",
      "title": "思考题：5个设备互连与总线方案",
      "answer": [
        "两两各用一条独立的双向逻辑链路：5 × 4 ÷ 2 = 10 条。",
        "总线方案：使用一组共享总线，5 个设备各自接入；若按设备接入支路计数，就是 5 处接入。",
        "共享也带来总线争用，需要仲裁和协调，且共享带宽可能形成瓶颈。"
      ],
      "origin": "supplement"
    },
    {
      "id": "supplement-operation-reason",
      "topic": "computer",
      "title": "为什么采用这种工作方式？",
      "origin": "supplement",
      "answer": [
        "这样设计使计算机能自动执行程序；更换程序即可改变任务；部件分工也便于组织和协调。"
      ]
    },
    {
      "id": "supplement-cache-size",
      "topic": "computer",
      "title": "思考题：为什么不把 Cache 做得和内存一样大？",
      "origin": "supplement",
      "answer": [
        "整个存储器的层次结构，其实都类似于 SRAM 和 DRAM 在性能和价格上的差异。SRAM 更贵，\n速度更快。DRAM 更便宜，容量更大。SRAM 好像我们的大脑中的记忆，而 DRAM 就好像属于\n我们自己的书桌。",
        "电路复杂度：容量增大，寻址、译码、选择和布线等电路更复杂，延时和功耗也会增加。",
        "大脑（CPU）中的记忆（L1 Cache），不仅受成本层面的限制，更受物理层面的限制。这就好比\nL1 Cache 不仅昂贵，其访问速度和它到 CPU 的物理距离有关。芯片造得越大，总有部分离 CPU\n的距离会变远。电信号的传输速度又受物理原理的限制，没法超过光速。所以想要快，并不是靠多\n花钱就能解决的。"
      ]
    },
    {
      "id": "ch2-k01",
      "topic": "representation",
      "title": "多媒体计算机的含义",
      "answer": [
        "多媒体计算机：能够对数字，文字，图形，图像，音频，视频等多媒体信息进行综合处理的计算机。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k02",
      "topic": "representation",
      "title": "bit、Byte、word 与字长",
      "answer": [
        "数据量度单位：\n比特（bit）：又称为“位元”，简称为“位”。表示一个二进制数码0或1，比特是计算机中存储、运算和传输信息的最小单位。\n字节（Byte）：又称为“位组”，是二进制信息的计量单位。字节是固定单位，不会随架构而变化，1个字节等于8个比特。通常用 B 表示字节。\n字（word）：表示 CPU 中被处理信息的单位，不同的计算机，字的长度和组成不一定相同。一个字一般由多个字节构成。计算机的字长决定CPU一次处理实际位数的多少，字长越大，性能越优。\n字长（word length）: 计算机的每个字包含的位数称为字长。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k03",
      "topic": "representation",
      "title": "数据量度单位（续）",
      "answer": [
        "数据量度单位\n性质:1word=2Byte=16bit一个字由两个字节组成，16位组成通常称16位是一个字，32位是一个双字，64位是两个双字计算机的字长决定CPU一次处理实际位数的多少，字长越大，性能越优。\n4.字长:计算机的每个字包含的位数称为字长。\n性质:计算的字长是指一次可处理的二进制数字的数目。\n计算机处理数据的速率，自然和它一次能加工的位数以及进行运算的快慢有关。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k04",
      "topic": "representation",
      "title": "存储容量单位及换算",
      "answer": [
        "存储单位的换算\nPB > TB > GB > MB > KB > B"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k05",
      "topic": "representation",
      "title": "数制、基数与数码",
      "answer": [
        "数制：用一组固定的数字（符号的个数）和一套统一的规则（进位的规律）表示数值\n\n基数：数制中所含数字符号的个数",
        "不同进制共同特点\n逢进制进位。\nX进制的数有0~(X-1)共X个数码。\n数所表示的值不仅取决于数码的大小，还取决于数码所在的位置。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k06",
      "topic": "representation",
      "title": "位权的定义",
      "answer": [
        "位权是某一位置代表的基数幂。r 进制中，整数个位的权为 r⁰，向左依次为 r¹、r²……；小数点右侧依次为 r⁻¹、r⁻²……。"
      ],
      "origin": "supplement"
    },
    {
      "id": "outline-positional-expansion",
      "topic": "representation",
      "title": "按权展开式",
      "answer": [
        "按权展开式：每一位的数值=数码×位权"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k07",
      "topic": "representation",
      "title": "为什么常用八进制和十六进制",
      "answer": [
        "为什么需要八进制和十六进制?\n二进制书写和阅读都太不方便了，就用十六进制、八进制来简化。\n\n为什么偏偏是16或8进制，而不其它的，诸如9或20进制呢？\n2、8、16，分别是2的1次方，3次方，4次方。这一点使得三种进制之间可以非常直接地互相转换。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k08",
      "topic": "representation",
      "title": "十进制转八进制、十六进制的思路",
      "answer": [
        "十进制转换成八或十六进制数时，先将其转换为二进制数，再由二进制数转换成八或十六进制数更方便"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k09",
      "topic": "representation",
      "title": "进制转换的精确性",
      "answer": [
        "所有的十进制整数都能准确地转换成二进制整数，但是十进制小数不一定能精确地转换成二进制小数。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k11",
      "topic": "representation",
      "title": "机器数与真值",
      "answer": [
        "机器数：在机器内存放的正负号用“0”或“1”数码化的数。\n机器数的真值：与机器数对应的由正负号表示的数称为机器数的真值。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k12",
      "topic": "representation",
      "title": "定点整数和定点小数",
      "answer": [
        "定点表示法：约定所有数值数据的小数点隐含在某一个固定位置上。\n 一般固定在机器数的最低位之后，或是固定在符号位之后。前者称为定点纯整数，后者称为定点纯小数。\n定点数表示法简单直观，但是数值表示的范围太小，运算时容易产生溢出。",
        "定点整数 ：将小数点固定在数的最低位之后\n定点小数 ：将小数点固定在数的符号位之后、最高数位之前"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k13",
      "topic": "representation",
      "title": "浮点数的组成",
      "answer": [
        "浮点表示法：类似于十进制中的科学计数法，即用一个尾数，一个基数，一个指数以及一个符号位来表达实数。\n比如 123.45 用十进制科学计数法可以表达为 (-1)^0 x 1.2345 × 10^2 ，其中 （-1）\n^0的0表示符号位（备注：如果表示负数，符号位为1），1.2345 为尾数，10 为基数，2为指数。\n浮点数利用指数达到了浮动小数点的效果，从而可以灵活地表达更大范围的实数。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k14",
      "topic": "representation",
      "title": "定点数与浮点数的比较",
      "answer": [
        "浮点数与定点数的比较：\n当相同位数的计算机表示数据（比如64位），浮点数能表示的数据范围远远大于定点数表示的数据范围。\n当相同位数的计算机表示数据（比如64位），浮点数的相对精度比定点数要高。\n浮点数在计算时，要分阶码部分的计算和尾数部分的计算，而且运算结果要求规格化，故浮点运算步骤比定点数运算步骤多，运算速度比定点运算速度低。\n目前大多数计算机使用浮点数表示小数。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k15",
      "topic": "representation",
      "title": "原码、反码与补码的规则",
      "answer": [
        "原码：一个二进制数同时包含符号和数值两部分，用最高位表示符号，其余位表示数值，这种表示带符号数的方法称为原码表示法。\n反码：反码是另一种表示有符号数的方法。对于正数，其反码与原码相同；对于负数，在求反码的时候，除了符号位外，其余各位按位取反，即“1”变“0”，“0”变“1”。\n补码：补码是表示带符号数的最直接方法。对于正数，其补码与原码相同；对于负数，则其补码为反码加1。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k17",
      "topic": "representation",
      "title": "为什么使用补码",
      "answer": [
        "在计算机中，数据都是补码的形式。\n\n为什么要有这些码？\n计算机里面的算术逻辑单元（ALU）所进行的加减乘除运算，都是通过加法\n进行的，原因是因为实现加法的最基本的输入输出逻辑门电路最简单。减法\n运算是通过补码将减法转变为加法。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k18",
      "topic": "representation",
      "title": "常用 ASCII 字符编码",
      "answer": [
        "常用字符的ASCII编码\n‘a’字符的编码为1100001B=61H=97\n‘A’字母字符的编码为1000001B=41H=65\n‘0’数字字符的编码为0110000B=30H=48\n‘ ’空格字符的编码为0100000B=20H=32；\n‘LF(换行) ’控制符的编码为0001010B=0AH=10；\n‘CR(回车) ’控制符的编码为0001101B=0DH=13。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k19",
      "topic": "representation",
      "title": "模拟信号、离散时间信号与数字信号",
      "answer": [
        "模拟信号：把在时间上和幅度上都是连续的信号称为模拟信号。\n数字信号：把时间和幅度都用离散的数字表示的信号称\n为数字信号。\n采样(Sampling)：在特定的某些时刻对这种模拟信号进行测量。\n离散时间信号：由这些特定时刻采样得到的信号。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k20",
      "topic": "representation",
      "title": "声音数字化：采样、量化、编码",
      "answer": [
        "数字化实际就是采样和量化。\n\n声音模拟信号转换成数字信号\n采样：每隔一定时间间隔在模拟信号上取一个幅度值，把时间上连续的信号变成时间上离散的信号。\n量化：将每个采样点得到的幅度值以数字存储。\n编码：将采样和量化以后的数字数据以一定格式记录下来。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k21",
      "topic": "representation",
      "title": "样本位数与量化级数",
      "answer": [
        "样本大小：用每个声音样本的位数(bit/s或b/s)表示，它反映了度量声音波形幅度的精\n度。\n样本位数的大小影响到声音的质量。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k22",
      "topic": "representation",
      "title": "采样频率与采样定理",
      "answer": [
        "奈奎斯特理论指出：采样频率不应低于声音信号最高频率的两倍，这样就能把以数字表达的声音还原成原来的声音，这叫做无损数字化（lossless digitization）。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k23",
      "topic": "representation",
      "title": "离散样本能唯一确定或恢复原连续信号吗？",
      "answer": [
        "一般不能：任意连续信号可能在采样点相同、在采样点之间不同。",
        "若信号带限、采样率满足采样定理，并具备理想采样与重建等条件，则理想样本可唯一确定并恢复原带限信号。",
        "实际有限位数量化会引入误差，插值不能自动找回已经丢失的全部信息。"
      ],
      "origin": "supplement"
    },
    {
      "id": "ch2-k24",
      "topic": "representation",
      "title": "未压缩 PCM 音频的数据率与数据量",
      "answer": [
        "声音的数据率计算：\n声音数据率（B/s） =采样频率（Hz）× 量化位数（bit）× 声道数/8\n\n估算一定时长（秒）某种音质的音频数据量：\n声音数据量 = 声音数据率×时长"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k26",
      "topic": "representation",
      "title": "声音播放中的解码、D/A 与插值",
      "answer": [
        "解码：编码的逆过程，又称解压缩；\nD/A转换：将数字量再转化为模拟量便于驱动扬声器发音；\n插值：为了弥补在采样过程中引起的语音信号失真而采取的一种补救措施，使得声音更加自然。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k27",
      "topic": "representation",
      "title": "影响数字声音质量的三个要素",
      "answer": [
        "三个影响声音质量的要素\n• 采样速率:是指在记录过程中，每秒对声音测量的次数。采样速率以Hz为单位。\n• 量化精度:每个采样使用多少个比特来记录。量化精度分别为2-8、2-16。\n• 声音信息通道个数：指声音记录为一组波形（单声道）、两组波形（双声道）甚至多组波形（多声道）。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k28",
      "topic": "representation",
      "title": "图像数字化：采样、分色与量化",
      "answer": [
        "图像信息的编码\n（1）采样。将画面划分为 M×N个网格，每个网格称为一个取样点，用其亮度值来表示。\n(2) 分色。将彩色图像的取样点的颜色分解成 3个基色(例如 R、G、B三基色)，如果不是彩色图像(即灰度图像或黑白图像)，则每一个取样点只有一个亮度值。\n(3) 量化。对采样点的每个分量进行 A / D转换，把模拟量的亮度值使用数字量来表示 (一般是 8位至 12位的正整数 )。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch2-k29",
      "topic": "representation",
      "title": "像素、分辨率与灰度级",
      "answer": [
        "数字图像的表示\n一幅取样图像由 M(行)，N(列)个取样点组成，每个取样点是组成取样图像的基本单位，称为像素。\n黑白图像的像素只有 1个亮度值；\n彩色图像的像素由多个彩色分量组成，一般有3个分量 (R-红，G-绿，B-蓝)。\n\n矩阵的行数称为图像的垂直分辨率，列数称为图像的水平分辨率\n\n像素：图像上的采样点叫图像元素\n像素的光强值叫灰度级（我们对颜色进行了编码），像素的光强值用整数表示，它取决\n于图像函数在这一点附近区域颜色的平均效果。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k01",
      "topic": "data",
      "title": "数字化与数字化转型",
      "answer": [
        "数字化：采集获知运营数据 → 建模、优化 → 指导组织运行（从“数据到业务”）\n数字化转型：把数据要素融入业务、运营、服务模式，实现新的价值创造"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k02",
      "topic": "data",
      "title": "电力行业为什么需要数字化转型",
      "answer": [
        "电力新背景：清洁能源、电动汽车、储能不断增多 → 电力系统形态根本改变 →\n亟需建设新型电力系统，以数字技术提升“源网荷储”互动水平\n数字化是“管好业务”，转型是“重做业务”；电力行业的转型答案，就是新型电力系统。（这段比较政治，可能会考简答，要背下来）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k03",
      "topic": "data",
      "title": "大数据的定义与意义",
      "answer": [
        "大数据：指其大小超出了常规数据库工具获取、储存、管理和分析能力的数据集\n最重要的意义是预测：数据是对过去和现在的归纳总结，大数据帮助我们建立新的数据思维模型，预测未来。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k04",
      "topic": "data",
      "title": "大数据技术与三个核心环节",
      "answer": [
        "大数据技术：对大批量、多维度数据进行快速计算和实时处理的信息技术\n三个核心环节：数据采集与清洗 → 数据存储与分类 → 分布式并行处理",
        "电力条件：云计算、物联网与电力行业融合，生产、管理等数据快速增长，为大数据应用提供优渥土壤"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k05",
      "topic": "data",
      "title": "大数据的 4V 特征",
      "answer": [
        "大数据的特征：体量大、价值高、速度快、多样性"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k06",
      "topic": "data",
      "title": "大数据发展的技术支撑",
      "answer": [
        "大数据的技术支撑：存储成本的下降、运算速度越来越快、机器拥有理解数据的能力"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k07",
      "topic": "data",
      "title": "大数据的来源与类型",
      "answer": [
        "大数据的来源：企业、人、机器，都是数据生产者。互联网、气象政务、制造业——行行都在积累数据。20% 结构化、80% 非结构化——非结构化才是大头。系统日志、爬网页、埋 SDK、找机构。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k08",
      "topic": "data",
      "title": "大数据的通用应用场景",
      "answer": [
        "大数据应用场景：金融、零售、医疗、教育、农业、环境、智慧城市。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k09",
      "topic": "data",
      "title": "大数据架构与处理流程",
      "answer": [
        "大数据的架构：生产 → 存储 → 分析 → 应用\n大数据的处理环节：采集 → 存储 → 处理 → 应用"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k10",
      "topic": "data",
      "title": "Hadoop、HDFS 与 MapReduce",
      "answer": [
        "Hadoop生态：分布式系统基础架构——数据存储和加工都是分布式的，由多台机器共同完成，并行处理，更安全、规模更大。\n两大核心：HDFS 管存储——海量数据存在分布式文件里，每次分析都从文\n件取数；MapReduce 管计算。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k11",
      "topic": "data",
      "title": "数据采集的常见方法",
      "answer": [
        "采集：数据抓取、数据导入、物联网传感设备自动信息采集"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k12",
      "topic": "data",
      "title": "数据清洗的内容",
      "answer": [
        "导入/预处理：清洗：格式标准化、清除异常、纠正错误、去除重复。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k13",
      "topic": "data",
      "title": "数据集成、变换与归约",
      "answer": [
        "集成：多数据源结合、统一存储，建立数据仓库。\n变换：平滑聚集、概化、规范化，转成适合挖掘的形式。\n归约：寻找有用特征、缩减规模，最大限度精简数据量。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k14",
      "topic": "data",
      "title": "统计分析与数据挖掘的区别",
      "answer": [
        "统计与分析：用分布式数据库/计算集群对海量数据做普通分析和分类汇总——常用工具：R 语言。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k15",
      "topic": "data",
      "title": "分类、聚类、关联规则和预测",
      "answer": [
        "挖掘：分类：根据数据特征构造分类模型，把未知类别的样本映射到已知类别中。\n聚类：把特征相似的数据聚集在一起——类内尽量相似，类间明显不同。\n关联规则：找出事件或数据项之间的联系规则，发现隐藏的、未知的信息。\n预测模型：用算法和技术确定未来结果，用于预测、优化、预报和模拟。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k16",
      "topic": "data",
      "title": "电力大数据的来源与三类数据",
      "answer": [
        "电力大数据：主要来源于发电、输电、变电、配电、用电和调度各环节，大致分为三类：\n一是电网运行和设备检测或监测数据；\n二是电力企业营销数据，如交易电价、售电量、用电客户等；\n三是电力企业管理数据。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k17",
      "topic": "data",
      "title": "电力大数据的特点与体系建设",
      "answer": [
        "电力大数据特点：体量大、类型多、价值密度低、处理快\n怎么建体系：定机制 → 建平台 → 搭中台"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k18",
      "topic": "data",
      "title": "发电侧的大数据应用",
      "answer": [
        "发电侧：从“事后报警”到“预知即检测”\n痛点：设备性能有差异，传统系统常在故障发生后才报警——处理不及时、维修昂贵、发电损失。\n做法一：用历史工况数据建立预警体系、实时监测，故障发生前即预警——“预知即检测、预知即维修”。\n做法二：结合竞价上网，用大数据实时计算机组“度电利润”，匹配最优工况，提高发电效率与经济收益。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k19",
      "topic": "data",
      "title": "电网侧的配网监控和调度告警",
      "answer": [
        "电网侧：配网监控与调度告警\n配网：用电采集＋在线监控，大数据实时反映运行状况，问题诊断时间极大缩短，还兼收节能之效。\n调度痛点：传统智能告警系统误差率高，故障诊断靠人工分析，费时费力。\n调度新法：大数据故障自动诊断系统——对各种因素造成的故障有效诊断，极短时间内提出解决方案。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k20",
      "topic": "data",
      "title": "检修与设备健康管理",
      "answer": [
        "检修与工程：从“被动维修”到“主动健康管理”\n检修：大数据转变被动管理模式——动态设备状态评价系统从海量历史数据中找出正常工况指标，实时评定设备健康状态。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k21",
      "topic": "data",
      "title": "运行预警中的仿真与 DCS 对比",
      "answer": [
        "预警：结合运行规程，用仿真与 DCS 系统实时对比、明确预警状态，避免人为误操作与安全事故。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k22",
      "topic": "data",
      "title": "大数据怎样支持工程建设管理",
      "answer": [
        "工程：从“被动维修”到“主动健康管理”\n检修：大数据转变被动管理模式——动态设备状态评价系统从海量历史数据中找出正常工况指标，实时评定设备健康状态。\n预警：结合运行规程，用仿真与 DCS 系统实时对比、明确预警状态，避免人为误操作与安全事故。\n工程：大数据从成本、安全、进度、质量四方面融入工程建设；数据横向纵向比较，及时纠正影响进度的问题。（这一段感觉容易出简答题）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch3-k23",
      "topic": "data",
      "title": "大数据与电力大数据的特征",
      "answer": [
        "大数据的特征：体量大、价值高、速度快、多样性",
        "电力大数据特点：体量大、类型多、价值密度低、处理快"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k01",
      "topic": "ai",
      "title": "弱人工智能、强人工智能与超人工智能",
      "answer": [
        "弱人工智能：\n限制领域人工智能或应用型人工智能——专注于且只能解决特定领域问题；目前所有 AI 算法和应用都属于弱人工智能。\n强人工智能（通用人工智能）：\n可以胜任人类所有工作的人工智能。\n超人工智能：\n比世界上最聪明、最有天赋的人类还聪明的人工智能系统。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k02",
      "topic": "ai",
      "title": "人工智能诞生的标志事件",
      "answer": [
        "1956年达特茅斯会议：AI正式诞生。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k03",
      "topic": "ai",
      "title": "人工智能研究的五项基本内容",
      "answer": [
        "人工智能研究的基本内容\n知识表示：将人类知识形式化或者模型化。方法：符号表示法、连接机制表示法。\n机器感知：使机器（计算机）具有类似于人的感知能力。以机器视觉(machine vision)与机器听觉为主。\n机器思维：对通过感知得来的外部信息及机器内部的各种工作信息进行有目的的处理。\n机器学习：研究如何使计算机具有类似于人的学习能力，使它能通过学习自动地获取知识。\n机器行为：计算机的表达能力，即“说”、“写”、“画”等能力。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k04",
      "topic": "ai",
      "title": "知识表示的定义与方法",
      "answer": [
        "知识表示：将人类知识形式化或者模型化。方法：符号表示法、连接机制表示法。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k05",
      "topic": "ai",
      "title": "机器感知的含义",
      "answer": [
        "机器感知：使机器（计算机）具有类似于人的感知能力。以机器视觉(machine vision)与机器听觉为主。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k06",
      "topic": "ai",
      "title": "机器思维的含义",
      "answer": [
        "机器思维：对通过感知得来的外部信息及机器内部的各种工作信息进行有目的的处理。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k07",
      "topic": "ai",
      "title": "机器学习在人工智能中的位置",
      "answer": [
        "机器学习：研究如何使计算机具有类似于人的学习能力，使它能通过学习自动地获取知识。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch4-k08",
      "topic": "ai",
      "title": "机器行为的含义",
      "answer": [
        "机器行为：计算机的表达能力，即“说”、“写”、“画”等能力。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k01",
      "topic": "cloud-iot",
      "title": "云计算的定义",
      "answer": [
        "云计算的定义：\n通过网格，以便利、按需付费的方式，获取共享资源池中的计算资源（网络、服务器、存储、应用、服务）。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k02",
      "topic": "cloud-iot",
      "title": "云计算的五个基本特征",
      "answer": [
        "基本特征：按需自助、广泛接入、资源池化、快速弹性、可计量"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k03",
      "topic": "cloud-iot",
      "title": "SaaS：软件即服务",
      "answer": [
        "SaaS：在线文档、钉钉、在线 CRM"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k04",
      "topic": "cloud-iot",
      "title": "PaaS：平台即服务",
      "answer": [
        "PaaS：数据库、中间件、部署工具"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k05",
      "topic": "cloud-iot",
      "title": "IaaS：基础设施即服务",
      "answer": [
        "IaaS：云主机、云硬盘、对象存储"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k06",
      "topic": "cloud-iot",
      "title": "IaaS、PaaS、SaaS 的区分方法",
      "answer": [
        "SaaS：在线文档、钉钉、在线 CRM\nPaaS：数据库、中间件、部署工具\nIaaS：云主机、云硬盘、对象存储"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k07",
      "topic": "cloud-iot",
      "title": "云计算的简化体系结构",
      "answer": [
        "云的体系结构：物理层 → 资源池 → 服务层 → 用户"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k08",
      "topic": "cloud-iot",
      "title": "虚拟化的含义",
      "answer": [
        "虚拟化：一台物理机，切成很多台“逻辑机”"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k09",
      "topic": "cloud-iot",
      "title": "资源池、调度与容错",
      "answer": [
        "资源池：CPU、内存、存储、网络切成可分配单位。\n调度：把任务放到“最合适”的机器上。\n容错：多副本、故障迁移、自动重启。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k10",
      "topic": "cloud-iot",
      "title": "并行计算、分布式计算和网格计算",
      "answer": [
        "并行计算：多个处理器同时执行同一任务。\n分布式计算：很多台机器，像一台一样工作。\n网格计算：跨机构、跨地域，共享异构资源。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k11",
      "topic": "cloud-iot",
      "title": "几种计算思想的联系",
      "answer": [
        "并行 → 分布式 → 网格 → 云"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k12",
      "topic": "cloud-iot",
      "title": "绿色数据中心与 PUE",
      "answer": [
        "绿色数据中心：PUE（ 总能耗 / IT 能耗）、自然冷却、东数西算"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k14",
      "topic": "cloud-iot",
      "title": "物联网三层架构",
      "answer": [
        "中国物联网产业：应用层（中间件、平台、云 + AI）、网络层（NB-IoT、5G、LoRa）、感知层（传感器、RFID、二维码、GPS、MEMS）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k15",
      "topic": "cloud-iot",
      "title": "感知层关键技术",
      "answer": [
        "感知层（传感器、RFID、二维码、GPS、MEMS）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k16",
      "topic": "cloud-iot",
      "title": "网络层关键技术",
      "answer": [
        "网络层（NB-IoT、5G、LoRa）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k17",
      "topic": "cloud-iot",
      "title": "应用层关键技术",
      "answer": [
        "应用层（中间件、平台、云 + AI）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k18",
      "topic": "cloud-iot",
      "title": "物联网的十大应用领域",
      "answer": [
        "交通：ETC、车路协同",
        "环保：水质、空气监测",
        "公共安全：消防、监控",
        "家居：照明、安防",
        "工业：设备联网",
        "医疗：可穿戴、监护",
        "农业：大棚、溯源",
        "电力：监测、采集",
        "金融：支付、监管",
        "物流：仓储、冷链"
      ],
      "origin": "slides",
      "sourceNote": "原课件 PDF 第14页右上。"
    },
    {
      "id": "ch5-k19",
      "topic": "cloud-iot",
      "title": "智慧城市、ETC 与车路协同",
      "answer": [
        "智慧城市：更透彻的感知、更全面的互联、更深入的智能。",
        "ETC：OBU 车载单元 ＋ RSU 路侧单元；不停车、自动扣费。",
        "V2X：车—车、车—路、车—云。",
        "单车智能有盲区：遮挡、恶劣天气、突然窜出的行人。",
        "路侧感知 ＋ 低时延通信，把“看不见”变成“看得见”。"
      ],
      "origin": "slides",
      "sourceNote": "原课件 PDF 第14—15页。"
    },
    {
      "id": "ch5-k20",
      "topic": "cloud-iot",
      "title": "智能物流",
      "answer": [
        "产品追溯：医药、食品、烟草。",
        "仓储：分拣、AGV、路径优化。",
        "冷链：温度全程记录。"
      ],
      "origin": "slides",
      "sourceNote": "原课件 PDF 第15页右上。"
    },
    {
      "id": "ch5-k21",
      "topic": "cloud-iot",
      "title": "智能家居、工业与农业物联网",
      "answer": [
        "照明、空调、安防、门锁互联。",
        "语音助手 ＋ 手机远程控制。",
        "摄像头、门锁联网：安全与隐私是必答题。",
        "工业互联网：设备联网、状态监测；预测性维护；柔性生产、能耗优化。",
        "农业物联网：大棚温湿度、土壤墒情；自动灌溉、精准施肥；农产品溯源。"
      ],
      "origin": "slides",
      "sourceNote": "原课件 PDF 第15页下方。"
    },
    {
      "id": "ch5-k22",
      "topic": "cloud-iot",
      "title": "电力物联网的三个典型场景",
      "answer": [
        "输电线路：温度 / 覆冰 / 舞动；视频 / 无人机巡检；故障定位。减少跳闸、缩短抢修。",
        "变电站：局放 / 油温 / 振动；SF6 监测；状态评估。定期检修 → 状态检修。",
        "用电侧：智能电表 / 负荷；费控 / 线损；分布式光伏。需求响应、节能降耗。"
      ],
      "origin": "slides",
      "sourceNote": "原课件 PDF 第16页右上。"
    },
    {
      "id": "ch5-k23",
      "topic": "cloud-iot",
      "title": "边缘计算",
      "answer": [
        "端：传感器 / 设备；边：网关 / 边缘服务器；云：数据中心 / AI。",
        "时延：保护、控制要毫秒级响应。",
        "带宽：视频、波形数据太大。",
        "可靠性：断网时边缘仍能决策。",
        "隐私：敏感数据就地处理。",
        "云端做全局，边缘做实时——云边协同。"
      ],
      "origin": "slides",
      "sourceNote": "原课件 PDF 第16页左下。"
    },
    {
      "id": "ch5-k24",
      "topic": "cloud-iot",
      "title": "云与物联网的闭环",
      "answer": [
        "③ 闭环：物端产数据 → 云端算价值 → 反馈现场。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch5-k25",
      "topic": "cloud-iot",
      "title": "组合拳：云大物移智链",
      "answer": [
        "④ 组合拳：“云大物移智链”。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k01",
      "topic": "ml",
      "title": "机器学习的定义与基本过程",
      "answer": [
        "机器学习：利用经验改善系统自身的性能。是指机器通过统计学算法，对大量历史数据进行学习，进而利用生成的经验模型指导业务。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k02",
      "topic": "ml",
      "title": "监督学习的含义",
      "answer": [
        "监督学习：从给定的训练数据集中学习一个函数，当新的数据到来时，可以根据这个函数预测结果。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k03",
      "topic": "ml",
      "title": "无监督学习的含义",
      "answer": [
        "无监督学习：数据不被特别标识，学习模型是为了推断出数据的一些内在结构。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k04",
      "topic": "ml",
      "title": "半监督学习的含义",
      "answer": [
        "半监督学习：少量的标注样本和大量未标注样本。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k05",
      "topic": "ml",
      "title": "强化学习的含义",
      "answer": [
        "强化学习：通过观察来学习动作的完成。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k06",
      "topic": "ml",
      "title": "思考题：监督、无监督、强化学习的电力场景",
      "answer": [
        "监督：用带真实负荷标签的历史样本预测明日负荷；或用已标注故障类别的设备数据诊断故障。",
        "无监督：没有预设客户类别，按用电曲线相似性聚类。",
        "强化：在仿真环境中学习储能充放电策略，根据成本、约束等设计奖励。"
      ],
      "origin": "supplement"
    },
    {
      "id": "ch7-k07",
      "topic": "ml",
      "title": "线性回归与逻辑回归",
      "answer": [
        "回归算法：线性回归（处理数值问题）和逻辑回归（分类算法）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k08",
      "topic": "ml",
      "title": "神经网络的基本思想",
      "answer": [
        "神经网络：模拟大脑"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k09",
      "topic": "ml",
      "title": "聚类算法的任务",
      "answer": [
        "聚类算法：计算种群中的距离，根据距离的远近将数据划分为多个族群"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k10",
      "topic": "ml",
      "title": "降维的含义",
      "answer": [
        "降维算法：（无监督学习，将数据从高位降低到低维，维度表示数据特征量的大小。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k11",
      "topic": "ml",
      "title": "推荐算法的任务",
      "answer": [
        "推荐算法（购物平台常见）"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k12",
      "topic": "ml",
      "title": "NFL：没有免费的午餐",
      "answer": [
        "NFL定理：一个算法 若在某些问题上比另一个算法 好，必存在\n另一些问题， 比 好。"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k13",
      "topic": "ml",
      "title": "机器学习的完整操作流程",
      "answer": [
        "机器学习的基本过程：计算机从给定的数据中学习规律，即从观测数据中寻找规律、建立模型，并利用学习到的规律对未知或无法观测的数据进行预测。\n操作流程：数据采集、数据清洗、特征工程、模型选择、训练、部署/监控"
      ],
      "origin": "outline"
    },
    {
      "id": "ch7-k16",
      "topic": "ml",
      "title": "思考题：为什么训练重算力，推理重时延与成本？",
      "answer": [
        "训练反复处理大量数据、更新参数，单次训练可能需要较大的累计计算量。",
        "推理面向实际请求，用户关注响应时间，服务方关注吞吐、单次成本和持续运行费用。",
        "推理也需要算力；当请求很多时，总推理成本可能很高。"
      ],
      "origin": "supplement"
    },
    {
      "id": "ch7-k19",
      "topic": "ml",
      "title": "思考题：过拟合、负荷预测例子与避免方法",
      "answer": [
        "例子：模型把某个夏季或少数节假日的特殊曲线记得很好，但遇到新日期、新天气时误差明显增大。",
        "按时间划分训练、验证、测试集，避免把未来信息泄漏到训练过程。",
        "使用有代表性的数据，合理简化模型、正则化、早停，并通过验证集选择设置。"
      ],
      "origin": "supplement"
    },
    {
      "id": "ch7-k20",
      "topic": "ml",
      "title": "机器学习的边界与原课件位置",
      "answer": [
        "边界：数据质量、过拟合、可解释性、算力与隐私。"
      ],
      "origin": "outline",
      "diagram": "ml-boundary",
      "sourceNote": "原课件 PDF 第14页右上“本讲小结”第④条。"
    },
    {
      "id": "ch7-k21",
      "topic": "ml",
      "title": "思考题：大模型能替代所有机器学习吗？",
      "answer": [
        "机器学习范围更广，包括回归、决策树、支持向量机、神经网络等方法。",
        "深度学习是机器学习的重要分支，大模型通常采用深度学习并进行大规模预训练。",
        "大模型不能替代所有机器学习：小样本表格数据、低时延或低成本设备、可解释性要求等场景，较简单模型可能更合适。"
      ],
      "origin": "supplement"
    },
    {
      "id": "ch7-k23",
      "topic": "ml",
      "title": "思考题：身边应用的数据、特征、标签与输出",
      "answer": [
        "数据：历史邮件样本。",
        "特征：正文、标题、发件人相关特征或文本向量。",
        "标签：已标注的“垃圾邮件 / 正常邮件”。",
        "输出：新邮件属于垃圾邮件的概率或分类结果。"
      ],
      "origin": "supplement"
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
    },
    {
      "id": "ch2-choice-01",
      "topic": "representation",
      "type": "choice",
      "title": "下列哪一项在不同计算机架构中固定不变？",
      "answer": [
        "A · 1 Byte = 8 bit。"
      ],
      "explanation": "",
      "options": [
        "1 Byte = 8 bit",
        "字长必为 64 bit",
        "字越长所有程序越快",
        "1 word 必为 16 bit"
      ],
      "correct": 0
    },
    {
      "id": "ch2-choice-02",
      "topic": "representation",
      "type": "choice",
      "title": "(101.1)₂ 等于哪个十进制数？",
      "answer": [
        "B · 5.5。"
      ],
      "explanation": "4 + 1 + 0.5 = 5.5。",
      "options": [
        "4.5",
        "5.5",
        "6",
        "11.1"
      ],
      "correct": 1
    },
    {
      "id": "ch2-choice-03",
      "topic": "representation",
      "type": "choice",
      "title": "(11010110)₂ 的十六进制表示是？",
      "answer": [
        "C · D6。"
      ],
      "explanation": "1101 对应 D，0110 对应 6。",
      "options": [
        "326",
        "D3",
        "D6",
        "6D"
      ],
      "correct": 2
    },
    {
      "id": "ch2-choice-04",
      "topic": "representation",
      "type": "choice",
      "title": "下列十进制小数中，哪一个不能精确写成有限二进制小数？",
      "answer": [
        "D · 0.1。"
      ],
      "explanation": "",
      "options": [
        "0.5",
        "0.25",
        "0.625",
        "0.1"
      ],
      "correct": 3
    },
    {
      "id": "ch2-choice-05",
      "topic": "representation",
      "type": "choice",
      "title": "8 位补码 11111011 表示哪个整数？",
      "answer": [
        "A · −5。"
      ],
      "explanation": "对其取反加 1 得 00000101，所以真值为 −5。",
      "options": [
        "−5",
        "−4",
        "5",
        "251"
      ],
      "correct": 0
    },
    {
      "id": "ch2-choice-06",
      "topic": "representation",
      "type": "choice",
      "title": "字符“0”的十进制 ASCII 编码是？",
      "answer": [
        "B · 48。"
      ],
      "explanation": "",
      "options": [
        "30",
        "48",
        "65",
        "0"
      ],
      "correct": 1
    },
    {
      "id": "ch2-choice-07",
      "topic": "representation",
      "type": "choice",
      "title": "16 位量化最多可区分多少个等级？",
      "answer": [
        "C · 65536。"
      ],
      "explanation": "",
      "options": [
        "256",
        "32768",
        "65536",
        "16"
      ],
      "correct": 2
    },
    {
      "id": "ch2-choice-08",
      "topic": "representation",
      "type": "choice",
      "title": "8 kHz、16 bit、单声道未压缩 PCM 的数据率为？",
      "answer": [
        "D · 16000 B/s。"
      ],
      "explanation": "8000×16×1÷8=16000 B/s。",
      "options": [
        "128000 B/s",
        "256000 B/s",
        "8000 B/s",
        "16000 B/s"
      ],
      "correct": 3
    },
    {
      "id": "ch2-choice-09",
      "topic": "representation",
      "type": "choice",
      "title": "采样这一步主要使信号的哪个维度离散？",
      "answer": [
        "A · 时间。"
      ],
      "explanation": "",
      "options": [
        "时间",
        "颜色",
        "文件大小",
        "声道数"
      ],
      "correct": 0
    },
    {
      "id": "ch2-choice-10",
      "topic": "representation",
      "type": "choice",
      "title": "一幅图像有 600 行、800 列，其水平与垂直分辨率依次是？",
      "answer": [
        "B · 800、600。"
      ],
      "explanation": "",
      "options": [
        "600、800",
        "800、600",
        "1400、600",
        "480000、800"
      ],
      "correct": 1
    },
    {
      "id": "ch2-choice-11",
      "topic": "representation",
      "type": "choice",
      "title": "关于定点和浮点，正确的是？",
      "answer": [
        "C · 浮点通常能覆盖更宽数值范围。"
      ],
      "explanation": "",
      "options": [
        "浮点精度永远更高",
        "浮点总比定点运算慢",
        "浮点通常能覆盖更宽数值范围",
        "定点不可能溢出"
      ],
      "correct": 2
    },
    {
      "id": "ch2-choice-12",
      "topic": "representation",
      "type": "choice",
      "title": "数字音频恢复相关说法中，正确的是？",
      "answer": [
        "D · 理想恢复需要带限、足够采样率等条件。"
      ],
      "explanation": "",
      "options": [
        "采样之后不再需要量化",
        "任意采样都能无损恢复任意信号",
        "插值能保证找回全部丢失信息",
        "理想恢复需要带限、足够采样率等条件"
      ],
      "correct": 3
    },
    {
      "id": "ch2-fill-01",
      "topic": "representation",
      "type": "fill",
      "title": "1 Byte = ______ bit；字长表示一个字包含的 ______。",
      "answer": [
        "8；二进制位数。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-02",
      "topic": "representation",
      "type": "fill",
      "title": "按本课二进制容量约定，1 MB = ______ KB，1 KB = ______ B。",
      "answer": [
        "1024；1024。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-03",
      "topic": "representation",
      "type": "fill",
      "title": "r 进制共有 ______ 个数码，最大的数码为 ______。",
      "answer": [
        "r；r−1。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-04",
      "topic": "representation",
      "type": "fill",
      "title": "二进制转八进制每 ______ 位分组，转十六进制每 ______ 位分组。",
      "answer": [
        "3；4。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-05",
      "topic": "representation",
      "type": "fill",
      "title": "(13)₁₀ = (______)₂；(0.625)₁₀ = (______)₂。",
      "answer": [
        "1101；0.101。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-06",
      "topic": "representation",
      "type": "fill",
      "title": "8 位原码表示 −5 为 ______，其补码为 ______。",
      "answer": [
        "10000101；11111011。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-07",
      "topic": "representation",
      "type": "fill",
      "title": "ASCII 中 A、a 的十进制编码分别为 ______、______。",
      "answer": [
        "65；97。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-08",
      "topic": "representation",
      "type": "fill",
      "title": "空格、LF、CR 的十进制 ASCII 编码分别为 ______、______、______。",
      "answer": [
        "32；10；13。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-09",
      "topic": "representation",
      "type": "fill",
      "title": "声音数字化通常包括 ______、______、______ 三步。",
      "answer": [
        "采样；量化；编码。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-10",
      "topic": "representation",
      "type": "fill",
      "title": "n 位量化可表示至多 ______ 个等级。",
      "answer": [
        "2ⁿ。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-11",
      "topic": "representation",
      "type": "fill",
      "title": "PCM 数据率（B/s）= 采样频率 × 量化位数 × 声道数 ÷ ______。",
      "answer": [
        "8。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-fill-12",
      "topic": "representation",
      "type": "fill",
      "title": "RGB 图像的三个常见分量是 ______、______、______。",
      "answer": [
        "红；绿；蓝。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-judge-01",
      "topic": "representation",
      "type": "judge",
      "title": "任何计算机中都有 1 word = 2 Byte。",
      "answer": [
        "错误。"
      ],
      "explanation": "字的长度依具体架构或约定而定，16 位字才是两个字节。",
      "correct": false
    },
    {
      "id": "ch2-judge-02",
      "topic": "representation",
      "type": "judge",
      "title": "所有有限十进制小数都能写成有限二进制小数。",
      "answer": [
        "错误。"
      ],
      "explanation": "例如 0.1 的二进制表示无限循环。",
      "correct": false
    },
    {
      "id": "ch2-judge-03",
      "topic": "representation",
      "type": "judge",
      "title": "同一数码在不同位置可以有不同的位权。",
      "answer": [
        "正确。"
      ],
      "explanation": "r 进制中的位权为相应的 r 的幂。",
      "correct": true
    },
    {
      "id": "ch2-judge-04",
      "topic": "representation",
      "type": "judge",
      "title": "固定字长下，正数的原码、反码和补码相同。",
      "answer": [
        "正确。"
      ],
      "explanation": "最高符号位均为 0。",
      "correct": true
    },
    {
      "id": "ch2-judge-05",
      "topic": "representation",
      "type": "judge",
      "title": "计算机中的字符、浮点数和所有其他数据都使用补码。",
      "answer": [
        "错误。"
      ],
      "explanation": "补码主要用于有符号整数，其他数据有相应编码。",
      "correct": false
    },
    {
      "id": "ch2-judge-06",
      "topic": "representation",
      "type": "judge",
      "title": "ASCII 字符“0”的编码就是数值 0。",
      "answer": [
        "错误。"
      ],
      "explanation": "字符“0”的 ASCII 编码为十进制 48。",
      "correct": false
    },
    {
      "id": "ch2-judge-07",
      "topic": "representation",
      "type": "judge",
      "title": "每个样本的量化位数应使用 bit/s 作为单位。",
      "answer": [
        "错误。"
      ],
      "explanation": "量化位数用 bit/样本；bit/s 是数据率单位。",
      "correct": false
    },
    {
      "id": "ch2-judge-08",
      "topic": "representation",
      "type": "judge",
      "title": "采样仅使时间离散，量化进一步使幅度离散。",
      "answer": [
        "正确。"
      ],
      "explanation": "二者作用的维度不同。",
      "correct": true
    },
    {
      "id": "ch2-judge-09",
      "topic": "representation",
      "type": "judge",
      "title": "只要做了插值，任意低采样率信号都能完全恢复。",
      "answer": [
        "错误。"
      ],
      "explanation": "不满足采样定理时可能混叠，插值不能保证恢复。",
      "correct": false
    },
    {
      "id": "ch2-judge-10",
      "topic": "representation",
      "type": "judge",
      "title": "未压缩 PCM 在其他参数不变时，声道数加倍，原始数据量也加倍。",
      "answer": [
        "正确。"
      ],
      "explanation": "数据量与声道数成正比。",
      "correct": true
    },
    {
      "id": "ch2-judge-11",
      "topic": "representation",
      "type": "judge",
      "title": "灰度图像的像素只能是纯黑或纯白。",
      "answer": [
        "错误。"
      ],
      "explanation": "灰度图可有多个亮度等级，二值图才只有两种取值。",
      "correct": false
    },
    {
      "id": "ch2-judge-12",
      "topic": "representation",
      "type": "judge",
      "title": "浮点数在所有情况下的精度都高于同位数定点数。",
      "answer": [
        "错误。"
      ],
      "explanation": "精度需结合具体格式、缩放和数值大小判断。",
      "correct": false
    },
    {
      "id": "ch2-short-01",
      "topic": "representation",
      "type": "short",
      "title": "区分 bit、Byte、word 与字长，并解释“1 word = 2 Byte”是否恒成立。",
      "answer": [
        "bit（位）：表示一个二进制数码 0 或 1，是信息的基本计量单位。",
        "Byte（字节）：固定为 8 bit，常用大写 B 表示。",
        "word（字）：计算机处理信息的一个单位，长度取决于体系结构或具体约定。",
        "字长：一个机器字包含的二进制位数。"
      ],
      "explanation": "不能普遍认定 1 word = 2 Byte；该等式只适用于约定为 16 位字的情形。材料中的16位字、32位双字、64位两个双字，是特定命名约定。"
    },
    {
      "id": "ch2-short-02",
      "topic": "representation",
      "type": "short",
      "title": "解释位权，并把 (101.1)₂ 按权展开为十进制。",
      "answer": [
        "位权是某一位置代表的基数幂。r 进制中，整数个位的权为 r⁰，向左依次为 r¹、r²……；小数点右侧依次为 r⁻¹、r⁻²……。",
        "数值 = 各位“数码 × 位权”之和。",
        "例如 (101.1)₂ = 1×2² + 0×2¹ + 1×2⁰ + 1×2⁻¹ = 5.5。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-03",
      "topic": "representation",
      "type": "short",
      "title": "把 (214)₁₀ 转成二进制、八进制和十六进制，写出核对过程。",
      "answer": [
        "214₁₀ = 11010110₂。",
        "按 3 位分组：011 010 110 → 326₈。",
        "按 4 位分组：1101 0110 → D6₁₆。",
        "核对：3×64+2×8+6=214；13×16+6=214。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-04",
      "topic": "representation",
      "type": "short",
      "title": "以 8 位表示 −5，写出原码、反码、补码，并说明补码为什么有用。",
      "answer": [
        "+5：原码、反码、补码均为 00000101。",
        "−5：原码 10000101；反码 11111010；补码 11111011。",
        "补码可将减法转换为加法，有利于统一整数加减运算电路。",
        "固定字长补码运算按相应的模运算处理；结果是否溢出要另行判断。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-05",
      "topic": "representation",
      "type": "short",
      "title": "定点和浮点分别怎样表示小数？如何比较其范围和精度？",
      "answer": [
        "定点表示：小数点位置事先约定，不在编码中单独存储。",
        "定点整数的小数点通常约定在最低位之后。",
        "有符号定点纯小数的小数点通常约定在符号位之后、最高数值位之前。",
        "可用符号、尾数、基数、指数表示数值，形式类似科学计数法。",
        "例如 123.45 = (−1)⁰ × 1.2345 × 10²，符号为正、尾数为 1.2345、基数为 10、指数为 2。",
        "计算机常用二进制浮点表示，具体字段由格式约定。",
        "相同总位数下，浮点数通常能覆盖更广的数值范围。",
        "精度取决于具体格式、数值大小和缩放方式，不能笼统说浮点数的精度总比定点数高。",
        "浮点运算常涉及指数对齐、尾数运算和规格化；实际速度还取决于硬件，不能一概断言浮点总更慢。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-06",
      "topic": "representation",
      "type": "short",
      "title": "采样得到的 X(nT) 能唯一确定原来的 X(t) 吗？需要什么条件？",
      "answer": [
        "一般不能：任意连续信号可能在采样点相同、在采样点之间不同。",
        "若信号带限、采样率满足采样定理，并具备理想采样与重建等条件，则理想样本可唯一确定并恢复原带限信号。",
        "实际有限位数量化会引入误差，插值不能自动找回已经丢失的全部信息。"
      ],
      "explanation": "采样理论的理想无失真恢复，不等于实际有限位数数字化完全无损。"
    },
    {
      "id": "ch2-short-07",
      "topic": "representation",
      "type": "short",
      "title": "解释声音数字化中的采样、量化和编码，并说明量化位数的单位。",
      "answer": [
        "采样：每隔一定时间测量一次信号幅度，使时间离散。",
        "量化：把采样幅度映射到有限的离散等级，使幅度离散。",
        "编码：按约定格式把量化结果记录为数字代码。",
        "样本位数表示每个样本使用多少 bit，单位是 bit/样本，而不是 bit/s。",
        "n 位量化最多可表示 2ⁿ 个等级：8 位为 256 级，16 位为 65536 级。",
        "幅度范围固定时，均匀量化步长约为范围 ÷ 2ⁿ；归一化范围为 1 时，可用 2⁻ⁿ 理解量化精细程度。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-08",
      "topic": "representation",
      "type": "short",
      "title": "44.1 kHz、16 bit、双声道未压缩 PCM，记录 60 秒需要多少字节？",
      "answer": [
        "数据率 = 44100×16×2÷8 = 176400 B/s。",
        "60 秒数据量 = 176400×60 = 10584000 B。",
        "约 10.58 MB（十进制）或 10.09 MiB（二进制），忽略文件头。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-09",
      "topic": "representation",
      "type": "short",
      "title": "8 kHz、8 bit、单声道 PCM 记录 10 秒，原始数据量是多少？",
      "answer": [
        "8000×8×1÷8×10 = 80000 B。",
        "约 80 kB（十进制）或 78.125 KiB（二进制），忽略文件头。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-10",
      "topic": "representation",
      "type": "short",
      "title": "列出影响数字声音质量的三个主要采样参数。",
      "answer": [
        "采样频率：时间上采样的密集程度。",
        "量化位数：幅度量化的精细程度。",
        "声道数：记录单声道、双声道或更多通道。"
      ],
      "explanation": "声音质量也受原始信号、噪声、编码和播放设备等影响，不能只用其中一个参数判断。"
    },
    {
      "id": "ch2-short-11",
      "topic": "representation",
      "type": "short",
      "title": "简述图像数字化的采样、分色、量化，以及像素和分辨率的含义。",
      "answer": [
        "采样：把图像划分为 M×N 个取样点。",
        "分色：彩色图像通常把颜色分解为 R、G、B 等分量；灰度图像通常每像素只有一个亮度分量。",
        "量化：把各分量的连续数值转换为有限的数字等级。",
        "像素是数字图像的基本取样单位。",
        "若矩阵有 M 行、N 列，垂直分辨率为 M，水平分辨率为 N，共 M×N 个像素。",
        "灰度级描述离散亮度等级；RGB 图像通常用红、绿、蓝三个分量描述颜色。"
      ],
      "explanation": ""
    },
    {
      "id": "ch2-short-12",
      "topic": "representation",
      "type": "short",
      "title": "100×100 像素的 RGB 图像，每个分量 8 位，未压缩原始数据量为多少？",
      "answer": [
        "每像素为 3×8 = 24 bit。",
        "原始数据量 = 100×100×24÷8 = 30000 B。"
      ],
      "explanation": "不计文件头、压缩和行对齐开销。"
    },
    {
      "id": "ch3-choice-01",
      "topic": "data",
      "type": "choice",
      "title": "“把数据融入业务与服务模式，创造新价值”更贴近？",
      "answer": [
        "A · 数字化转型。"
      ],
      "explanation": "",
      "options": [
        "数字化转型",
        "字符编码",
        "数据压缩",
        "只购买硬盘"
      ],
      "correct": 0
    },
    {
      "id": "ch3-choice-02",
      "topic": "data",
      "type": "choice",
      "title": "Hadoop 中主要负责分布式文件存储的是？",
      "answer": [
        "B · HDFS。"
      ],
      "explanation": "",
      "options": [
        "ALU",
        "HDFS",
        "MapReduce",
        "ASCII"
      ],
      "correct": 1
    },
    {
      "id": "ch3-choice-03",
      "topic": "data",
      "type": "choice",
      "title": "Hadoop 中用于分解、并行处理并汇总计算任务的是？",
      "answer": [
        "C · MapReduce。"
      ],
      "explanation": "",
      "options": [
        "IR",
        "PUE",
        "MapReduce",
        "RFID"
      ],
      "correct": 2
    },
    {
      "id": "ch3-choice-04",
      "topic": "data",
      "type": "choice",
      "title": "去重、纠正错误、统一日期格式主要属于？",
      "answer": [
        "D · 数据清洗。"
      ],
      "explanation": "",
      "options": [
        "结果部署",
        "总线仲裁",
        "模型推理",
        "数据清洗"
      ],
      "correct": 3
    },
    {
      "id": "ch3-choice-05",
      "topic": "data",
      "type": "choice",
      "title": "根据相似性分组，但没有预设类别标签，属于？",
      "answer": [
        "A · 聚类。"
      ],
      "explanation": "",
      "options": [
        "聚类",
        "采样",
        "分色",
        "分类"
      ],
      "correct": 0
    },
    {
      "id": "ch3-choice-06",
      "topic": "data",
      "type": "choice",
      "title": "交易电价、售电量和用电客户信息，属于哪类电力大数据？",
      "answer": [
        "B · 营销数据。"
      ],
      "explanation": "",
      "options": [
        "总线地址",
        "营销数据",
        "CPU 控制信号",
        "图像分辨率"
      ],
      "correct": 1
    },
    {
      "id": "ch3-choice-07",
      "topic": "data",
      "type": "choice",
      "title": "“提前发现故障征兆，安排维护”体现的转变是？",
      "answer": [
        "C · 故障后处置转向预测性维护。"
      ],
      "explanation": "",
      "options": [
        "用分类替代所有运维",
        "主动健康管理转为被动维修",
        "故障后处置转向预测性维护",
        "停止采集数据"
      ],
      "correct": 2
    },
    {
      "id": "ch3-choice-08",
      "topic": "data",
      "type": "choice",
      "title": "工程建设中，本章强调的大数据管理四个维度是？",
      "answer": [
        "D · 成本、安全、进度、质量。"
      ],
      "explanation": "",
      "options": [
        "取指、译码、执行、关机",
        "感知、网络、应用、打印",
        "符号、尾数、基数、指数",
        "成本、安全、进度、质量"
      ],
      "correct": 3
    },
    {
      "id": "ch3-fill-01",
      "topic": "data",
      "type": "fill",
      "title": "大数据 4V 中，Volume、Velocity、Variety、Value 分别对应 ______、______、______、______。",
      "answer": [
        "体量；速度；多样性；价值。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-02",
      "topic": "data",
      "type": "fill",
      "title": "大数据的三个核心环节：采集与清洗 → ______ → 分布式并行处理。",
      "answer": [
        "数据存储与分类。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-03",
      "topic": "data",
      "type": "fill",
      "title": "HDFS 管 ______，MapReduce 管 ______。",
      "answer": [
        "存储；计算。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-04",
      "topic": "data",
      "type": "fill",
      "title": "大数据处理的一般流程：______ → 存储 → 处理 → 应用。",
      "answer": [
        "采集。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-05",
      "topic": "data",
      "type": "fill",
      "title": "预处理中，结合多个来源称为 ______，转换为适合分析的形式称为 ______，缩减规模称为 ______。",
      "answer": [
        "集成；变换；归约。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-06",
      "topic": "data",
      "type": "fill",
      "title": "电力大数据三类：运行及设备监测数据、______ 数据、______ 数据。",
      "answer": [
        "营销；企业管理。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-07",
      "topic": "data",
      "type": "fill",
      "title": "电力大数据体系建设思路：定机制 → ______ → ______。",
      "answer": [
        "建平台；搭中台。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-fill-08",
      "topic": "data",
      "type": "fill",
      "title": "工程建设的数据管理要覆盖成本、______、______、质量。",
      "answer": [
        "安全；进度。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-judge-01",
      "topic": "data",
      "type": "judge",
      "title": "“潜在总体价值高”和“价值密度低”可以同时成立。",
      "answer": [
        "正确。"
      ],
      "explanation": "少量关键线索可能隐藏在海量普通记录中。",
      "correct": true
    },
    {
      "id": "ch3-judge-02",
      "topic": "data",
      "type": "judge",
      "title": "非结构化数据只来自互联网，不会来自电力设备。",
      "answer": [
        "错误。"
      ],
      "explanation": "文本日志、图像、巡检视频等也可来自电力设备和业务。",
      "correct": false
    },
    {
      "id": "ch3-judge-03",
      "topic": "data",
      "type": "judge",
      "title": "结构化与非结构化数据在所有行业都必须严格按 20% 和 80% 分配。",
      "answer": [
        "错误。"
      ],
      "explanation": "这是材料中的概括比例，不是普遍固定常数。",
      "correct": false
    },
    {
      "id": "ch3-judge-04",
      "topic": "data",
      "type": "judge",
      "title": "HDFS 和 MapReduce 的主要职责分别是计算和存储。",
      "answer": [
        "错误。"
      ],
      "explanation": "两者颠倒：HDFS 存储，MapReduce 计算。",
      "correct": false
    },
    {
      "id": "ch3-judge-05",
      "topic": "data",
      "type": "judge",
      "title": "只要采用分布式架构，数据就天然没有安全风险。",
      "answer": [
        "错误。"
      ],
      "explanation": "容错、可扩展和信息安全不是同一个概念。",
      "correct": false
    },
    {
      "id": "ch3-judge-06",
      "topic": "data",
      "type": "judge",
      "title": "分类通常利用已知类别，聚类通常依据相似性寻找分组。",
      "answer": [
        "正确。"
      ],
      "explanation": "两者的标签条件和任务目标不同。",
      "correct": true
    },
    {
      "id": "ch3-judge-07",
      "topic": "data",
      "type": "judge",
      "title": "发现两个事件经常同时出现，就能证明一个导致另一个。",
      "answer": [
        "错误。"
      ],
      "explanation": "关联关系不能直接证明因果。",
      "correct": false
    },
    {
      "id": "ch3-judge-08",
      "topic": "data",
      "type": "judge",
      "title": "检修大数据可以支持从被动维修转向设备健康状态管理。",
      "answer": [
        "正确。"
      ],
      "explanation": "历史与实时数据共同支持状态评价、预警和检修决策。",
      "correct": true
    },
    {
      "id": "ch3-short-01",
      "topic": "data",
      "type": "short",
      "title": "区分数字化与数字化转型，并结合电力行业说明为什么要转型。",
      "answer": [
        "数字化：采集运营数据，建立模型、分析和优化，用数据指导组织运行。",
        "数字化转型：把数据要素融入业务、运营与服务模式，形成新的价值创造方式。",
        "本章可用“数字化管好业务，转型重做业务”帮助记忆。",
        "清洁能源、电动汽车、储能等不断发展，使电力系统形态和运行需求发生变化。",
        "新型电力系统需要提高源、网、荷、储的互动与协同水平。",
        "利用数字技术连接感知、分析、预测、调度和服务，推动业务与运行方式转变。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-short-02",
      "topic": "data",
      "type": "short",
      "title": "解释大数据 4V，并说明价值高与价值密度低为何不矛盾。",
      "answer": [
        "Volume：体量大。",
        "Velocity：产生与处理速度快。",
        "Variety：类型多样。",
        "Value：潜在价值高。",
        "不矛盾。海量数据的总体潜在价值可能很高，但其中直接有用的信息只占较小比例。",
        "例如大量设备监测记录中，少量异常征兆可能对避免重大故障有很高价值。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-short-03",
      "topic": "data",
      "type": "short",
      "title": "描述大数据从采集到应用的流程，以及清洗、集成、变换、归约分别做什么。",
      "answer": [
        "架构视角：数据生产 → 存储 → 分析 → 应用。",
        "处理流程：采集 → 存储 → 处理 → 应用。",
        "格式标准化。",
        "识别和处理异常、缺失或错误数据。",
        "纠正可确认的错误，识别并处理重复记录。",
        "集成：结合多数据源、统一模式与存储，可建立数据仓库。",
        "变换：通过平滑、聚集、概化、规范化等方式，把数据转换为适合分析和挖掘的形式。",
        "归约：保留有用信息或特征，缩减数据规模和处理成本。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-short-04",
      "topic": "data",
      "type": "short",
      "title": "Hadoop 中 HDFS 与 MapReduce 分别解决什么问题？",
      "answer": [
        "Hadoop 是分布式数据存储和处理的基础架构及生态。",
        "HDFS 负责分布式文件存储。",
        "MapReduce 是分布式计算模型，负责把计算任务分解、并行处理并汇总结果。"
      ],
      "explanation": "分布式与多副本有助于扩展规模、提高容错能力，但不等于天然没有安全风险。"
    },
    {
      "id": "ch3-short-05",
      "topic": "data",
      "type": "short",
      "title": "区分分类、聚类、关联规则与预测，并各举一个电力相关例子。",
      "answer": [
        "分类：利用已知类别的数据建立模型，预测未知样本所属类别。",
        "聚类：根据相似性自然分组，目标是类内相似、类间差异较大。",
        "关联规则：寻找数据项或事件之间经常共同出现等关系。",
        "预测模型：利用数据与算法预测结果，支持预报、优化和模拟。",
        "分类：识别设备故障类别；聚类：按用电曲线分组；关联规则：寻找共同出现的告警模式；预测：预测明日负荷。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-short-06",
      "topic": "data",
      "type": "short",
      "title": "电力大数据有哪些来源、分类和特点？",
      "answer": [
        "覆盖发电、输电、变电、配电、用电和调度各环节。",
        "三类：电网运行与设备检测/监测数据；营销数据，如电价、售电量、客户；企业管理数据。",
        "特点：体量大、类型多、价值密度低、处理时效要求高。",
        "建设思路：定机制 → 建平台 → 搭中台。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-short-07",
      "topic": "data",
      "type": "short",
      "title": "大数据如何分别用于发电、电网调度、检修和运行预警？",
      "answer": [
        "依据历史工况建立预警模型，结合实时监测，把故障后报警逐步转向提前预警和预测性维护。",
        "结合竞价上网，分析机组度电利润与运行工况，辅助优化效率与经济收益。",
        "配网结合用电采集与在线监测，实时掌握状态、辅助诊断问题与节能。",
        "调度利用多源运行数据与故障诊断模型，提高告警分析和故障定位效率。",
        "从被动、故障后维修转向主动的设备健康管理。",
        "用历史正常工况建立参考指标，结合实时状态进行动态评价、异常预警与检修决策。",
        "结合运行规程，将仿真结果与 DCS 实测运行数据对比，识别偏离或异常。",
        "明确预警状态，辅助减少误操作和安全事故。"
      ],
      "explanation": ""
    },
    {
      "id": "ch3-short-08",
      "topic": "data",
      "type": "short",
      "title": "从成本、安全、进度和质量四方面，说明大数据如何支持工程建设。",
      "answer": [
        "成本：跟踪投入、预算和资源使用，及时识别超支。",
        "安全：分析风险和现场状态，辅助预警。",
        "进度：横向、纵向比较进展，定位偏差并纠正。",
        "质量：追踪质量记录、发现问题并闭环改进。"
      ],
      "explanation": "按“成本、安全、进度、质量”四个维度背诵。"
    },
    {
      "id": "ch4-choice-01",
      "topic": "ai",
      "type": "choice",
      "title": "专注于特定领域、解决指定任务的 AI，按本章分类属于？",
      "answer": [
        "A · 弱人工智能。"
      ],
      "explanation": "",
      "options": [
        "弱人工智能",
        "超人工智能",
        "任何任务都能胜任的强人工智能",
        "操作系统"
      ],
      "correct": 0
    },
    {
      "id": "ch4-choice-02",
      "topic": "ai",
      "type": "choice",
      "title": "人工智能作为研究领域正式诞生的标志通常是？",
      "answer": [
        "B · 1956 年达特茅斯会议。"
      ],
      "explanation": "",
      "options": [
        "1946 年所有计算机联网",
        "1956 年达特茅斯会议",
        "2000 年互联网出现",
        "第一部智能手机上市"
      ],
      "correct": 1
    },
    {
      "id": "ch4-choice-03",
      "topic": "ai",
      "type": "choice",
      "title": "将人类知识形式化或模型化，属于？",
      "answer": [
        "C · 知识表示。"
      ],
      "explanation": "",
      "options": [
        "机器供电",
        "机器行为",
        "知识表示",
        "字符压缩"
      ],
      "correct": 2
    },
    {
      "id": "ch4-choice-04",
      "topic": "ai",
      "type": "choice",
      "title": "机器视觉与机器听觉主要属于？",
      "answer": [
        "D · 机器感知。"
      ],
      "explanation": "",
      "options": [
        "应用软件安装",
        "总线控制",
        "进制转换",
        "机器感知"
      ],
      "correct": 3
    },
    {
      "id": "ch4-choice-05",
      "topic": "ai",
      "type": "choice",
      "title": "“说、写、画”等表达能力，主要对应？",
      "answer": [
        "A · 机器行为。"
      ],
      "explanation": "",
      "options": [
        "机器行为",
        "字长",
        "数据线",
        "物理层"
      ],
      "correct": 0
    },
    {
      "id": "ch4-choice-06",
      "topic": "ai",
      "type": "choice",
      "title": "关于人工智能与机器学习，正确的是？",
      "answer": [
        "B · 机器学习是人工智能的重要分支。"
      ],
      "explanation": "",
      "options": [
        "二者完全等同",
        "机器学习是人工智能的重要分支",
        "人工智能只能处理文字",
        "人工智能就是所有统计表格"
      ],
      "correct": 1
    },
    {
      "id": "ch4-fill-01",
      "topic": "ai",
      "type": "fill",
      "title": "人工智能诞生的标志会议是 ______ 年的 ______ 会议。",
      "answer": [
        "1956；达特茅斯。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-fill-02",
      "topic": "ai",
      "type": "fill",
      "title": "AI 五项研究内容包括知识表示、机器感知、机器思维、______、______。",
      "answer": [
        "机器学习；机器行为。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-fill-03",
      "topic": "ai",
      "type": "fill",
      "title": "课程列举的知识表示方法有 ______ 和 ______。",
      "answer": [
        "符号表示法；连接机制表示法。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-fill-04",
      "topic": "ai",
      "type": "fill",
      "title": "机器感知主要包括机器 ______ 和机器 ______。",
      "answer": [
        "视觉；听觉。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-fill-05",
      "topic": "ai",
      "type": "fill",
      "title": "限制领域或应用型人工智能又称 ______ 人工智能。",
      "answer": [
        "弱。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-fill-06",
      "topic": "ai",
      "type": "fill",
      "title": "机器对外部信息和内部工作信息进行有目的的处理，对应机器 ______。",
      "answer": [
        "思维。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-judge-01",
      "topic": "ai",
      "type": "judge",
      "title": "弱人工智能的“弱”意味着它在特定任务上一定不如人。",
      "answer": [
        "错误。"
      ],
      "explanation": "“弱”指任务或能力范围受限，不表示特定任务性能一定差。",
      "correct": false
    },
    {
      "id": "ch4-judge-02",
      "topic": "ai",
      "type": "judge",
      "title": "知识表示是把知识变成计算机可处理的形式。",
      "answer": [
        "正确。"
      ],
      "explanation": "课程概括为形式化或模型化。",
      "correct": true
    },
    {
      "id": "ch4-judge-03",
      "topic": "ai",
      "type": "judge",
      "title": "机器学习与机器感知是完全相同的研究内容。",
      "answer": [
        "错误。"
      ],
      "explanation": "学习强调从数据或经验中改进；感知强调获取、识别环境信息。",
      "correct": false
    },
    {
      "id": "ch4-judge-04",
      "topic": "ai",
      "type": "judge",
      "title": "机器行为可以包含说、写、画等表达能力。",
      "answer": [
        "正确。"
      ],
      "explanation": "这是课程列举的典型表现。",
      "correct": true
    },
    {
      "id": "ch4-judge-05",
      "topic": "ai",
      "type": "judge",
      "title": "所有人工智能系统都必须采用大语言模型。",
      "answer": [
        "错误。"
      ],
      "explanation": "AI 还可采用规则、搜索、规划、传统机器学习等方法。",
      "correct": false
    },
    {
      "id": "ch4-judge-06",
      "topic": "ai",
      "type": "judge",
      "title": "1956 年达特茅斯会议通常被视为 AI 正式诞生的标志。",
      "answer": [
        "正确。"
      ],
      "explanation": "按本章历史知识点记忆。",
      "correct": true
    },
    {
      "id": "ch4-short-01",
      "topic": "ai",
      "type": "short",
      "title": "区分弱人工智能、强人工智能与超人工智能。",
      "answer": [
        "弱人工智能：针对特定领域或任务设计的人工智能，也称限制领域或应用型人工智能。",
        "强人工智能（通用人工智能）：课程中指具备广泛、通用的智能，能胜任广泛的人类认知任务。",
        "超人工智能：设想中整体能力超过人类最强智能水平的系统。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-short-02",
      "topic": "ai",
      "type": "short",
      "title": "列出人工智能研究的五项基本内容，并分别解释。",
      "answer": [
        "知识表示、机器感知、机器思维、机器学习、机器行为。",
        "把人类知识形式化或模型化，使计算机能够存储、处理和利用。",
        "课程列举：符号表示法、连接机制表示法。",
        "使机器具有感知外部环境的能力，课程重点包括机器视觉与机器听觉。",
        "对感知获得的外部信息和机器内部工作信息进行有目的的处理，例如分析、推理和决策。",
        "研究如何使计算机通过经验或数据学习规律、获取知识并改进性能。",
        "机器学习是人工智能的重要分支，二者不是完全相同的概念。",
        "指机器的表达和行为输出能力，例如“说”“写”“画”等。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-short-03",
      "topic": "ai",
      "type": "short",
      "title": "什么是知识表示？课程列举了哪些表示方法？",
      "answer": [
        "把人类知识形式化或模型化，使计算机能够存储、处理和利用。",
        "课程列举：符号表示法、连接机制表示法。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-short-04",
      "topic": "ai",
      "type": "short",
      "title": "区分机器感知、机器思维和机器行为，并各给一个例子。",
      "answer": [
        "感知：从图像识别设备表盘、从声音识别告警。",
        "思维：分析设备状态并推理可能故障。",
        "行为：用语音、文字或图像输出分析结果。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-short-05",
      "topic": "ai",
      "type": "short",
      "title": "机器学习与人工智能是什么关系？大模型能代表全部 AI 吗？",
      "answer": [
        "人工智能是更广的研究领域；机器学习是其重要分支。",
        "大模型通常基于深度学习，属于机器学习的一部分。",
        "不能把所有人工智能都等同于大模型或聊天机器人。"
      ],
      "explanation": ""
    },
    {
      "id": "ch4-short-06",
      "topic": "ai",
      "type": "short",
      "title": "以设备巡检为例，说明感知、表示、思维、学习、行为可以如何协同。",
      "answer": [
        "感知：采集图像、声音或传感数据。",
        "表示：组织设备状态、告警与检修知识。",
        "思维：分析异常并形成判断。",
        "学习：用历史样本改善识别或预测模型。",
        "行为：输出巡检报告或告警提示。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-choice-01",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "云计算五个基本特征中，不包括？",
      "answer": [
        "C · 所有资源永远免费。"
      ],
      "explanation": "",
      "options": [
        "资源池化",
        "快速弹性",
        "所有资源永远免费",
        "按需自助"
      ],
      "correct": 2
    },
    {
      "id": "ch5-choice-02",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "直接使用在线文档编辑功能，最贴近？",
      "answer": [
        "D · SaaS。"
      ],
      "explanation": "",
      "options": [
        "HDFS",
        "IaaS",
        "PaaS",
        "SaaS"
      ],
      "correct": 3
    },
    {
      "id": "ch5-choice-03",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "租用云主机，自行安装操作系统和应用，最贴近？",
      "answer": [
        "A · IaaS。"
      ],
      "explanation": "",
      "options": [
        "IaaS",
        "字符编码",
        "物理传感",
        "SaaS"
      ],
      "correct": 0
    },
    {
      "id": "ch5-choice-04",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "提供应用运行环境、托管数据库和部署工具，最贴近？",
      "answer": [
        "B · PaaS。"
      ],
      "explanation": "",
      "options": [
        "RFID",
        "PaaS",
        "机械硬盘",
        "ALU"
      ],
      "correct": 1
    },
    {
      "id": "ch5-choice-05",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "总能耗为 150 kWh，IT 设备能耗为 100 kWh，同期 PUE 为？",
      "answer": [
        "C · 1.5。"
      ],
      "explanation": "PUE=150/100=1.5。",
      "options": [
        "0.67",
        "1",
        "1.5",
        "2.5"
      ],
      "correct": 2
    },
    {
      "id": "ch5-choice-06",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "物联网中，温度传感器主要属于？",
      "answer": [
        "D · 感知层。"
      ],
      "explanation": "",
      "options": [
        "网络层",
        "应用层",
        "操作系统层",
        "感知层"
      ],
      "correct": 3
    },
    {
      "id": "ch5-choice-07",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "NB-IoT、5G、LoRa 主要属于哪一层的相关技术？",
      "answer": [
        "A · 网络层。"
      ],
      "explanation": "",
      "options": [
        "网络层",
        "应用层",
        "显示层",
        "感知层"
      ],
      "correct": 0
    },
    {
      "id": "ch5-choice-08",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "屏蔽不同设备差异、统一数据模型，主要是哪类组件的作用？",
      "answer": [
        "B · 物联网中间件。"
      ],
      "explanation": "",
      "options": [
        "ASCII",
        "物联网中间件",
        "程序计数器",
        "声道"
      ],
      "correct": 1
    },
    {
      "id": "ch5-choice-09",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "需要减少上传带宽并降低本地处理时延时，适合考虑？",
      "answer": [
        "C · 边缘计算与云边协同。"
      ],
      "explanation": "",
      "options": [
        "取消传感器",
        "全部数据无条件上传云端",
        "边缘计算与云边协同",
        "把所有设备断网"
      ],
      "correct": 2
    },
    {
      "id": "ch5-choice-10",
      "topic": "cloud-iot",
      "type": "choice",
      "title": "智能电表、局放监测、覆冰监测主要体现？",
      "answer": [
        "D · 电力物联网。"
      ],
      "explanation": "",
      "options": [
        "ASCII 编码",
        "音频量化",
        "原码运算",
        "电力物联网"
      ],
      "correct": 3
    },
    {
      "id": "ch5-fill-01",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "云计算五个特征：按需自助、广泛接入、资源池化、______、______。",
      "answer": [
        "快速弹性；可计量。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-02",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "IaaS、PaaS、SaaS 分别是基础设施即服务、______、______。",
      "answer": [
        "平台即服务；软件即服务。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-03",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "云的简化体系结构：物理层 → ______ → 服务层 → 用户。",
      "answer": [
        "资源池。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-04",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "把一台物理机抽象成多台逻辑机的技术称为 ______。",
      "answer": [
        "虚拟化。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-05",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "PUE = ______ ÷ IT 设备能耗。",
      "answer": [
        "数据中心总能耗。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-06",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "物联网从下到上三层是 ______、______、______。",
      "answer": [
        "感知层；网络层；应用层。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-07",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "RFID 的中文含义是 ______，GPS / 北斗主要支持 ______ 与 ______。",
      "answer": [
        "射频识别；定位；授时。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-08",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "ETC 案例中的 OBU 和 RSU 分别指 ______、______。",
      "answer": [
        "车载单元；路侧单元。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-09",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "云边协同中的“端、边、云”，分别可对应设备、______、______。",
      "answer": [
        "网关或边缘服务器；数据中心。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-fill-10",
      "topic": "cloud-iot",
      "type": "fill",
      "title": "云大物移智链中的“移”和“链”分别指 ______ 与 ______。",
      "answer": [
        "移动互联网；区块链。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-judge-01",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "云计算定义中的网络访问可以直接替换成“网格计算”，两者完全同义。",
      "answer": [
        "错误。"
      ],
      "explanation": "云计算通过网络提供服务，网格计算是相关但不同的计算组织方式。",
      "correct": false
    },
    {
      "id": "ch5-judge-02",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "使用 SaaS 以后，用户不再需要管理任何账号和数据权限。",
      "answer": [
        "错误。"
      ],
      "explanation": "用户仍需要负责合适的使用、账号、权限及数据管理。",
      "correct": false
    },
    {
      "id": "ch5-judge-03",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "虚拟化和云计算是完全相同的概念。",
      "answer": [
        "错误。"
      ],
      "explanation": "虚拟化是常见支撑技术，云还强调资源池、服务化、弹性等。",
      "correct": false
    },
    {
      "id": "ch5-judge-04",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "PUE 越低，任何两个数据中心的总用电量就必然越小。",
      "answer": [
        "错误。"
      ],
      "explanation": "总用电量还与规模、IT 负载等有关，不能只比较 PUE。",
      "correct": false
    },
    {
      "id": "ch5-judge-05",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "感知层采集数据，网络层负责传输，应用层结合业务处理。",
      "answer": [
        "正确。"
      ],
      "explanation": "这是本章三层架构的主要分工。",
      "correct": true
    },
    {
      "id": "ch5-judge-06",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "RFID、二维码、传感器主要是应用层数据报表工具。",
      "answer": [
        "错误。"
      ],
      "explanation": "它们主要属于感知、识别相关技术。",
      "correct": false
    },
    {
      "id": "ch5-judge-07",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "物联网中间件可屏蔽设备差异，物联网平台可提供设备管理等能力。",
      "answer": [
        "正确。"
      ],
      "explanation": "它们帮助把多种设备接入统一业务。",
      "correct": true
    },
    {
      "id": "ch5-judge-08",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "所有设备的全部数据都必须送到云端，边缘不能做任何计算。",
      "answer": [
        "错误。"
      ],
      "explanation": "边缘可承担部分实时、带宽敏感或隐私敏感的处理。",
      "correct": false
    },
    {
      "id": "ch5-judge-09",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "电力物联网可用于输电、变电与用电侧的状态监测和数据采集。",
      "answer": [
        "正确。"
      ],
      "explanation": "课件列出了这三个典型场景。",
      "correct": true
    },
    {
      "id": "ch5-judge-10",
      "topic": "cloud-iot",
      "type": "judge",
      "title": "多副本和故障迁移属于提高容错能力的常见方法。",
      "answer": [
        "正确。"
      ],
      "explanation": "它们用于应对部分节点或服务故障。",
      "correct": true
    },
    {
      "id": "ch5-short-01",
      "topic": "cloud-iot",
      "type": "short",
      "title": "给出云计算定义和五个基本特征。",
      "answer": [
        "通过网络，以便捷、按需的方式访问共享的可配置计算资源池，例如网络、服务器、存储、应用和服务。",
        "资源可以快速提供和释放，并可按使用量计量。",
        "按需自助：用户按需要自行获取资源。",
        "广泛网络接入：支持通过网络和不同终端访问。",
        "资源池化：计算、存储、网络等资源集中组织并按需分配。",
        "快速弹性：资源可随业务需求快速扩缩。",
        "可计量：监测、计量资源使用，支持相应的管理与计费。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-short-02",
      "topic": "cloud-iot",
      "type": "short",
      "title": "区分 IaaS、PaaS、SaaS，并各举一个例子。",
      "answer": [
        "用户直接使用已经提供的软件功能，通常主要管理业务使用与配置。",
        "例：在线文档、在线 CRM、办公协同软件。",
        "提供开发、部署和运行应用的平台，例如托管数据库、中间件、运行环境或部署工具。",
        "用户主要关注自己的应用代码和业务。",
        "提供计算、存储、网络等基础资源。",
        "例：云主机、云硬盘、对象存储等基础资源服务。",
        "使用云主机时，用户通常仍需管理操作系统、中间件和应用。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-short-03",
      "topic": "cloud-iot",
      "type": "short",
      "title": "虚拟化、资源池、调度和容错如何支撑云计算？",
      "answer": [
        "通过虚拟化层，把一台物理计算机的资源抽象为多台逻辑计算机或多个隔离运行环境。",
        "资源池：把 CPU、内存、存储、网络等组织成可分配的资源。",
        "调度：根据需求与资源状态，把任务安排到合适的节点。",
        "容错：通过多副本、故障迁移、自动重启等机制应对部分故障。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-short-04",
      "topic": "cloud-iot",
      "type": "short",
      "title": "区分并行、分布式、网格计算及云计算。",
      "answer": [
        "并行计算：多个处理单元同时处理一个问题或任务的不同部分。",
        "分布式计算：多台通过网络连接的计算机协作完成任务。",
        "网格计算：跨机构、跨地域共享异构计算资源。",
        "云计算常以分布式计算、虚拟化、资源池和服务化为基础，强调通过网络按需提供、弹性管理和计量资源。"
      ],
      "explanation": "“并行 → 分布式 → 网格 → 云”可作为本章联系示意，不是所有系统都严格经历的替代顺序，也不是简单的同义关系。"
    },
    {
      "id": "ch5-short-05",
      "topic": "cloud-iot",
      "type": "short",
      "title": "解释 PUE，并说明如何看待绿色数据中心的节能效果。",
      "answer": [
        "PUE = 数据中心总能耗 ÷ IT 设备能耗，统计边界和时间范围应一致。",
        "在可比条件下，PUE 越接近 1，辅助设施相对能耗越小。",
        "自然冷却、优化供配电和资源配置等可支持节能；东数西算体现算力资源布局与协同。"
      ],
      "explanation": "PUE 低不等于总耗电量一定小，也不单独代表碳排放一定低。"
    },
    {
      "id": "ch5-short-06",
      "topic": "cloud-iot",
      "type": "short",
      "title": "说明物联网三层架构，并分别列出关键技术。",
      "answer": [
        "从下到上为感知层、网络层、应用层。数据通常向上传递，分析结果或控制指令可向下反馈。",
        "感知层采集、识别并转换物理信息，是数据的来源。",
        "传感器：温度、压力、振动等测量。",
        "RFID：利用无线电进行目标识别和数据读写。",
        "二维码：利用图形编码进行识别或信息关联。",
        "GPS / 北斗：定位与授时；MEMS：微机电系统，可支持微型传感器等器件。",
        "网络层负责接入、传输与路由，可包含网关、接入网和核心网。",
        "NB-IoT：低功耗、广覆盖，适合大量低速设备连接。",
        "5G：可支持较高带宽、较低时延等场景，具体性能取决于网络配置。",
        "LoRa：适合低功耗、长距离、较低速率的部分园区或农业等场景。",
        "应用层把设备数据与行业业务结合，提供管理、分析和控制。",
        "中间件屏蔽设备差异、统一数据模型。",
        "平台提供设备管理、规则引擎、开放接口等能力；云与 AI 支撑存储、分析和决策。"
      ],
      "explanation": ""
    },
    {
      "id": "ch5-short-07",
      "topic": "cloud-iot",
      "type": "short",
      "title": "列出物联网的十大应用领域及典型案例。",
      "answer": [
        "交通：ETC、车路协同。",
        "环保：水质、空气监测。",
        "公共安全：消防、监控。",
        "家居：照明、安防。",
        "工业：设备联网。",
        "医疗：可穿戴、健康监护。",
        "农业：大棚、溯源。",
        "电力：监测、采集。",
        "金融：支付、监管。",
        "物流：仓储、冷链。"
      ],
      "explanation": "《云计算与物联网》打印版 PDF 第14页右上“十大应用领域”。"
    },
    {
      "id": "ch5-short-08",
      "topic": "cloud-iot",
      "type": "short",
      "title": "结合输电、变电和用电侧，说明电力物联网的典型应用。",
      "answer": [
        "输电：温度、覆冰、舞动监测，视频或无人机巡检，辅助故障定位与抢修。",
        "变电：局放、油温、振动、SF₆ 等监测，支持状态评估和状态检修。",
        "用电侧：智能电表、负荷、费控、线损、分布式光伏等信息，支持需求响应和节能。"
      ],
      "explanation": "原课件 PDF 第16页右上“三个典型场景”。"
    },
    {
      "id": "ch5-short-09",
      "topic": "cloud-iot",
      "type": "short",
      "title": "为什么不是所有数据都送到云端处理？说明云边协同的作用。",
      "answer": [
        "端：传感器和设备；边：网关或边缘服务器；云：数据中心及集中分析平台。",
        "边缘就地处理可减少时延、降低上传带宽需求，部分场景下可在断网时保留本地处理能力，并减少敏感原始数据外传。",
        "云端适合集中存储、全局分析与模型管理，边缘适合部分实时处理。"
      ],
      "explanation": "不能简单认为所有保护和控制任务都可以依赖远端云。"
    },
    {
      "id": "ch5-short-10",
      "topic": "cloud-iot",
      "type": "short",
      "title": "解释“物端产数据、云端算价值、反馈现场”的闭环，以及云大物移智链如何协同。",
      "answer": [
        "物端采集 → 网络传输 → 云端存储与计算 → 大数据 / AI 分析决策 → 反馈现场控制与优化 → 再采集。",
        "云：云计算，提供算力和服务。",
        "大：大数据，支持数据存储、治理和分析。",
        "物：物联网，把物理世界转为数据。",
        "移：移动互联网，支持移动连接。",
        "智：人工智能，学习、分析和决策。",
        "链：区块链，支持特定场景下的可信记录、追溯和协作。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-choice-01",
      "topic": "ml",
      "type": "choice",
      "title": "用带“故障 / 正常”标签的样本训练分类模型，属于？",
      "answer": [
        "A · 监督学习。"
      ],
      "explanation": "",
      "options": [
        "监督学习",
        "无监督学习",
        "无数据学习",
        "只做压缩"
      ],
      "correct": 0
    },
    {
      "id": "ch7-choice-02",
      "topic": "ml",
      "type": "choice",
      "title": "使用少量标注样本与大量未标注样本，属于？",
      "answer": [
        "B · 半监督学习。"
      ],
      "explanation": "",
      "options": [
        "纯无监督学习",
        "半监督学习",
        "ASCII 编码",
        "数据总线"
      ],
      "correct": 1
    },
    {
      "id": "ch7-choice-03",
      "topic": "ml",
      "type": "choice",
      "title": "根据状态采取动作、获得奖励并改进策略，属于？",
      "answer": [
        "C · 强化学习。"
      ],
      "explanation": "",
      "options": [
        "字节换算",
        "仅人工抄表",
        "强化学习",
        "分色"
      ],
      "correct": 2
    },
    {
      "id": "ch7-choice-04",
      "topic": "ml",
      "type": "choice",
      "title": "预测连续数值的明日负荷，最直接对应哪类任务？",
      "answer": [
        "D · 回归。"
      ],
      "explanation": "",
      "options": [
        "仅聚类",
        "图像分色",
        "字符编码",
        "回归"
      ],
      "correct": 3
    },
    {
      "id": "ch7-choice-05",
      "topic": "ml",
      "type": "choice",
      "title": "逻辑回归通常主要用于？",
      "answer": [
        "A · 分类。"
      ],
      "explanation": "",
      "options": [
        "分类",
        "替代所有神经网络",
        "只做无损压缩",
        "把信号变成电流"
      ],
      "correct": 0
    },
    {
      "id": "ch7-choice-06",
      "topic": "ml",
      "type": "choice",
      "title": "调参和选择模型时，通常应主要参考？",
      "answer": [
        "B · 验证集。"
      ],
      "explanation": "",
      "options": [
        "测试集反复尝试后的最高分",
        "验证集",
        "只看训练集",
        "随便一个未来真实标签"
      ],
      "correct": 1
    },
    {
      "id": "ch7-choice-07",
      "topic": "ml",
      "type": "choice",
      "title": "训练表现很好而新数据表现较差，可能提示？",
      "answer": [
        "C · 过拟合。"
      ],
      "explanation": "",
      "options": [
        "保证泛化成功",
        "无需评估",
        "过拟合",
        "必然没有噪声"
      ],
      "correct": 2
    },
    {
      "id": "ch7-choice-08",
      "topic": "ml",
      "type": "choice",
      "title": "减少特征表示的维数，通常对应？",
      "answer": [
        "D · 降维。"
      ],
      "explanation": "",
      "options": [
        "量化声道数",
        "总线仲裁",
        "提高字长",
        "降维"
      ],
      "correct": 3
    },
    {
      "id": "ch7-choice-09",
      "topic": "ml",
      "type": "choice",
      "title": "关于大模型，正确的是？",
      "answer": [
        "A · 通常属于机器学习中的深度学习路线。"
      ],
      "explanation": "",
      "options": [
        "通常属于机器学习中的深度学习路线",
        "永远不需要数据",
        "它等于所有机器学习",
        "能无条件替代一切模型"
      ],
      "correct": 0
    },
    {
      "id": "ch7-choice-10",
      "topic": "ml",
      "type": "choice",
      "title": "下列哪一种负荷预测做法存在明显的信息泄漏？",
      "answer": [
        "B · 用未来实际负荷构造当前预测特征。"
      ],
      "explanation": "",
      "options": [
        "按时间划分数据",
        "用未来实际负荷构造当前预测特征",
        "保留独立测试集",
        "只用预测前已知的历史数据"
      ],
      "correct": 1
    },
    {
      "id": "ch7-fill-01",
      "topic": "ml",
      "type": "fill",
      "title": "监督学习的训练样本通常包含输入特征和目标 ______。",
      "answer": [
        "标签。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-02",
      "topic": "ml",
      "type": "fill",
      "title": "半监督学习结合少量 ______ 数据与大量 ______ 数据。",
      "answer": [
        "标注；未标注。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-03",
      "topic": "ml",
      "type": "fill",
      "title": "强化学习通过与环境交互，根据 ______ 反馈学习策略。",
      "answer": [
        "奖励。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-04",
      "topic": "ml",
      "type": "fill",
      "title": "线性回归通常预测连续 ______，逻辑回归通常用于 ______。",
      "answer": [
        "数值；分类。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-05",
      "topic": "ml",
      "type": "fill",
      "title": "寻找自然分组是 ______，降低特征维数是 ______。",
      "answer": [
        "聚类；降维。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-06",
      "topic": "ml",
      "type": "fill",
      "title": "机器学习流程应包括数据、特征、模型、训练、______、部署。",
      "answer": [
        "评估。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-07",
      "topic": "ml",
      "type": "fill",
      "title": "学习参数用 ______ 集，调参用 ______ 集，独立检验泛化用 ______ 集。",
      "answer": [
        "训练；验证；测试。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-08",
      "topic": "ml",
      "type": "fill",
      "title": "用已有模型处理新输入并给出结果的过程叫 ______。",
      "answer": [
        "推理。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-09",
      "topic": "ml",
      "type": "fill",
      "title": "训练效果好、未见数据效果差可能是 ______；训练和测试都学不好可能是 ______。",
      "answer": [
        "过拟合；欠拟合。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-fill-10",
      "topic": "ml",
      "type": "fill",
      "title": "课件强调的 ML 边界：数据质量、过拟合、可解释性、______ 与 ______。",
      "answer": [
        "算力；隐私。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-judge-01",
      "topic": "ml",
      "type": "judge",
      "title": "监督学习不需要目标标签。",
      "answer": [
        "错误。"
      ],
      "explanation": "监督学习利用有目标标签的数据学习输入与输出关系。",
      "correct": false
    },
    {
      "id": "ch7-judge-02",
      "topic": "ml",
      "type": "judge",
      "title": "强化学习只是被动观察，与动作和奖励无关。",
      "answer": [
        "错误。"
      ],
      "explanation": "强化学习强调与环境交互以及奖励反馈。",
      "correct": false
    },
    {
      "id": "ch7-judge-03",
      "topic": "ml",
      "type": "judge",
      "title": "逻辑回归的名字包含回归，所以它只能用于连续数值预测。",
      "answer": [
        "错误。"
      ],
      "explanation": "它通常用于分类，可输出类别概率。",
      "correct": false
    },
    {
      "id": "ch7-judge-04",
      "topic": "ml",
      "type": "judge",
      "title": "所有降维算法都必须完全不使用标签。",
      "answer": [
        "错误。"
      ],
      "explanation": "很多方法无监督，但也有使用标签的降维方法。",
      "correct": false
    },
    {
      "id": "ch7-judge-05",
      "topic": "ml",
      "type": "judge",
      "title": "NFL 定理意味着在任何实际数据集上所有算法都一样好。",
      "answer": [
        "错误。"
      ],
      "explanation": "其平均结论依赖理论前提，实际任务仍有更适合的方法。",
      "correct": false
    },
    {
      "id": "ch7-judge-06",
      "topic": "ml",
      "type": "judge",
      "title": "训练和推理的计算目标不同，但推理同样需要算力。",
      "answer": [
        "正确。"
      ],
      "explanation": "推理需要计算输出，大规模请求也可能带来很高总成本。",
      "correct": true
    },
    {
      "id": "ch7-judge-07",
      "topic": "ml",
      "type": "judge",
      "title": "测试集可以反复用于调参，最终最高测试分仍是完全独立评估。",
      "answer": [
        "错误。"
      ],
      "explanation": "反复用测试集选择设置会破坏独立评估。",
      "correct": false
    },
    {
      "id": "ch7-judge-08",
      "topic": "ml",
      "type": "judge",
      "title": "在负荷预测中，预测时尚不可获得的未来真实量不应作为当前输入特征。",
      "answer": [
        "正确。"
      ],
      "explanation": "否则产生信息泄漏和不真实的效果估计。",
      "correct": true
    },
    {
      "id": "ch7-judge-09",
      "topic": "ml",
      "type": "judge",
      "title": "训练集表现好就足以证明模型对所有新情况都有效。",
      "answer": [
        "错误。"
      ],
      "explanation": "需要独立评估，且还要关注分布变化与边界条件。",
      "correct": false
    },
    {
      "id": "ch7-judge-10",
      "topic": "ml",
      "type": "judge",
      "title": "复杂大模型不一定是低算力、低时延场景的最佳选择。",
      "answer": [
        "正确。"
      ],
      "explanation": "模型选择要综合数据、效果、解释性和部署约束。",
      "correct": true
    },
    {
      "id": "ch7-short-01",
      "topic": "ml",
      "type": "short",
      "title": "比较监督、无监督、半监督与强化学习。",
      "answer": [
        "利用带有目标标签的训练数据，学习输入与输出之间的关系，再预测新样本的结果。",
        "不依赖预先提供的目标类别标签，主要从数据本身寻找结构或分布规律。",
        "同时利用少量标注数据和大量未标注数据进行学习。",
        "智能体与环境交互，选择动作、观察结果并获得奖励反馈，学习怎样优化长期回报。",
        "核心要素包括状态、动作、奖励和策略。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-02",
      "topic": "ml",
      "type": "short",
      "title": "概括常见算法：线性回归、逻辑回归、神经网络、聚类、降维与推荐分别适合什么任务？",
      "answer": [
        "线性回归通常预测连续数值，例如负荷或功率。",
        "逻辑回归虽然名字包含“回归”，但通常用于分类，可输出类别概率。",
        "通过多层相连的计算单元和可学习参数，拟合输入与输出的复杂关系。",
        "按相似性或距离等规则把数据分成若干组，使组内相似、组间差异较大。",
        "把较高维的特征表示转换为较低维表示，以保留主要结构、降低复杂度或方便可视化。",
        "根据用户、物品、历史行为和上下文等信息，预测相关性或偏好，选择并排序推荐内容。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-03",
      "topic": "ml",
      "type": "short",
      "title": "什么是没有免费的午餐定理？对模型选择有什么启发？",
      "answer": [
        "在对所有可能任务作特定、均匀平均等理论前提下，没有一种算法能对所有问题都占优。",
        "某算法在一些问题上有优势，可能在另一些问题上处于劣势；需要结合任务和数据选择方法。",
        "先区分数值预测、分类、聚类、降维、推荐或序贯决策等任务。",
        "再结合数据量、标签、分布、准确率、解释性、时延、算力和成本选择并验证模型。"
      ],
      "explanation": "不能据此推出在某个实际行业的数据分布上，所有算法效果都一样。"
    },
    {
      "id": "ch7-short-04",
      "topic": "ml",
      "type": "short",
      "title": "描述机器学习的完整操作流程，并说明训练、验证、测试三类数据的分工。",
      "answer": [
        "数据采集 → 数据清洗 → 特征工程 → 模型选择 → 训练与评估 → 部署 / 监控。",
        "训练前需划分数据；模型选择与调参使用验证信息，最终效果由独立测试数据评估。",
        "部署后监控数据分布与业务表现，必要时更新模型。",
        "训练集：学习模型参数。",
        "验证集：模型选择和调参。",
        "测试集：在模型选择完成后独立检验泛化效果。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-05",
      "topic": "ml",
      "type": "short",
      "title": "用训练与推理解释：为什么训练更依赖算力，而推理更关注时延与成本？",
      "answer": [
        "训练反复处理大量数据、更新参数，单次训练可能需要较大的累计计算量。",
        "推理面向实际请求，用户关注响应时间，服务方关注吞吐、单次成本和持续运行费用。",
        "推理也需要算力；当请求很多时，总推理成本可能很高。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-06",
      "topic": "ml",
      "type": "short",
      "title": "过拟合是什么？举一个电力负荷预测例子，并说明如何避免。",
      "answer": [
        "过拟合：过度贴合训练数据的细节或噪声，训练表现很好，未见数据表现较差。",
        "例子：模型把某个夏季或少数节假日的特殊曲线记得很好，但遇到新日期、新天气时误差明显增大。",
        "按时间划分训练、验证、测试集，避免把未来信息泄漏到训练过程。",
        "使用有代表性的数据，合理简化模型、正则化、早停，并通过验证集选择设置。",
        "持续监测效果与分布变化；性能变差也可能来自数据漂移或数据质量问题。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-07",
      "topic": "ml",
      "type": "short",
      "title": "监督、无监督与强化学习各举一个电力行业场景，并指出它们分别利用什么学习信号。",
      "answer": [
        "监督：用带真实负荷标签的历史样本预测明日负荷；或用已标注故障类别的设备数据诊断故障。",
        "无监督：没有预设客户类别，按用电曲线相似性聚类。",
        "强化：在仿真环境中学习储能充放电策略，根据成本、约束等设计奖励。",
        "监督利用标签；无监督利用数据本身结构；强化利用交互奖励。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-08",
      "topic": "ml",
      "type": "short",
      "title": "大模型与传统机器学习是什么关系？大模型能替代所有 ML 吗？",
      "answer": [
        "机器学习范围更广，包括回归、决策树、支持向量机、神经网络等方法。",
        "深度学习是机器学习的重要分支，大模型通常采用深度学习并进行大规模预训练。",
        "大模型不能替代所有机器学习：小样本表格数据、低时延或低成本设备、可解释性要求等场景，较简单模型可能更合适。"
      ],
      "explanation": ""
    },
    {
      "id": "ch7-short-09",
      "topic": "ml",
      "type": "short",
      "title": "选择一个身边的机器学习应用，写出数据、特征、标签和输出。",
      "answer": [
        "数据：历史邮件样本。",
        "特征：正文、标题、发件人相关特征或文本向量。",
        "标签：已标注的“垃圾邮件 / 正常邮件”。",
        "输出：新邮件属于垃圾邮件的概率或分类结果。"
      ],
      "explanation": "以垃圾邮件过滤为示例；也可选择相册分类、推荐等任务并说明各元素。"
    },
    {
      "id": "ch7-short-10",
      "topic": "ml",
      "type": "short",
      "title": "机器学习有哪些边界？这些内容在原课件的哪里？",
      "answer": [
        "数据质量：缺失、错误、偏见与样本代表性影响可学到的规律。",
        "过拟合：训练分数高不代表泛化好。",
        "可解释性：部分模型的判断过程不易解释。",
        "算力：训练和推理受算力、时延、能耗与成本限制。",
        "隐私：数据收集、训练和部署需处理权限与敏感信息。"
      ],
      "explanation": "原图位置：《机器学习简介_打印版》PDF 第14页右上“本讲小结：四句话”第④条；PDF 第1页右上概览也有相关内容。"
    }
  ],
  "notice": "知识点保留整理稿原文；明确留空的解答单独标为“补充解答”。",
  "checklists": [
    {
      "topic": "computer",
      "title": "本章小结",
      "items": [
        {
          "id": "ch1-check-hardware",
          "text": "硬件五大部件：运算器、控制器、存储器、输入设备、输出设备"
        },
        {
          "id": "ch1-check-von",
          "text": "冯·诺依曼三要点：二进制；程序与数据同存内存；五大部件组成"
        },
        {
          "id": "ch1-check-cycle",
          "text": "指令周期：取指 → 译码 → 执行；PC 指路，IR 存当前指令"
        },
        {
          "id": "ch1-check-memory",
          "text": "存储器层次：寄存器 → Cache(SRAM) → 内存(DRAM) →\nSSD/HDD——越靠近 CPU 越快、越贵、容量越小，每层只与相邻层打交道"
        },
        {
          "id": "ch1-check-bus",
          "text": "总线：数据线、地址线、控制线三类，用公共线路降低互连复杂度"
        },
        {
          "id": "ch1-check-system",
          "text": "I/O 设备经接口接入总线；软件 = 系统软件 + 应用软件"
        }
      ]
    },
    {
      "topic": "cloud-iot",
      "title": "本章小结",
      "items": [
        {
          "id": "ch5-summary-1",
          "text": "① 云：IaaS / PaaS / SaaS，虚拟化 + 资源池 + 弹性。"
        },
        {
          "id": "ch5-summary-2",
          "text": "② 物：感知 / 网络 / 应用三层。"
        },
        {
          "id": "ch5-summary-3",
          "text": "③ 闭环：物端产数据 → 云端算价值 → 反馈现场。"
        },
        {
          "id": "ch5-summary-4",
          "text": "④ 组合拳：“云大物移智链”。"
        },
        {
          "id": "ch5-summary-5",
          "text": "⑤ 电力：电力云 + 电力物联网。"
        }
      ]
    }
  ]
};
