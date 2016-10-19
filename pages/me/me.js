//me.js
const api = require( "../../lib/lolapi.js" )

var areaIndex, areaId, _areaItems = [];

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
    for( var i = 0;i < _areaItems.length;i++ ) {
      if( _areaItems[ i ].name == this.data.areaItems[ areaIndex ] ) {
        areaId = _areaItems[ i ].id
        break
      }
    }
  },
  onLoad: function( options ) {
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    api.Area( {}, function( res ) {
      _areaItems = res.data
      var areaItems = [];
      for( var i = 0;i < _areaItems.length;i++ ) {
        areaItems.push( _areaItems[ i ].name );
      }
      that.setData( {
        areaItems: areaItems
      })
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
