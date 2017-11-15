### 微信组件化demo

### 第一种方式官方文档
https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1742780882&docid=34fde56e6ee55dac840952f4bf46cbfb

目前来看经过测试是存在坑的，对于版本上兼容不好，另外版本达标了显示不出来组件。目前不推荐

### 第二种方式 自己动手

#### 重点关注三个点,一个中心
先说一个中心，所谓组件化就是把一个组件加入到一个页面里面去，意思是要在这个页面中把组件的UI，样式，和js代码加入进来。如何加入，用import。
#### 三个点
xwml,表示组件的元素

```
<import src="../componts/Component.wxml" data="{{motto:'asdfasf'}}" />
```

wxss，组件的样式

```

@import "../componts/Component.wxss";


```

js， 组件的代码逻辑
这是最难的点，基于中心思想，要把单独给组件写的逻辑拷贝到页面中，组件的属性也拷贝到页面中来
