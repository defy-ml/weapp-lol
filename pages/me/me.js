//me.js
const api = require( "../../lib/lolapi.js" )
const common = require( "../../lib/common.js" )

var areaIndex
var app = getApp()
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
  //选择区服
  selectArea: function( e ) {
    areaIndex = e.detail.value
    common.setNavigationBarTitle( app.globalData.areaItems[ areaIndex ] )
  },
  onLoad: function( options ) {
    //初始化apiapi
    api.init( this )
    var that = this
    //获取区服
    api.Area( {}, function( res ) {
      var areaItems = []
      for( var i = 0;i < res.data.length;i++ ) {
        areaItems[ res.data[ i ].id - 1 ] = res.data[ i ].name
      }
      app.globalData.areaItems = areaItems;
      that.setData( {
        areaItems: areaItems
      })
      console.log( areaItems )
    });
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})

