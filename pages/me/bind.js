
const api = require( "../../lib/lolapi.js" )
var userAreaItems, app = getApp()
Page( {
  data: {
    loadingHidden: true,
    inputValue: ''
  },
  bindKeyInput: function( e ) {
    this.setData( {
      inputValue: e.detail.value
    })
  },
  searchTap: function( event ) {
    var keyword = event.target.dataset.name
    var that = this
    api.init( this )
    api.UserArea( { keyword: keyword }, function( res ) {
      var userAreaItems = []
      for( var i = 0;i < res.data.length;i++ ) {
        res.data[ i ].areaName = app.globalData.areaItems[ res.data[ i ].area_id - 1 ]
      }
      that.setData( {
        userAreaItems: res.data
      })
    })
  }
})