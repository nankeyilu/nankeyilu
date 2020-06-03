---
title: 举报、消息来源与可信度指数
date: 2020-06-03 16:00:00
isnews: false
noindex:
updated:
tags:
- 即时新闻
- 内容可信度
cover_img: https://cdn.nanke.suste.ch/img/2020/06/blog-credibility-index/banner.png
feature_img: https://cdn.nanke.suste.ch/img/2020/06/blog-credibility-index/banner.png
description:
summary: 为了平衡消息来源的匿名性与报道内容的真实性，我们为消息加上了“内容可信度指数”的标签。
ld_json_summary:
keywords:
- 南方科技大学
- 内容可信度
- 事实核查
author: 淳于妮可
categories:
- [广场]
- [Blog]
permalink: blog-credibility-index
uuid: 1b10186a-dbe9-4ae9-b90a-456470862875
---

您可能已经发现南科一路近期的新闻下多了一个标注“内容可信度指数”的标签。这是我们为了平衡消息来源的匿名性与报道内容的真实性而进行的一个尝试。

事情还要从一周前说起。在5月27日，我们发布了一篇题为[《大学大部分夏季学期课程将于线上进行》](/2020/05/27/sustech-may-arrange-most-summer-courses-online/)的新闻，后被“你科周末”和同学转发。当日傍晚，有同学在信息群反馈“网站被腾讯封禁了”。通过腾讯的[网址安全工具](https://urlsec.qq.com/)查询，其给出的理由是“含有大量未经证实的信息”。

![网址安全工具检测截图](https://cdn.nanke.suste.ch/img/2020/06/blog-credibility-index/tencent-urlsec.jpg)

我们对腾讯此种宽泛的封禁标准颇有微词。如果消息都需要经校方证实/证伪后才能出现在其他地方，只能做个跟屁虫，那还做什么新闻呢。再说，我们对消息的可靠程度有自己的把握，不会轻率地报道；撰文时也会在用词上对其进行提示，尽管效果可能不算好。然而，使用微信和QQ内置浏览器访问本站的用户占了快一半，我们显然得做点调整来迎合那里的用户习惯与言论环境。尽管这次腾讯的屏蔽莫名其妙地解除了，可要是下次又被好事者举报，结果如何就真说不好了。

这时，一个两难的问题出现了：由于众所周知的原因，向南科一路投稿的消息人士往往要求保持匿名，然而我们又需要通过某种途径提醒读者这些“匿名消息”之间的可信度其实参差不齐，并鼓励读者思考消息的真实性及合理性。

为此，我们引入了“内容可信度指数”标签。这条标签包含一个数字等级以及此等级对应可信度的简短描述。我们将“消息”分为五等：

### 1：流言

未能被交叉验证的传闻，这些传闻的可信度通常较低。

例子：A爆料了某位校内人士的丑闻，但未有其他人士持相同观点。

{% set c_index = "1" %}
{% include "credibility-index.swig" %}

### 2：传闻

“传闻”指在**“流言”**的基础上，出现了**不止一方对新闻的验证**。它通常在师生中有过一定规模的传播。

例子：[A爆料学工部老师运营一个公众号，B补充信息“这位老师请求学生帮忙传播该公众号的相关推送文章”](/2020/04/10/weekly-2020-15/#“南科周末”公众号疑似“复活”，继续推送文章)。

{% set c_index = "2" %}
{% include "credibility-index.swig" %}


### 3：小道消息

“小道消息”在**“传闻”**的基础上，出现了被南科一路判断为**可信**的证据。一般来说，被南科一路编辑团队验证真实性的图片、文档等都可以作为可信的证据。简而言之，小道消息是存在确切证据，但无法通过可信渠道确认的新闻。

例子：[一张不具名人士拍摄的，有关期末考试方案的图片。](/2020/05/07/sustech-may-announce-new-final-exam-arrangement/)

{% set c_index = "3" %}
{% include "credibility-index.swig" %}

### 4：可靠消息

“可靠消息”在**“小道消息”**的基础上，出现了**南科一路认为的可信人士提供的内容**，或是可被验证的内容。可被验证的内容一般是官方未有在公开渠道发布，但是南科一路可以从可信消息人士或是某些校内人士所做的“原创研究”中确认的消息。

例子：[一封向教职工发送的邮件，提到了暑期课程的举行时间](/2020/05/27/sustech-may-arrange-most-summer-courses-online/)；一个在校内广为人知的微信公众号[删除了曾经发布的文章](/2020/03/28/sustech-weekly-deletes-posts/)；南科一路[转载/转述一个在校内广为人知的公众号所报道的新闻](/2020/05/22/weekly-2020-21/#你科周末对近期投诉发表声明，后续评论将屏蔽部分关键词)。

{% set c_index = "4" %}
{% include "credibility-index.swig" %}

### 5：可信消息

“可信消息”指在**“可靠消息”**的基础上，出现了公开报道。这里的报道一般指可于公开互联网或常用媒体平台上验证的内容。南科一路在发布这一级别内容时会附上相关的网页链接或参考资料。

例子：[一间大学在其官方网站上公布了教学质量报告。](/2020/04/30/undergraduate-teaching-quality-report-published/)

{% set c_index = "5" %}
{% include "credibility-index.swig" %}

我们将在未来持续检讨并改进这一可信度评价系统。

同时，我们将持续拓展及接纳不同的消息来源。如果您有任何线索，欢迎发邮件至 [nankeyilu@protonmail.com](mailto:nankeyilu@protonmail.com)。您可以选择署名或匿名投稿。

## 附件：在文章中添加“内容可信度指数”标签

南科一路已经将相关模版放置在了 `view/credibility-index.swig` 中。

您可以通过在 `source/_post` 下的markdown文件中添加以下两行代码的方式进行调用。

```
{% set c_index = "5" %}
{% include "credibility-index.swig" %}
```
