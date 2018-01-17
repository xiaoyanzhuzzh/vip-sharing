var app = getApp();
Page({
  data: {
    logos: [
      {
        image: '../../sources/images/food1.png',
        title: '餐饮美食卡'
      },
      {
        image: '../../sources/images/clothes1.png',
        title: '服装卡'
      },
      {
        image: '../../sources/images/car1.png',
        title: '爱车卡'
      },
      {
        image: '../../sources/images/hair.png',
        title: '美容美发卡'
      },
      {
        image: '../../sources/images/fun1.png',
        title: '生活娱乐卡'
      },
      {
        image: '../../sources/images/others1.png',
        title: '其他卡'
      }
    ]
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  navigateTo: function () {
    wx.navigateTo({
      url: '../swiper-show/show'
    });
  }
});
