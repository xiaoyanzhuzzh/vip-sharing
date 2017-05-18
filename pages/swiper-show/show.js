var app = getApp();
Page({
  data: {
    categories: [
      {
        name: '餐饮',
        icon: 'food'
      },
      {
        name: '服饰',
        icon: 'clothes'
      },
      {
        name: '美容美发',
        icon: 'haircut'
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
      {
        wechatID: "hello",
        shopName: "大小",
        ownerName: "kaichao2",
        vipNumber: "121212",
        vipCategory: "餐饮"}
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
    // wx.request({
    //   url: 'https://reaio-membership.resi-product-staging.realestate.com.au/vip',
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (resp) {
    //     that.setData({
    //       VIPInfos: resp.data
    //     })
    //   }
    // })
  }
})