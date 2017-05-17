<<<<<<< HEAD
// input.js
Page({
  data: {
    categories: [
      { name: "吃", id: 0 },
      { name: "喝", id: 1 },
      { name: "玩", id: 2 },
      { name: "乐", id: 3 }
    ],
    category:{name:'吃',id:0}
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      category: this.data.categories[val[0]]
    })
    console.log(this.data.category)
  },

  formSubmit: function (e) {
    const result = e.detail.value
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset: function () {
    console.log('form发生了reset事件')
  }
})
=======
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
      },
      {
        shopName: "屈臣氏",
        ownerName: "Min.Li",
        vipNumber: "12345678900",
        vipCategory: "化妆品",
      },
      {
        shopName: "大厨小馆",
        ownerName: "Min.Li",
        vipNumber: "12345678900",
        vipCategory: "餐饮",
      },
      {
        shopName: "滚石",
        ownerName: "Min.Li",
        vipNumber: "12345678900",
        vipCategory: "娱乐",
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
>>>>>>> Creating displaying VIP infos page.
