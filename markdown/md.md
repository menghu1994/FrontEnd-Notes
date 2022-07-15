# Markdown

> Markdown是用来记录代码，整理笔记，文稿的一种纯文本标记语言
> 一个 Web 上使用的文本到HTML的转换工具
> 👍 无论是在本地，还是csdn,掘金,github,gist中都支持，很强
> 一般项目中都会存在`README.md`文件用来介绍项目内容

## 使用方法

### 网页在线编辑工具

- <https://www.zybuluo.com/mdeditor>
- <https://dillinger.io/>

### 🖥客户端

- 新建文本文档,将后缀名.txt改为.md,以笔记本或其他代码编辑器方式打开。（sublime，vs等都有相关语法插件）
- vs code 中的插件
  - `markdownlint` 语法格式化插件,右键`formatt document with...`选择 `markdownlint`
  - `Markdown Preview Enhanced` 预览插件,快捷键`ctrl + shift + v`

### 客户端下载使用

- <http://www.markdownpad.com/>

## 语法教程

#### 标题

大小(`#`开头然后输入标题)

```md
# h1标题
## h2标题
### h3标题
### h4标题
```

![](https://img2018.cnblogs.com/blog/1284494/202001/1284494-20200115172036218-340662463.jpg)

#### 无序列表

(`-`开头然后输入列表内容“`-`可换成`+`或者`*`”)

```md
 - 列表内容
 - 列表内容
 - 列表内容
```

#### 有序列表

(`1.`数字加句号点)

```md
 1. 列表内容
 2. 列表内容
 3. 列表内容
```

![](https://img2018.cnblogs.com/blog/1284494/202001/1284494-20200115172153709-1310479056.jpg)

#### 区块引用

(`>`开头然后输入内容，可嵌套)

```md
> This is a blockquote with two paragraphs. 
>> 嵌套内容(回车换行)
> Donec sit amet nisl. 
```

![](https://img2018.cnblogs.com/blog/1284494/202001/1284494-20200115172421760-1054509691.jpg)

#### 分割线

(超过三个`*`或者`-`并前后回车换行)

```md
***
---
```

#### 链接

(其中标题可以不写)

```md
1. 这是[百度](https://www.baidu.com/ "标题")的超链接。

2. 这是[百度][id]参考样式链接。
[id]: http://www.baidu.com/  "标题"   (写在文章末尾，类似论文参考文献)

3. I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
```

![](https://img2018.cnblogs.com/blog/1284494/202001/1284494-20200115172611741-1587339776.jpg)

#### 强调

（`*`可以换成`_`,中间不能加空格）

```md
*斜体*
**加粗**
***斜体加粗***
~~删除线~~
```

#### 代码引用

(多行代码引用将`换成```)

```md
`function a(){}`单行代码引用
```

![](https://img2018.cnblogs.com/blog/1284494/202001/1284494-20200115172718622-1753115083.jpg)

#### 插入图片

(第二种方式可以控制宽高)

```md
![百度](https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white-c4d7df0a00.png "标题")

<img src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white-c4d7df0a00.png" width="200">
```

#### 其他

还有一些表格，流程图和幻灯片等等可以查看以下第三项`Markdown Preview Enhanced`教程

## 网络教程

1. [GitHub教程](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#headings)
2. [官方教程](http://www.markdown.cn/)
3. [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/markdown-basics)