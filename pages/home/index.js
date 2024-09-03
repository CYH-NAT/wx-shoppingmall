// pages/home/index.js

// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [{
      "image": "/image/jd1.jpg"
    }, {
      "image": "/image/jd2.jpg"
    }, {
      "image": "/image/jd3.jpg"
    }, {
      "image": "/image/jd4.jpg"
    }, {
      "image": "/image/jd5.jpg"
    }],
    logos: [{
      "image": "/image/logo1.png",
      "title": "京東超市"
    }, {
      "image": "/image/logo2.png",
      "title": "全球購"
    }, {
      "image": "/image/logo3.png",
      "title": "服裝城"
    }, {
      "image": "/image/logo4.png",
      "title": "京東生鮮"
    }, {
      "image": "/image/logo5.png",
      "title": "京東到家"
    }, {
      "image": "/image/logo6.png",
      "title": "充值中心"
    }, {
      "image": "/image/logo7.png",
      "title": "京東金融"
    }, {
      "image": "/image/logo8.png",
      "title": "物流查詢"
    }, {
      "image": "/image/logo9.png",
      "title": "領券"
    }, {
      "image": "/image/logo10.png",
      "title": "我的關注"
    }],
    quicks: [{
      "image": "/image/quick1.jpg",
      "price": "￥123"
    }, {
      "image": "/image/quick2.jpg",
      "price": "￥124"
    }, {
      "image": "/image/quick3.jpg",
      "price": "￥125"
    }, {
      "image": "/image/quick4.jpg",
      "price": "￥126"
    }, {
      "image": "/image/quick5.jpg",
      "price": "￥127"
    }, {
      "image": "/image/quick6.jpg",
      "price": "￥128"
    }],
    pageRow: [["/image/ad-0.jpg","/image/ad-big.jpg","/image/ad-1.jpg"],["/image/ad-left.jpg","/image/ad-right.jpg"]],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    // wx.showLoading({
    //   title: '加载中...',
    // })
    wx.request({
      url: interfaces.homepage,
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success(res) {
        self.setData({
          swipers: res.data.swipers,
          logos: res.data.logos,
          quicks: res.data.quicks,
          pageRow: res.data.pageRow
        })
        wx.hideLoading()
      }
    })
  },
})