---
id: 139
title: switch关灯工具
date: 2018-08-07 03:34:00
tags: []
categories:
  - 个人项目
---

```
程序名：switch关灯工具
开发语言：还是JavaScript
开发框架：还是jQuery
开发总用时：≈12小时
```

<!--more-->

![](//imba97.cn/uploads/2018/08/switch_1.png)

用途：看视频非全屏时用的，将播放器周围变暗，变得更容易观看（理论上，不过讲真我觉得无所谓，因为我微博背景是个动图，我刷微博都没被背景分过心。

曾经在朋友圈还是空间来着看到过有人做过这个东西，当时感觉贼jer厉害，现在懂了原理之后，想尝试着做做，最开始凉了，放置了一段时间之后，换了另一种思路，姑且就做出来了这个switch关灯工具。

原来的尝试是想获取网页中的video或object等视频相关的标签进行判断，再把父级元素的z-index（网页中层次排序）设置高，然后加入一个稍微低于前面父级元素但高于网页中其他元素的黑色背景。最后做了个只支持B站直播页面的（是用这个页面进行了各种尝试）。

但因为每个网页结构不同，video标签的父级标签不一定是啥，就算知道了父级还需要看父级的父级还有没有父级父亲节快乐，必须在最外层加z-index才有用（应该是这样，再说网页代码可能还会随着网页的更新而改变，不太好弄。所以就这样凉了。

之后的方法是这个：

![](//imba97.cn/uploads/2018/08/switch_2.jpg)

把域名和这个网站对应元素的id或class放上

这样可以根据不同的域名找到不同的元素来进行操作

（现在B站直播页面不能用了，这个就是网页更新会出现的问题，刚才看了一下并不是id变了，而是元素的排序问题让z-index失效了。

接下来介绍一下程序的安装页面（也算一个小开发）

支持中日双语：

![](//imba97.cn/uploads/2018/08/switch_3.gif)

然后这个页面需要先“开灯”，算是呼应主题

![](//imba97.cn/uploads/2018/08/switch_4.gif)

emmm...

至于桌子中间那个，为什么要用这么一个图，首先说一下这里面所有东西都是自己随便画的（鼠绘）。符合本人个性，毕竟我做的页面、程序之类的基本都是以搞怪为主题的（并不是老司机。

![](//imba97.cn/uploads/2018/08/switch_5.jpg)

这是所有的图。可以很清楚的看到无码版的是个棕色皮肤人种的“蒜头鼻”。

有人就要问了，那为什么是棕色皮肤人种的“蒜头鼻”呀？这个原因很简单，因为棕色皮肤人种介于白色皮肤和黑色皮肤之间，而关灯程序恰恰就是在白色的网页跟黑色的网页之间转换（大部分网页是白底，关灯后就变黑了。

“蒜头鼻”是因鼻子头部皮下脂肪和纤维组织厚，鼻翼软骨增生等原因造成的，而关灯程序的原理是把一些代码增加到原有的网页中，就仿佛网页的皮下脂肪和纤维组织变厚、软骨增生一样，所以得此“蒜--头--鼻”。（滑稽

这个解释真的太完美了，我自己都信了<img src="https://s20.postimg.cc/dyhymox71/640_4.jpg" width="60" />

有理有据，让人信服

<img src="https://s20.postimg.cc/jmo9dl999/640_5.jpg" width="200" />

页面里的提示：

![](//imba97.cn/uploads/2018/08/switch_6.png)

以及，日语版

![](//imba97.cn/uploads/2018/08/switch_7.png)

设置及设置的提示：

![](//imba97.cn/uploads/2018/08/switch_8.jpg)

还有蒜头鼻：

![](//imba97.cn/uploads/2018/08/switch_9.png)

嗯。非常人性化的提示。（至于写的是啥视频里貌似能看到 2333

![](//imba97.cn/uploads/2018/08/switch_10.gif)

使用方法：

将这个打了码的棕色人种的蒜头鼻拖进收藏夹

![](//imba97.cn/uploads/2018/08/switch_11.gif)

设置：

设置可以通过两种方式

手动点击桌子上的设置按钮，这样的话是个空的设置，留空的话为默认原始设置（应该，我忘了

还可以通过直接点击你收藏夹的按钮，像这样：

![](//imba97.cn/uploads/2018/08/switch_12.gif)

会读取你之前的设置，如果版本不同会提示基于哪个版本，还会显示当前最新版本

下面是重新设置：

![](//imba97.cn/uploads/2018/08/switch_13.gif)

改了个名字和快捷键，设置好后再次把“蒜头鼻”拖进收藏夹就可以了。点击不同的按钮会获取按钮相应的设置

没什么用的：

可以说是程序reset，也可以叫彩弹

![](//imba97.cn/uploads/2018/08/switch_14.gif)

（不过公布出来就不叫彩弹了吧，就是点10下上面的灯，会掉下来，然后进入初始界面。

实际演示：

![](//imba97.cn/uploads/2018/08/switch_15.gif)

目前理论还支持B站、A站、优酷土豆、爱奇艺、微博、乐视、N站、油管（因为没试所以理论上支持。

[**开发视频**](https://www.bilibili.com/video/av18696545)了解一下
