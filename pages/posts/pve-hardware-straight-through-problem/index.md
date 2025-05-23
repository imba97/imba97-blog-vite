---
id: 777
title: PVE 硬件直通导致不能启动的问题
date: 2024-02-08 13:30:11
tags:
  - PVE
  - 虚拟机
  - 硬件直通
categories:
  - 瞎研究
---

# 回放

之前给公司电脑装了个 `PVE`，想把 USB 直通给虚拟机，摸索这设置了之后需要重启，再启动发现管理界面打不开、`SSH` 也连不上了

目测是配置导致的某些服务没法启动，网上资料很分散，零零碎碎试了一些，最后试出来了，赶紧存一下

# 解决

首先启动时，在这个页面选第二个

![](https://imba97.cn/uploads/2024/02/pve-1.jpg)

下一个页面，也选第二个

![](https://imba97.cn/uploads/2024/02/pve-2.jpg)

然后会提示输入 `root` 密码

![](https://imba97.cn/uploads/2024/02/pve-3.jpg)

登录进来后，先检查 `pve-cluster` 服务有没有启动，没启动的话启动一下

```bash
service pve-cluster start
```

![](https://imba97.cn/uploads/2024/02/pve-4.jpg)

启动后就可以找到虚拟机配置文件，需要记得虚拟机 ID，比如我这里是 100

编辑配置文件

```bash
vim /etc/pve/qemu-server/100.conf
```

![](https://imba97.cn/uploads/2024/02/pve-5.jpg)

可以看到我这里，第 5 行是我添加的硬件直通，删掉这行保存后重启

![](https://imba97.cn/uploads/2024/02/pve-6.jpg)

重启后又看到熟悉的界面，正常启动了

![](https://imba97.cn/uploads/2024/02/pve-7.jpg)

# 结尾

这个方法按理说可以解决大部分因为配置文件导致的不能启动的问题

只要命令行还能启动，就没啥大问题
