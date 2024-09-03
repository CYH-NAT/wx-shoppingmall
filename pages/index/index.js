// index.js
//四個文件的組件，wxml寫結構、wxss寫樣式、js寫邏輯、json寫配置
//文件名相同就好，不用引入
//utils是自己封裝的公用組件
//內聯元素無法加寬高
//只要是變量，就加上雙{{}}
//小程序以iPhone6的寬750px高1334px當標準設計稿，其他手機的尺寸會自動動態修改 1rpx=0.5px
//小程序建議用flex布局

/*原本的內容的備份
// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {
//       avatarUrl: defaultAvatarUrl,
//       nickName: '',
//     },
//     hasUserInfo: false,
//     canIUseGetUserProfile: wx.canIUse('getUserProfile'),
//     canIUseNicknameComp: wx.canIUse('input.type.nickname'),
//   },
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onChooseAvatar(e) {
//     const { avatarUrl } = e.detail
//     const { nickName } = this.data.userInfo
//     this.setData({
//       "userInfo.avatarUrl": avatarUrl,
//       hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
//     })
//   },
//   onInputChange(e) {
//     const nickName = e.detail.value
//     const { avatarUrl } = this.data.userInfo
//     this.setData({
//       "userInfo.nickName": nickName,
//       hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
//     })
//   },
//   getUserProfile(e) {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
// })
*/
const app=getApp()  //得到app實例，可以得到全局的數據
Page({  //一定要有page函數來生成頁面
  data:{
    msg:'哈哈哈哈',
    title:'b',
    arr:[1,2,3,4]
  },
  fn(){
    //不用定義method，直接寫即可
    this.setData({
    //小程序當中要改數據需調用setData，同react
      msg:'哭哭'
    })
    console.log(this.data.msg)
  }
})