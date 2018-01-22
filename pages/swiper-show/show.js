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
    console.log(e);
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
    console.log(options, 'options')
    that.setData({
      selectedCategory: options.category
    })
  }
});