//logs.js
const util = require('../../utils/util.js')
import { LoadComponent } from '../componts/Component'

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    LoadComponent()
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
