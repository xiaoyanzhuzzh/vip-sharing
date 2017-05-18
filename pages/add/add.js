// input.js
var app = getApp()
Page({
  data: {
    categories: [
      { name: "吃", id: 0 },
      { name: "喝", id: 1 },
      { name: "玩", id: 2 },
      { name: "乐", id: 3 }
    ],
    category:{name:"吃",id:0},
    userInfo: {}
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  bindChange: function (e) {
    const val = e.detail.value

    this.setData({
      cardInfo: {
        category: this.data.categories[val[0]]
      }
    })
    console.log(this.data.cardInfo.category)
  },

  formSubmit: function (e) {
    const result = e.detail.value
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  formReset: function () {
    console.log('form发生了reset事件')
  }
})