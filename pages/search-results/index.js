const AV = require('../../lib/av-weapp-min.js');
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo,
        currentShop: options.shopName
      })
    });
  },
  onShow: function () {
    var that = this;
    var membershipQuery = new AV.Query('Membership');
    membershipQuery.contains('shopName', this.data.currentShop);
    membershipQuery.find().then(function (results) {
      var attributes = results.map(function (result) {
        return result.attributes;
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