var app = getApp();
Page({
  data: {
    logos: [
      {
        image: '../../sources/images/food1.png',
        title: '餐饮美食卡',
        name: '餐饮', 
      },
      {
        image: '../../sources/images/clothes1.png',
        title: '服饰卡',
        name: '服饰'
      },
      {
        image: '../../sources/images/car1.png',
        title: '爱车卡',
        name: '爱车'
      },
      {
        image: '../../sources/images/hair.png',
        title: '美容美发卡',
        name: '美容美发'
      },
      {
        image: '../../sources/images/fun1.png',
        title: '生活娱乐卡',
        name: '娱乐'
      },
      {
        image: '../../sources/images/others1.png',
        title: '其它卡',
        name: '其它'
      }
    ]
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          shareImageWidth: (res.windowWidth - 15),
          shareImageHeight: (res.windowHeight - 464)
        });
      }
    });
  },
  searchByShopName: function (e) {
    var inputValue = e.detail.value;
    wx.navigateTo({
      url: `../search-results/index?shopName=${inputValue}`
    });
  }
});
