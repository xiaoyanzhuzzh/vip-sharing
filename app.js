//app.js
const AV = require('./lib/av-weapp-min.js');
AV.init({
  appId: 'U8kFqwuG4X92FA2qU0OY9PLH-gzGzoHsz',
  appKey: 'xHUxzN6xsFWRswP8wK24fjJL',
});

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  showError: function (message) {
    wx.showToast(
      {
        title: '添加失败',
        image: '/sources/images/error.png',
        duration: 2000
      }
    )
  }
})