---
id: 379
title: 阿里云服务器内网穿透的坑
date: 2019-08-12 17:35:35
tags:
  - 内网穿透
  - 阿里云
categories:
  - 瞎研究
---

这篇文章主要不是说内网穿透的，而是说一下用阿里云服务器做内网穿透的注意事项

<!--more-->

首先是需要配置这个“安全组配置”，把需要用到的端口都配置一下，这个网上不少教程

![](//imba97.cn/uploads/2019/08/0b4584c3292271b9c120b5fe5bb628e6.png)

但如果没成功，你还需要把防火墙端口打开，比如把`23333`端口打开

```bash
# 开启端口
firewall-cmd --zone=public --add-port=23333/tcp --permanent
# 重启防火墙
systemctl restart firewalld
```

本来我以为安全组配置是跟防火墙同步的，后来发现并不是，所以得手动开一下
