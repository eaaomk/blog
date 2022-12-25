(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{610:function(t,_,v){"use strict";v.r(_);var a=v(8),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"进程与线程-基于操作系统层次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程-基于操作系统层次"}},[t._v("#")]),t._v(" 进程与线程-基于操作系统层次")]),t._v(" "),v("h3",{attrs:{id:"并发与并行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发与并行"}},[t._v("#")]),t._v(" 并发与并行")]),t._v(" "),v("ul",[v("li",[t._v("首先我们需要知道并发和并行的区别，很多人都错误的理解了并发的概念。")]),t._v(" "),v("li",[t._v("并发是指在一个时间段内触发很多个任务，从宏观上看，任务是同时执行的，从微观上看不是。也就是说在同一时刻只能有一条指令执行，但多个进程指令被快速的轮换执行，使得在宏观上具有多个进程同时执行的效果，但在微观上并不是同时执行的，只是把时间分成若干段，使多个进程快速交替的执行。")]),t._v(" "),v("li",[t._v("并行是指在一个时间点也就是某个时刻，许多个任务同时刻的触发，无论是微观还是宏观，多个任务它是精确到每一时间点都是同时执行的。也就是说在同一时刻，有多条指令在多个处理器上同时执行。所以无论从微观还是从宏观来看，二者都是一起执行的。")])]),t._v(" "),v("p",[t._v("或许上面的理论有点抽象，在这里举一个更具体的例子：")]),t._v(" "),v("ul",[v("li",[t._v("并发：安排一个人同时看两本书，那么在某一时刻，只有一本书正在被这个人用眼睛阅读，要看完两本书，只能这一本先看一点，然后另外一本书再看一点，这就是所谓的"),v("a",{attrs:{href:"https://www.baidu.com/s?ie=utf-8&wd=%E6%97%B6%E9%97%B4%E7%89%87%E8%BD%AE%E8%BD%AC%E8%B0%83%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("时间片轮转调度"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("li",[t._v("并行：安排两个人同时看两本书，那么在某一时刻，这两本书都是在被人阅读。")])]),t._v(" "),v("h3",{attrs:{id:"进程与线程的理论知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程的理论知识"}},[t._v("#")]),t._v(" 进程与线程的理论知识")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("进程（Process） 是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。 在当代面向线程设计的计算机结构中，进程是线程的容器。程序是指令、数据及其组织形式的描述，进程是程序的实体。是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。程序是指令、数据及其组织形式的描述，进程是程序的实体。")])]),t._v(" "),v("li",[v("p",[t._v("线程（thread） 是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。")])])]),t._v(" "),v("p",[t._v("简化一下：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("进程：指在系统中正在运行的一个应用程序；程序一旦运行就是进程；进程——资源分配的最小单位。")])]),t._v(" "),v("li",[v("p",[t._v("线程：系统分配处理器时间资源的基本单元，或者说进程之内独立执行的一个单元执行流。线程——程序执行的最小单位。")])])]),t._v(" "),v("h3",{attrs:{id:"深入理解进程与线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深入理解进程与线程"}},[t._v("#")]),t._v(" 深入理解进程与线程")]),t._v(" "),v("ol",[v("li",[t._v("前趋图与程序的执行")]),t._v(" "),v("li",[t._v("进程的描述")]),t._v(" "),v("li",[t._v("进程控制")]),t._v(" "),v("li",[t._v("进程同步")]),t._v(" "),v("li",[t._v("经典进程同步的问题")]),t._v(" "),v("li",[t._v("进程通信")]),t._v(" "),v("li",[t._v("线程的基本概念")]),t._v(" "),v("li",[t._v("线程的实现")])])])}),[],!1,null,null,null);_.default=r.exports}}]);