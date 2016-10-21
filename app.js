//app.js
App( {
  globalData: {
  },
  onLaunch: function() {
    this.globalData.UserHotInfo = wx.getStorageSync( 'UserHotInfo' ) || {}
    this.globalData.areaItems = wx.getStorageSync( 'areaItems' ) || []
  }
})