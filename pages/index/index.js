//index.js
//获取应用实例

import { LoadComponent} from '../componts/Component'

const app = getApp()

Page({
  data: { 
    __comp__:{},
    motto: 'Hello 00000  World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }, 
  onLoad: function () { 
    LoadComponent()

    console.log(this.data.__comp__)
  },
  
})
