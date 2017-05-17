var app = getApp()
Page({
  data: {
    userInfo: {},
    VIPInfos: [
      {
        shopName: "Vero Moda",
        ownerName: "Zhihui.Zhang",
        vipNumber: "1234567890",
        vipCategory: "服饰",
        icon: 'clothes'
      },
      {
        shopName: "屈臣氏",
        ownerName: "Min.Li",
        vipNumber: "12345678900",
        vipCategory: "化妆品",
        icon: 'haircut'
      },
      {
        shopName: "大厨小馆",
        ownerName: "Min.Li",
        vipNumber: "12345678900",
        vipCategory: "餐饮",
        icon: 'food'
      },
      {
        shopName: "滚石",
        ownerName: "Min.Li",
        vipNumber: "12345678900",
        vipCategory: "娱乐",
        icon: 'fun'
      }
    ]
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
