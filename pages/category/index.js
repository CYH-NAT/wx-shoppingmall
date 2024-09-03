// pages/category/index.js
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: ["熱門推薦", "手機數碼", "女裝內衣", "男裝內衣", "家用電器", "鞋靴箱包", "運動戶外", "電腦辦公", "美妝護膚", "個護清潔", "生活充值", "家用建材", "家居家紡"],
    navRightItems: [
      [{//熱門推薦
          "title": "熱門分類",
          "desc": [{
              "text": "USB隨身碟",
              "img": "/image/classify/usb.png"
            },
            {
              "text": "牛奶",
              "img": "/image/classify/milk.png"
            },
            {
              "text": "行動電源",
              "img": "/image/classify/power.png"
            },
            {
              "text": "洗衣精",
              "img": "/image/classify/laundry.png"
            },
            {
              "text": "男士內褲",
              "img": "/image/classify/briefs.png"
            },
            {
              "text": "耳機",
              "img": "/image/classify/headset.png"
            },
            {
              "text": "路由器",
              "img": "/image/classify/router.png"
            },
            {
              "text": "吃雞神器",
              "img": "/image/classify/game.png"
            },
            {
              "text": "刮鬍刀",
              "img": "/image/classify/shaver.png"
            },
            {
              "text": "大閘蟹",
              "img": "/image/classify/crab.png"
            }
          ]
        },
        {
          "title": "熱賣手機",
          "desc": [{
              "text": "小米",
              "img": "/image/classify/miphone.png"
            },
            {
              "text": "華為",
              "img": "/image/classify/huawei.png"
            },
            {
              "text": "vivo",
              "img": "/image/classify/phone.png"
            }
          ]
        },
        {
          "title": "家電熱搜",
          "desc": [{
              "text": "微波爐",
              "img": "/image/classify/microwave.png"
            },
            {
              "text": "電鍋",
              "img": "/image/classify/cooker.png"
            }
          ]
        }
      ],
      [{//手機數碼
          "title": "手機品牌",
          "desc": [{
              "text": "小米",
              "img": "/image/classify/miphone.png"
            },
            {
              "text": "華為",
              "img": "/image/classify/huawei.png"
            },
            {
              "text": "vivo",
              "img": "/image/classify/phone.png"
            }
          ]
        },
        {
          "title": "手機配件",
          "desc": [{
              "text": "行動電源",
              "img": "/image/classify/power.png"
            },
            {
              "text": "耳機",
              "img": "/image/classify/headset.png"
            },
            {
              "text": "吃雞神器",
              "img": "/image/classify/game.png"
            }
          ]
        }
      ]
    ],
    curIndex: 0,
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
      url: interfaces.productions,
      header: {
        'content-type': 'application/json' // 默认值，返回的数据设置为json数组格式
      },
      success(res) {
        self.setData({
          navLeftItems: res.data.navLeftItems,
          navRightItems: res.data.navRightItems
        })
        wx.hideLoading()
      }
    })
  },
  /*
   * 记录左侧点击的按钮下标 
   */
  switchRightTab(e) {
    let index = parseInt(e.currentTarget.dataset.index);  //點誰誰高亮
    this.setData({
      curIndex: index
    })
  },
  /**
   * 点击进入列表页
   * 列表页参数 title
   */
  showListView(e) {
    let txt = e.currentTarget.dataset.txt
    wx.navigateTo({
      url: '/pages/list/index?title=' + txt //跳轉頁面
    })
  }
})