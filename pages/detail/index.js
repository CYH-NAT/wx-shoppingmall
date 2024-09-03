// pages/detail/index.js
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');

Page({

  /**
   * 頁面的初始數據
   */
  data: {
    partData: {
      "id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9",
      "loopImgUrl":[
          "/image/classify/phone.png",
          "/image/classify/miphone.png",
          "/image/classify/huawei.png"
      ],
      "title":"榮耀8X Max 7.12吋90%螢幕佔比珍珠 4GB+64GB 魅海藍 4G全屏手機 雙卡雙待",
      "price":"1499.00",
      "count":1 //選擇的數量
  },
    baitiao: [
      {
          "desc":"不分期",
          "tip":"先用後付，0服務費",
          "select":true
      },
      {
          "desc":"3期 x 1522.16元起",
          "tip":"含手續費，每期22.50元起，費率0.5%起",
          "select":false
      },
      {
          "desc":"6期 x 772.35元起",
          "tip":"含手續費，每期22.50元起，費率0.5%起",
          "select":false
      },
      {
          "desc":"12期 x 397.38元起",
          "tip":"含手續費，每期22.50元起，費率0.5%起",
          "select":false
      },
      {
          "desc":"24期 x 209.92元起",
          "tip":"含手續費，每期22.50元起，費率0.5%起",
          "select":false
      }
  ],
    baitiaoSelectItem: {
      desc: "【白條支付】首單享立減優惠"
    },
    hideBaitiao: true, // 是否隐藏白条的遮罩
    hideBuy: true, // 是否购买的遮罩
    badgeCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    const self = this
    // 发送接口请求
    // wx.showLoading({
    //   title: '加载中...',
    // })
    wx.request({
      url: interfaces.productionDetail,
      success(res) {
        let result = null
        res.data.forEach(data => {
          if (data.partData.id == id)
            result = data
        })

        self.setData({
          partData: result.partData,
          baitiao: result.baitiao
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const self = this
    wx.getStorage({
      key: 'cartInfo',
      success: function (res) {
        const cartArray = res.data
        self.setBadge(cartArray)
      },
    })
  },
  /**
   * 显示白条弹框
   */
  popBaitiaoView: function () {
    this.setData({
      hideBaitiao: false
    })
  },
  /**
   * 显示商品弹框
   */
  popBuyView: function () {
    this.setData({
      hideBuy: false
    })
  },
  updateSelectItem(e){ // 更新data
    this.setData({
      baitiaoSelectItem: e.detail
    })
    //這邊這個e是子組件觸發的自定義事件，觸發時一併帶來的參數被在e.detail裡面
    console.log(e)
  },
  updateCount(e){ // 更新count
    var partData = this.data.partData
    partData.count = e.detail.val
    this.setData({
      partData: partData
    })
  },
  /**
   * 加入购物车
   */
  addCart() {
    var self = this
    wx.getStorage({
      key: 'cartInfo',
      success(res) {
        const cartArray = res.data
        let partData = self.data.partData
        let isExit = false; // 判断数组是否存在该商品
        cartArray.forEach(cart => {
          if (cart.id == partData.id) { // 存在该商品
            isExit = true
            cart.total += self.data.partData.count
            wx.setStorage({
              key: 'cartInfo',
              data: cartArray,
            })
          }
        })
        if (!isExit) { // 不存在该商品
          partData.total = self.data.partData.count
          cartArray.push(partData)
          wx.setStorage({
            key: 'cartInfo',
            data: cartArray,
          })
        }
        self.setBadge(cartArray)
      },
      fail() {
        let partData = self.data.partData
        partData.total = self.data.partData.count
        let cartArray = []
        cartArray.push(partData)
        wx.setStorage({
          key: 'cartInfo',
          data: cartArray,
        })
        self.setBadge(cartArray)
      }
    })
    // 购物车提醒
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 3000
    })
  },
  /**
   * 设置购物车图标
  */
  setBadge(cartArray) {
    this.setData({
      badgeCount: cartArray.length
    })
  },
  /**
   * 显示购物车
   */
  showCartView: function () {
    wx.switchTab({
      url: '/pages/cart/index'
    })
  }
})