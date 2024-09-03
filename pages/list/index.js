// pages/list/index.js
// 引入接口配置文件urlconfig
const interfaces = require('../../utils/urlconfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    prolist: [{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2標準版 6GB+64GB雙卡雙待 4G全網通手機 黑色 移動聯通電信手機","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徠卡三攝遊戲手機 6GB+128GB 亮黑色 全網通移動聯通電信4G手機 雙卡雙待","price":"4499.00","comment":"27萬","rate":"99%"},{"cover":"/image/classify/phone.png","title":"榮耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海藍 移動聯通電信4G全面屏手機 雙卡雙待","price":"1499.00","comment":"3萬","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2標準版 6GB+64GB雙卡雙待 4G全網通手機 黑色 移動聯通電信手機","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徠卡三攝遊戲手機 6GB+128GB 亮黑色 全網通移動聯通電信4G手機 雙卡雙待","price":"4499.00","comment":"27萬","rate":"99%"}],
    page: 1, // 当前请求的page
    size: 5, // 请求数据的size
    noData: false // 是否有更多数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { //option會得到載入時的參數
    wx.setNavigationBarTitle({
      title: options.title
    })

    // 发送接口请求
    const self = this
    // wx.showLoading({
    //   title: '加载中...',
    // })
    wx.request({
      url: interfaces.productionsList,
      success(res) {
        self.setData({
          prolist: res.data
        })
        wx.hideLoading()
      }
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 请求数据
    wx.showNavigationBarLoading() //在標題顯示加載
    this.setData({
      page: 1,
      noData: false
    })
    const self = this
    wx.request({
      url: interfaces.productionsList,
      success(res) {
        self.setData({
          prolist: res.data
        })
        // 隐藏加载状态
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 判读数据是否加载完毕
    if (this.data.noData) return
    
    // 停止下拉刷新
    wx.stopPullDownRefresh();
    wx.showNavigationBarLoading() //在标题栏中显示加载

    const prolist = this.data.prolist
    let page = this.data.page
    this.setData({ // 每次下拉 page+1
      page: ++page
    })
    const self = this
    wx.request({
      url: interfaces.productionsList + '/' + self.data.page + '/' + self.data.size,
      success(res) {
        if (res.data.length == 0) {
          self.setData({
            noData: true
          })
        } else {
          res.data.forEach(item => {
            prolist.push(item)
          })
          self.setData({
            prolist: prolist
          })
        }
        // 隐藏加载状态
        wx.hideNavigationBarLoading()
      }
    })
  },
  /**
   * 點擊查看詳情
  */
  switchProlistDetail: function (e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/detail/index?id=' + this.data.prolist[index].id,
    })
  }
})