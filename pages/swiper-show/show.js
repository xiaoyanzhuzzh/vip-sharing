var app = getApp();
Page({
  data: {
    categories: [
      {
        name: '服饰类',
        icon: 'clothes'
      },
      {
        name: '化妆品',
        icon: 'haircut'
      },
      {
        name: '餐饮',
        icon: 'food'
      },
      {
        name: '娱乐',
        icon: 'fun'
      },
      {
        name: '爱车',
        icon: 'car'
      },
      {
        name: '其它',
        icon: 'others'
      },
    ],
    VIPInfos: [
    ],
    selectedCategory: "0",
    userInfo: {}
  },
  bindtap: function (e) {
    console.log(e)
    this.setData({
      selectedCategory: e.currentTarget.id
    });
  },
  bindChange: function (e) {
    this.setData({
      selectedCategory: e.detail.current
    })
  },
  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          swiperHeight: (res.windowHeight - 37)
        });
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
    wx.request({
      url: 'http://localhost:8080/vipinfos',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (resp) {
        console.log('---------------')
        console.log(resp)
        that.setData({
          VIPInfos: resp.data
        })
      }
    })
  }
})