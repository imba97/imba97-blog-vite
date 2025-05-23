---
id: 632
title: 懂王 👐
date: 2020-05-31 22:36:35
tags:
  - javascript
  - 懂王
categories:
  - javascript
---

今天起，你就是懂王 👐

<!--more-->

# 使用方法

**第一种方式**，直接把下面这个拖到收藏夹。然后在**任意页面**点击使用

<style>#code_a{display:block;width:200px;height:200px;line-height:30px;color:#FFF;-webkit-text-stroke:.8px #000;text-align:center;background: transparent url(//imba97.cn/uploads/2020/05/knowking.jpg) no-repeat scroll 0 0 / 100% auto;cursor:move;font-size:0;border:1px #000 solid;border-radius:5px;}#code_a::before{display:none;}#code_a::after{content:'拖到收藏夹';font-size:20px;font-weight:700;}#code_a:hover{text-decoration:none;color:#CCC;}</style>
<a id="code_a" alt="懂王👐" href="javascript:void(0);">懂王👐</a>

图片来自：[BV1hf4y127HD](https://www.bilibili.com/video/BV1hf4y127HD) 封面

**第二种方式**，复制以下`javascript`代码，在浏览器收藏夹右键->添加网页->起个名字->在网址里粘贴代码

<!-- eslint-disable -->
```javascript
javascript:if(typeof koe_knowking_clicked==='undefined'){var koe_knowking_clicked=true;if(typeof koe_knowking_get_select_text==='undefined'){function koe_knowking_get_select_text(){var resultText=window.getSelection().toString();if(selecter!=null&&koe_knowking_trim(selecter)!=""){resultText=selecter}else if(typeof document.selection!=='undefined'){var selecter=document.selection.createRange();var s=selecter.text;if(s!=null&&functionkoe_knowking_trim(s)!=""){resultText=s}}return resultText}function koe_knowking_trim(){return this.replace(/(^\s*)|(\s*$)/g,"")}}var koe_knowking_selected_text=koe_knowking_get_select_text();if(koe_knowking_selected_text!==''&&document.querySelector('#koe_knowking_audio')===null){if(typeof koe_knowking_msg==='undefined'){var koe_knowking_msg=document.createElement('p');koe_knowking_msg.setAttribute('style','position:fixed;top:0;left:0;padding:5px 10px;height:30px;line-height:30px;text-align:center;background-color:#000;color:#FFF;font-size:26px;z-index:99999999');document.body.appendChild(koe_knowking_msg)}else{koe_knowking_msg.style.display='block'}koe_knowking_msg.innerText='懂王祈祷中🙏';if(typeof koe_knowking_style==='undefined'){var koe_knowking_style=document.createElement('style');koe_knowking_style.innerText='.koe_knowking_content,.koe_knowking_image_1,.koe_knowking_image_2{ position: fixed; left: 50%; transform: translate(-50%,-50%); -webkit-transform: translate(-50%,-50%); -moz-transform: translate(-50%,-50%); z-index: 99999999; display: none; } .koe_knowking_content { top: calc(50% + 200px); padding: 10px; font-size: 20px; color: #FFF; background-color: #000; } .koe_knowking_image_1,.koe_knowking_image_2{ top: 50%; height: 200px; }';document.head.appendChild(koe_knowking_style);var koe_knowking_content=document.createElement('div');koe_knowking_content.setAttribute('class','koe_knowking_content');document.body.appendChild(koe_knowking_content);var koe_knowking_image_1=document.createElement('img');var koe_knowking_image_2=document.createElement('img');koe_knowking_image_1.setAttribute('src','https://pic.downk.cc/item/5ed520b8c2a9a83be55a3848.png');koe_knowking_image_2.setAttribute('src','https://pic.downk.cc/item/5ed520b8c2a9a83be55a3843.png');koe_knowking_image_1.setAttribute('class','koe_knowking_image_1');koe_knowking_image_2.setAttribute('class','koe_knowking_image_2');document.body.appendChild(koe_knowking_image_1);document.body.appendChild(koe_knowking_image_2);var koe_knowking_timer=null;var koe_knowking_is_1=true}var koe_knowking_xhr=new XMLHttpRequest();koe_knowking_xhr.open('GET','https://bili.imba97.cn/baike.php?kw='+koe_knowking_selected_text,true);koe_knowking_xhr.onreadystatechange=function(){if(koe_knowking_xhr.readyState==4&&koe_knowking_xhr.status==200||koe_knowking_xhr.status==304){var json=JSON.parse(koe_knowking_xhr.responseText);var audio_url='http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=没有人比我更懂，懂了个寂寞';if(json.status===1){audio_url='http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=没有人比我更懂'+koe_knowking_selected_text+'，'+json.content;var audio=document.createElement('audio');audio.setAttribute('id','koe_knowking_audio');audio.setAttribute('autoplay','');var source=document.createElement('source');source.setAttribute('src',audio_url);audio.appendChild(source);audio.addEventListener('canplaythrough',function(){koe_knowking_msg.style.display='none';koe_knowking_content.innerText=json.content;koe_knowking_content.style.display='block';koe_knowking_image_1.style.display='block';koe_knowking_timer=setInterval(function(){if(koe_knowking_is_1){koe_knowking_image_1.style.display='none';koe_knowking_image_2.style.display='block'}else{koe_knowking_image_1.style.display='block';koe_knowking_image_2.style.display='none'}koe_knowking_is_1=!koe_knowking_is_1},300)});audio.addEventListener('ended',function(){koe_knowking_clicked=undefined;document.body.removeChild(audio);koe_knowking_content.style.display='none';koe_knowking_image_1.style.display='none';koe_knowking_image_2.style.display='none';koe_knowking_is_1=true;clearInterval(koe_knowking_timer);koe_knowking_timer=null});document.body.appendChild(audio)}else{koe_knowking_msg.innerText=json.content}}};koe_knowking_xhr.send()}else{koe_knowking_clicked=undefined}}void(0);
```

第二种方式有可能会被浏览器自动删掉**最前面的**`javascript:`，粘贴上后检查一下，没有的话需要自己手动加一下

<script>make_js();</script>

# 服务端

这里需要PHP去获取百度百科的页面，目前是放在我服务器上的，如果到时候用的人多了我可能会停掉。

以下源码，可自行复制放在自己的服务器上，再把上面`javascript`中的`https://bili.imba97.cn/baike.php`改成你的。

```php
<?php

header('content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

function curlRequest($ipUrl) {

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $ipUrl);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.2) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13');
    $resultData = curl_exec($curl);
    curl_close($curl);

    return $resultData;

}

$kw = rawurlencode($_GET['kw']);

$data = curlRequest('https://baike.baidu.com/item/' . $kw);

$resultJsonArray = array(
    'status'  => 0,
    'content' => '无百科或其他错误'
);

preg_match_all('/百度百科错误页/', $data, $pregError);

if($pregError[0][0] !== NULL) {
    $resultJsonArray['status'] = 1;
    $resultJsonArray['content'] = '这个我是懂的，但我没有查到，这很可能是C国搞的鬼。';
    die(json_encode($resultJsonArray));
}

preg_match_all('/<meta name="description" content="(.*)"/', $data, $pregData);

if(isset($pregData) && $pregData[1][0] !== NULL) {
    $resultJsonArray['status']  = 1;
    $resultJsonArray['content'] = $pregData[1][0];
}

die(json_encode($resultJsonArray));
```
