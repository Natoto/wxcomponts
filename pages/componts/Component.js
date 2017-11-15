
let Component2 = {
  options: {
    "multipleSlots": true, // 在组件定义时的选项中启用多slot支持
    "name":'马师傅马师傅',
    "age":54,
  },
  properties: { 
    name: "asfaslf asflas fsafl ",
  },
  methods: { 
      changeText:function(){
        console.log('click me');
        this.data.__comp__.age +=1;
        this.setData({__comp__:this.data.__comp__})
      }
  },    
}

function LoadComponent(){
 
    // 拿到当前页面对象
    let pages = getCurrentPages()
    let curPage = pages[pages.length - 1]

    // 把组件的事件“合并到”页面对象上
    // Object.assign(curPage, _compEvent)
    // Object.assign(curPage, Component.options)
    // this.__page = curPage
    // 附加到page上，方便访问

    //Object.assign(Component2.properties, Component2.options)

    Object.assign(curPage, Component2.methods)
    
    //curPage.data.__comp__ = Component2; 
    // 把组件的数据“注入”到页面的data对象中
    //curPage.setData(Component2.options);

    curPage.setData({ __comp__: Component2.options});

    console.log(curPage.data.__comp__)
    return this;
}

module.exports = { 
  LoadComponent
};
