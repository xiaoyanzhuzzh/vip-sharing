const AV = require('../../lib/av-weapp-min.js');
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    "餐饮": '../../sources/images/food1.png',
    "服饰": '../../sources/images/clothes1.png',
    "娱乐": '../../sources/images/fun1.png',
    "爱车": '../../sources/images/car1.png',
    "美容美发": '../../sources/images/hair.png',
    "其他": '../../sources/images/others1.png'
  },
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo,
        currentShop: options.shopName
      })
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          swiperHeight: (res.windowHeight - 288)
        });
      }
    });
  },
  onShow: function () {
    var that = this;
    var membershipQuery = new AV.Query('Membership');
    membershipQuery.contains('shopName', this.data.currentShop);
    membershipQuery.find().then(function (results) {
      var attributes = results.map(function (result) {
        var vipInfo = result.attributes;
        vipInfo.image = that.data[vipInfo.vipCategory];
        return vipInfo;
      });
      that.setData({
        vipResults: attributes
      })
    }, function (error) {
      console.log("search failed:" + error)
    });
  },
  searchByShopName: function (e) {
    var inputValue = e.detail.value;
    wx.navigateTo({
      url: `../search-results/index?shopName=${inputValue}`
    });
  }
});