# 南科一路|在这里，读懂南科

这里是《南科一路》网页的源代码，它使用hexo进行构建，并被托管于Netlify上。更多关于本网站的信息，请查看[这里](https://nanke.suste.ch/about/)

欢迎各种稿件，如果您想投稿，烦请您将稿件发送至 nankeyilu<在>protonmail.com 。平时学业繁忙，回复可能不及时，但会定期查看。

我会尽力使本站的新闻报道准确、客观。如果您有任何问题、意见或是建议，欢迎在GitHub提出您的Issue，或者通过上面的邮箱联系我。

## 如何部署

Create folder `mkdir site && cd site`

Clone repository `git clone https://github.com/nankeyilu/nankeyilu.git --recurse-submodules`

`cd nankeyilu`

Install hexo-cli `npm install hexo-cli -g`

Install packages `npm install`

Generate static site and preview locally `hexo g && hexo s`
