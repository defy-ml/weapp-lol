//me.js
Page( {
  data: {
    record: true,
    ability: false,
    assets: false
  },
  //事件处理函数
  navTap: function( event ) {
    this.setData( {
      record: false,
      ability: false,
      assets: false
    })
    var navtype = event.target.dataset.navtype
    switch( navtype ) {
      case 'record':
        this.setData( {
          record: true
        })
        break
      case 'ability':
        this.setData( {
          ability: true
        })
        break
      case 'assets':
        this.setData( {
          assets: true
        })
        break
    }

  }
})
