Page({
  data: {
    categories: [
      {
        name: '服饰类',
        icon: 'clothes'
      },
      {
        name: '化妆品',
        icon: 'haircut'
      },
      {
        name: '餐饮',
        icon: 'food'
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
    VIPInfos: [
      {
        shopName: "Vero Moda",
        ownerName: "Zhihui.Zhang",
        vipNumber: "1234567890",
        vipCategory: "服饰类",
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
    ],
    selectedCategory: "0",
  },
  bindtap: function (e) {
    console.log(e)
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
          swiperHeight: (res.windowHeight - 37)
        });
      }
    })
  }
})