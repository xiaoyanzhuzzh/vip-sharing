// input.js
var app = getApp()
Page({
  data: {
    categories: [
      { name: "餐饮", id: 0 },
      { name: "服饰", id: 1 },
      { name: "美容美发", id: 2 },
      { name: "娱乐", id: 3 },
      { name: "爱车", id: 4 },
      { name: "其它", id: 5 },
    ],
    category: { name: "餐饮", id: 0 },
    userInfo: {},
    isFocus: [false, false, false],
    index:0,
    canSubmit:true
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onShow: function (){
    this.setData({
      canSubmit:true
    })
  },

  bindChange: function (e) {
    const val = e.detail.value

    this.setData({
      cardInfo: {
        category: this.data.categories[val[0]]
      }
    })
    console.log(this.data.cardInfo.category)
  },

 handleError: function(e) {
   app.showError('添加失败');
   this.setData({
     canSubmit: true
   })
 },

  formSubmit: function (e) {
    const result = e.detail.value
    if (e.detail.value.shopName == '') {
      this.setData({
        isFocus: [true, false, false]
      }
      )
      return
    }
    if (e.detail.value.ownerName == '') {
      this.setData({
        isFocus: [false, true, false]
      }
      )
      return
    }
    if (e.detail.value.vipNumber == '') {
      this.setData({
        isFocus: [false, false, true]
      }
      )
      return
    }
    console.log('form发生了submit事件，携带数据为：', result)
    this.setData({
      canSubmit:false
    })
    var that = this;
    wx.request({
      method: 'POST',
      url: 'https://reaio-membership.resi-product-staging.realestate.com.au/vip',
      data: {
        wechatID:'',
        shopName:result.shopName,
        ownerName:result.ownerName,
        vipNumber:result.vipNumber,
        vipCategory: this.data.categories[result.vipCategory].name
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if(res.statusCode == 200){
          wx.navigateTo({
            url: '../swiper-show/show'
          })
        }else{
          that.handleError(res);
        }
      },
      fail: function (res) {
       that.handleError(res);
      }
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})