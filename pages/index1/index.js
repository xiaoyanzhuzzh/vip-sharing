var app = getApp()
Page({
  data: {
    motto: '奔跑吧，我的会员卡',
    mottoSubtitle: 'VIP Sharing是一个免费分享各种会员账号微信小程序，我们不以营利为目的，分享、免费、互助是我们的服务宗旨。',
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function(userInfo){
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
      url: '../swiper-show/show'
    })
  },
  goToNewIndex: function() {
    wx.navigateTo({
      url: '../new-index/new-index',
    })
  }
})
