---
id: 397
title: Objective-C 笔记 - GCD
date: 2019-08-14 19:59:16
tags:
  - GCD
  - 同步
  - 异步
  - Objective-C
categories:
  - 笔记
---

全称是Grand Central Dispatch，🐮🍺的中枢调度器，纯C语言，提供非常多强大的函数。

<!--more-->

```objective-c
- (void)viewDidLoad {
  [super viewDidLoad];
  [self gcdDemo1];
}

// 同步执行方法，这里不执行完就不会执行下一个任务
- (void)gcdDemo1 {
  // 创建队列
  dispatch_queue_t q = dispatch_get_global_queue(0, 0);

  // 定义任务 block
  void(^task)() = ^{
    NSLog(@"%@", [NSThread currentThread]);
  };
  // 添加任务到队列并执行
  dispatch_sync(q, task);
}
```

也可以直接写成

```objective-c
dispatch_sync(q, ^{
  NSLog(@"biu");
});
```

异步执行，不同等待，执行下一个任务具备开启线程的能力，异步通常是多线程的代名词

```objective-c
- (void)gcdDemo2 {
  dispatch_queue_t q = dispatch_get_global_queue(0, 0);
  void(^task)() = ^{
    NSLog(@"%@", [NSThread currentThread]);
  };
  dispatch_async(q, task);
}
```

```objective-c
- (void)gcdDemo3 {
  dispatch_async(dispatch_get_global_queue(0, 0), ^{
    NSLog(@"%@", [NSThread currentThread]);
      // 更新UI
      dispatch_async(dispatch_get_main_queue(0, 0), ^{
        NSLog(@"更新UI%@", [NSThread currentThread]);
      });
  });
}
```

## 串行并行、同步异步

![](//imba97.cn/uploads/2019/08/656540a5c2173889a1dc174369f389bc.png)

创建串行队列

```objective-c
dispatch_queue_t q = dispatch_queue_create("name", DISPATCH_QUEUE_SERIAL);
// 因为 DISPATCH_QUEUE_SERIAL == NULL 所以可以直接设为NULL
dispatch_queue_t q = dispatch_queue_create("name", NULL);
```

创建并发队列

```objective-c
dispatch_queue_t q = dispatch_queue_create("name", DISPATCH_QUEUE_CONCURRENT);
```

同步任务一旦开始执行，即使后面是异步任务，也不会执行异步任务，而是等同步任务执行完后再执行

异步任务中的同步任务，会在当前异步的线程中队列执行，而异步任务则还是会再开线程或被分配到闲置线程

```objective-c
- (void)gcdDemo4 {
  dispatch_queue_t q = dispatch_queue_create("name", DISPATCH_QUEUE_CONCURRENT);
  void (^task)() = ^{
    // 假设这段代码输出 3 线程
    NSLog(@"%@", [NSThread currentThread]);
    // 那么下面同步任务中会等待 3 线程执行完后，再执行这个任务中的代码，也会输出 3 线程
    dispatch_sync(q, ^{
      NSLog(@"%@", [NSThread currentThread]);
    });
  };
  // 把task添加到q队列
  dispatch_async(q, task);
}
```

## 全局队列

本质上是并发队列，会开启线程，不会顺序执行。与并发队列不同的是有固定队列名，MRC下并发队列需要手动释放内存，全局队列不需要。但现在因为是ARC自动管理内存，所以都不需要手动释放内存。

```objective-c
dispaych_queue_t g = dispatch_get_global_queue(0, 0);
```

- 参数 1

涉及到系统适配

```objective-c
// iOS 8 服务质量
QOS_CLASS_USER_INTERACTIVE // 用户交互（希望线程快速被执行，不要用耗时操作）
QOS_CLASS_USER_INITIATED   // 用户需要（不要用耗时操作）
QOS_CLASS_DEFAULT          // 默认的（给系统重置队列）
QOS_CLASS_UTILITY          // 实用工具（做耗时操作）
QOS_CLASS_BACKGROUND       // 后台执行
QOS_CLASS_UNSPECIFIED      // 没有指定优先级

// iOS 7 调度的优先级
DISPATCH_QUEUE_PRIORITY_HIGH       // 高优先级
DISPATCH_QUEUE_PRIORITY_DEFAULT    // 默认优先级
DISPATCH_QUEUE_PRIORITY_LOW        // 低优先级
DISPATCH_QUEUE_PRIORITY_BACKGROUND // 后台优先级
```

- 参数 2

为未来使用的一个保留，现在始终是 0

## GCD延迟执行

异步任务，经过一定的时间后，使用指定线程，执行代码块的任务

```objective-c
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
  NSLog(@"%@", [NSThread currentThread]);
});
```

- 参数 1

等待时间，`DISPATCH_TIME_NOW`开始，等待 1.0 秒（后面参数是毫秒）

```objective-c
dispatch_time_t time = dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.0 * NSEC_PER_SEC));
```

- 参数 2

指定线程

- 参数 3

代码块

## 执行一次

不仅能保证只执行一次，而且是线程安全

```objective-c
static dispatch_once_t onceToken;
dispatch_once(&onceToken, ^{
  NSLog(@"%@", [NSThread currentThread]);
});
```

## 调度组

组队列可以把多个队列放进组，可以做到等待所有组内队列执行完毕后再执行一些动作

```objective-c
// 队列
dispatch_queue_t q = dispatch_get_global_queue(0, 0);
// 调度组
dispatch_group_t g = dispatch_group_create();
// 添加任务
dispatch_group_async(g, q, ^{
  NSLog(@"任务一完成");
});
dispatch_group_async(g, q, ^{
  NSLog(@"任务二完成");
});
dispatch_group_async(g, q, ^{
  NSLog(@"任务三完成");
});
// 所有任务完成后执行的动作 传入 组、使用的线程、代码块
dispatch_group_notify(g, dispatch_get_main_queue(), ^{
  NSLog(@"所有任务执行完毕");
});
```
