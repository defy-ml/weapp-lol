//me.js
const api = require( "../../lib/lolapi.js" )
const common = require( "../../lib/common.js" )

var areaIndex
const app = getApp()
Page( {
  data: {
    record: false,
    ability: true,
    assets: true,
    areaIndex: areaIndex || 0
  },
  //选项卡点击事件
  navTap: function( event ) {
    this.setData( {
      record: true,
      ability: true,
      assets: true
    })
    var navtype = event.target.dataset.navtype
    switch( navtype ) {
      case 'record':
        this.setData( {
          record: false
        })
        break
      case 'ability':
        this.setData( {
          ability: false
        })
        break
      case 'assets':
        this.setData( {
          assets: false
        })
        break
    }
  },
  onLoad: function( options ) {
    //初始化apiapi
    api.init( this )
    var that = this
    //获取区服
    if( app.globalData.areaItems.length <= 0 ) {
      api.Area( {}, function( res ) {
        var areaItems = []
        for( var i = 0;i < res.data.length;i++ ) {
          areaItems[ res.data[ i ].id - 1 ] = res.data[ i ].name
        }
        app.globalData.areaItems = areaItems;
        that.setData( {
          areaItems: areaItems
        })
        wx.setStorage( {
          key: "areaItems",
          data: areaItems
        })
      });
    }

    this.setData( {
      UserHotInfo: app.globalData.UserHotInfo
    })

  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
    //初始化apiapi
    api.init( this )
    var that = this
    //获取用户基本信息
    if( common.isExitsVariable( app.globalData.UserHotInfo.qquin ) && common.isExitsVariable( app.globalData.UserHotInfo.areaid ) ) {
      api.UserHotInfo( { qquin: app.globalData.UserHotInfo.qquin, vaid: app.globalData.UserHotInfo.areaid }, function( res ) {
        console.log( res )
        if( res.data[ 0 ] ) {
          res.data[ 0 ].gameHeader = "http://img.lolbox.duowan.com/profileIcon/profileIcon" + res.data[ 0 ].icon + ".jpg"
          app.globalData.UserHotInfo = res.data[ 0 ]
          that.setData( {
            UserHotInfo: res.data[ 0 ]
          })
          wx.setStorage( {
            key: "UserHotInfo",
            data: res.data[ 0 ]
          })
        }
      })
    }
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})

