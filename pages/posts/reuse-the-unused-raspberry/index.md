---
id: 783
title: 吃灰树莓派再就业
date: 2024-06-10 21:11:58
tags:
  - 树莓派
  - UPS
categories:
  - 瞎研究
---

# 简报

今天一看这个树莓派是 2019 年买的，折腾过内网穿透、远程开机、PHP 环境、Cloudreve 网盘，甚至还有一个 魔兽争霸3 服务器 <span icon i-solar-gamepad-bold-duotone bg-primary></span> PvPGN

以上本博客大部分都有过记录，有兴趣可以自行搜索一下

后面玩了 N1 盒子、All in One 小主机之后，树莓派就吃灰了

# 不间断电源

前几天无意间发现了树莓派 <span icon i-ri-battery-2-charge-fill bg-green></span> 不间断电源

虽然当时还没想到怎么玩，但我感觉一定能做点有意思的东西

于是把树莓派去壳，接上电源，让我极度舒适的是它可以用引脚供电，没有一根线

![](https://imba97.cn/uploads/2024/06/raspberrypi-1.jpg)

因为之前的散热风扇在壳上，去壳后没法固定，所以又入手了个风扇，还带灯

还挺好看的，风扇和灯有单独开关控制，所以也不用担心没接电的时候更费电

# 便携屏

这个应该是稚晖君开源的那个，以前直接买的现成的，是个屏同时也是个充电宝

可以在出问题，SSH 连不上的时候做一些简单的调试

![](https://imba97.cn/uploads/2024/06/raspberrypi-2.jpg)

# 瞎玩

装起来之后先搞了个 `1Panel` 试试水，很早就开始关注了，安装过一次，那时候还不太好用就弃了

期间经常看他们项目在维护，感觉差不多了，所以再试试，还不错

![](https://imba97.cn/uploads/2024/06/raspberrypi-3.jpg)

目前安装了一些服务，什么青龙面板、Web 服务之类的简单玩一玩

到目前还没体现出电源的优势，最多只是不用的时候放那边充电，想玩了随时拔了玩

说实话也挺爽，我的爽点在一根线也没有

# 设想

目前正在尝试一些想法 <span icon i-mage-light-bulb bg-yellow></span>

比如利用 `openvpn` 实现一个异地组网，出门在外只要树莓派连上 WIFI 就能访问家里的局域网

再配置一下端口转发，让树莓派同网段内的设备，不用通过任何 APP 也可以使用家里或其他地方的局域网

# 更远的设想

之后打算找远程工作，如果旅居办公的话，这就会是一个随身携带的算力

毕竟我能便携的工作电脑是个配置不高的 <span icon i-fluent-tablet-48-regular bg-primary></span> ARM 平板，虽然跑个前端项目绰绰有余，但能有个东西分担一下也不错

在上面装个 code-server，平板就可以直接打开 VSCode 远程

---

到时候真就可以出门只带手机、电脑、树莓派加一根 <span icon i-emojione-electric-plug></span> 电源线，就够了

最多带个上图的便携显示器，还能当个应急电源

# 访问一下

树莓派上随便搭了个 Web 服务，做了个内网穿透，如果我的派开着，你应该能访问到它

[https://pi.npc.imba97.com](https://pi.npc.imba97.com)
