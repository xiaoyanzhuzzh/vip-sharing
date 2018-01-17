var app = getApp();
Page({
  data: {
    motto: '奔跑吧，我的会员卡',
    mottoSubtitle: 'VIP Sharing是一个免费分享各种会员账号微信小程序，我们不以营利为目的，分享、免费、互助是我们的服务宗旨。',
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
    console.log('onLoad');
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  addVIPInfo: function () {
    wx.navigateTo({
      url: '../add/add'
    })
  },

  showVIPInfo: function () {
    wx.navigateTo({
      url: '../swiper-show/show'
    })
  }
});
