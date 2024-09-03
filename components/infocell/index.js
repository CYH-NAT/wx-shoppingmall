// components/infocell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { //同vue的props
    // 左侧标题
    title: { // 属性名
      type: String, // 類型，必填
      value: '' // 初始值
    },
    desc: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    popView: function () {
      this.triggerEvent('popView')
      //子傳值給父，由子組件觸發自定義事件，同vue的$emit
    }
  }
})
