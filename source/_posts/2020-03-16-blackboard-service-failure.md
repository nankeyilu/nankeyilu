---
title: 大学Blackboard系统出现故障，服务中断约72小时，严重影响线上教学
date: 2020-03-16 20:00:00
isnews: true
updated:
tags:
- 即时新闻
- 线上教学
- Blackboard
- 故障
cover_img: https://cdn.nanke.suste.ch/img/2020/03/blackboard-failure-scale-update2.png
feature_img: https://cdn.nanke.suste.ch/img/2020/03/blackboard-failure-scale-update2.png
description:
summary: 2020年3月16日上午十时许，大学的Blackboard系统出现故障。
keywords:
- 南方科技大学
- 线上教学
- 故障
- Blackboard
author: 淳于妮可
categories:
- 即时新闻
permalink: blackboard-service-failure
uuid: a325f4fe-82ee-4c5a-8d86-2e09ad0bef3c
---
2020年3月16日上午十时许，大学的Blackboard系统出现故障。依据同学们在信息群和信息中心反馈，登陆blackboard系统时会返回包括但不限于网页服务器的503错误，浏览器的TOO_MANY_REDIRECTS错误和blackboard系统的错误警告。

![Blackboard系统网页返回508错误](https://cdn.nanke.suste.ch/img/2020/03/blackboard-failure-508-scale.jpg)

跟据信息中心老师的反馈，本次故障的原因或为运行Blackboard系统的部分服务器出现了故障。

Blackboard系统是南方科技大学目前使用的线上教学系统之一，也是在远程教学期间学校推荐的教学系统。大学大部分课程均使用Blackboard系统分发课件，教学视频。提交作业和举行测验。

截至发稿时（3月16日18时），Blackboard系统仍未恢复正常。

## 3月17日更新

截至3月17日23时，Blackboard系统仍未恢复。一张流传于信息群的聊天截图显示，Blackboard系统故障的原因或为“访问量过大，IO无法满足需求，导致出现性能抖动”。

教学工作部则在3月17日上午发出一则[通知](https://tao.sustc.edu.cn/article/view/id-200.html)，提到当天本科教务系统将会停止服务一天。教学工作部还在稍后发出另一则[通知](https://tao.sustc.edu.cn/article/view/id-201.html)，指“由于数据库服务器故障，Blackboard教学平台即日起暂停服务，恢复服务的时间将另行通知。”

有同学在信息中心交流群发起投票，投票内容为预测Blackboard系统何时能够恢复。44位投票的同学中，有33位选择了“bb(Blackboard)没了，用Sakai吧”。在Telegram频道“南科大今天完了吗”中举办的[投票](https://t.me/SUSTechGG/1802)上，则有72%的投票者选择了“都挂了再挂两天也不是不行”。

有同学还在信息中心交流群建议，学校应该向教师推广多个教学平台，以防出再次现单点故障。还有同学推荐信息中心将教学系统上云并容器化，以方便在遇到性能瓶颈时快速扩容。

## 3月19日更新

经过近72小时的维修，blackboard系统于3月19日上午12时左右恢复正常运行。

有同学于3月18日询问学校系统的故障原因，教学工作部老师在邮件中回复称，本次事故是由于存放Blackboard数据的[3par](https://www.hpe.com/us/en/storage/3par.html)存储系统故障所致。他还在回复中说：“因访问量过大，一个卷的IO无法满足所有虚拟机的需求，出现性能抖动。昨晚（3月17日）恢复了bb，但硬件问题没有完全搞定，今天找了硬件厂家最牛的工程师过来。”

{% set c_index = "5" %}
{% include "credibility-index.swig" %}

(封面图/出现错误的的Blackboard界面/素材取自校园信息交流群)
