const AV = require('../../lib/av-weapp-min.js');
var app = getApp();
Page({
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
    var membershipQuery = new AV.Query('Membership');
    membershipQuery.contains('shopName', this.data.currentShop);
    membershipQuery.find().then(function (results) {
      that.setData({
        vipResults: results.attributes
      })
    }, function (error) {
      console.log("search failed")
    });
  },
  searchByShopName: function (e) {
    var inputValue = e.detail.value;
    wx.navigateTo({
      url: `../search-results/index?shopName=${inputValue}`
    });
  }
});