//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      // 云开发初始化
      wx.cloud.init({
        env: 'zzmine-3cgx9',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
