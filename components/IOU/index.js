// components/IOU/index.js
//存放彈窗的組件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideBaitiao: { // 是否隱藏白條
      type: Boolean,
      value: true
    }, 
    baitiao:{ // 分期内容的數據，必須從父組件接收
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex: 0 // 选中的下标
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideBaitiaoView: function (e) { // 隐藏白条弹框
      if (e.target.dataset.target == 'self')
        this.setData({
          hideBaitiao: true
        })
    },
    selectItem: function (e) {// 選擇白條分期
      var index = e.currentTarget.dataset.index
      var baitiao = this.data.baitiao
      for (var i = 0; i < baitiao.length; i++) {
        baitiao[i].select = false
      }
      baitiao[index].select = !baitiao[index].select
      // 更新data
      this.setData({
        baitiao: baitiao,
        selectIndex: index
      })
    },
    makeBaitiao: function () { // 點擊打白條的話
      this.setData({
        hideBaitiao: true
      })
      const selectItem = this.data.baitiao[this.data.selectIndex]
      this.triggerEvent('updateSelect', selectItem)
    },
  }
})
