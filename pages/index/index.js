//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '奔跑吧，我的会员卡',
    mottoSubtitle: 'VIP Sharing是一个免费分享各种会员账号微信小程序，我们不以营利为目的，分享、免费、互助是我们的服务宗旨。',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  addVIPInfo: function () {
    wx.navigateTo({
      url: '../add/add'
    })
  },

  showVIPInfo: function () {
    wx.navigateTo({
      url: '../show/show'
    })
  }
})
