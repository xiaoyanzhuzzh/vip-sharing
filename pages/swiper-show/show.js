// show.js
const AV = require('../../lib/av-weapp-min.js');
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
    VIPInfos: [],
    selectedCategory: "0",
    userInfo: {}
  },
  bindtap: function (e) {
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
          swiperHeight: (res.screenHeight - 37)
        });
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
    var membershipQuery = new AV.Query('Membership');
    membershipQuery.find().then(function (data) {
      that.setData({
        VIPInfos: data
      });
    });
    var currentIndex = that.data.categories.findIndex(function(category, index) {
      return options.category == category.name;
    });
    that.setData({
<<<<<<< HEAD:pages/swiper-show/show.js
      selectedCategory: currentIndex
    })
=======
      selectedCategory: currentIndex >= 0 ? currentIndex : 0
    });
  },
  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          swiperHeight: res.screenHeight
        });
      }
    });
  },
  bindtap: function (e) {
    this.setData({
      selectedCategory: e.currentTarget.id
    });
  },
  bindChange: function (e) {
    this.setData({
      selectedCategory: e.detail.current
    });
>>>>>>> ae6d0d7... m:pages/swiper-show/index.js
  }
});