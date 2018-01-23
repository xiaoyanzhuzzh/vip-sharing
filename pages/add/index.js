const AV = require('../../lib/av-weapp-min.js');
var app = getApp();
Page({
  data: {
    categories: [
      { name: "餐饮", id: 0 },
      { name: "服饰", id: 1 },
      { name: "美容美发", id: 2 },
      { name: "娱乐", id: 3 },
      { name: "爱车", id: 4 },
      { name: "其它", id: 5 }
    ],
    category: { name: "餐饮", id: 0 },
    userInfo: {},
    isFocus: [false, false, false],
    index: 0,
    canSubmit: true
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
          formWidth: (res.windowWidth - 15)
        });
      }
    });
  },
  onShow: function (){
    this.setData({
      canSubmit:true
    })
  },
  bindChange: function (e) {
    const val = e.detail.value;
    this.setData({
      cardInfo: {
        category: this.data.categories[val[0]]
      }
    });
    console.log(this.data.cardInfo.category)
  },
  handleError: function(e) {
    app.showError('添加失败');
    this.setData({
      canSubmit: true
    });
  },
  formSubmit: function (e) {
    const result = e.detail.value;
    if (e.detail.value.shopName == '') {
      this.setData({
        isFocus: [true, false, false]
      });
      return;
    }
    if (e.detail.value.ownerName == '') {
      this.setData({
        isFocus: [false, true, false]
      });
      return;
    }
    if (e.detail.value.vipNumber == '') {
      this.setData({
        isFocus: [false, false, true]
      });
      return;
    }
    console.log('form发生了submit事件，携带数据为：', result);
    this.setData({
      canSubmit:false
    });
    var that = this;
    var Membership = AV.Object.extend('Membership');
    var membershipData = new Membership();
    membershipData.set('wechatID', '');
    membershipData.set('shopName', result.shopName);
    membershipData.set('ownerName', result.ownerName);
    membershipData.set('vipNumber', result.vipNumber);
    membershipData.set('vipCategory', this.data.categories[result.vipCategory].name);
    membershipData.save().then(function (data) {
      console.log('成功' + data);
      that.setData({
        canSubmit: false
      });
      wx.navigateTo({
        url: '../swiper-show/index'
      });
    }, function (error) {
      console.log('失败' + error);
    });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value
    })
  }
});