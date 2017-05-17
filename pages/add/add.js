// input.js
Page({
  data: {
    categories: [
      { name: "吃", id: 0 },
      { name: "喝", id: 1 },
      { name: "玩", id: 2 },
      { name: "乐", id: 3 }
    ],
    cardInfo: {
      category: { name: '吃', id: 0 },
      cardNumber: "",
      cardName: ""
    }
  },

  bindCardNumberInput: function (e) {
    this.setData({
      cardInfo: {
        cardNumber: e.detail.value
        }
    })
  },

  bindCardNameInput: function (e) {
    this.setData({
      cardInfo: {
        cardName: e.detail.value
      }
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

  formSubmit: function (e) {
    const result = e.detail.value
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset: function () {
    console.log('form发生了reset事件')
  }
})