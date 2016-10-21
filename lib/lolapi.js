
var app = getApp()
var pageThis
function http_get( apiname, data, success, fail ) {
    if( !pageThis ) {
        console.error( "pageThis 未定义,怀疑init方法未调用" );
        return false
    }
    showLoading()
    if( typeof success != 'function' ) {
        success = function( res ) {
            console.log( res );
        }
    }

    if( typeof fail != 'function' ) {
        fail = function( error ) {
            console.log( error );
        }
    }
    wx.request( {
        url: "http://lolapi.games-cube.com/" + apiname,
        data: data || {},
        header: {
            'DAIWAN-API-TOKEN': '44EF3-C38B2-481B4-28E33'
        },
        success: function( res ) {
            hiddenLoading()
            success( res.data )
        },
        fail: function( error ) {
            hiddenLoading()
            fail( error )
        }
    })
}

//初始化
function init( _this ) {
    pageThis = _this
    hiddenLoading()
}

//显示loading
function showLoading() {
    pageThis.setData( {
        loadingHidden: false
    })
    wx.showNavigationBarLoading()
}

//隐藏loading
function hiddenLoading() {
    pageThis.setData( {
        loadingHidden: true
    })
    wx.hideNavigationBarLoading()
}

//获取指定用户名所在的区服信息及用户在区服中的基本信息
function UserArea( data, success, fail ) {
    http_get( "UserArea", data, success, fail );
}

//国服区服字典
function Area( data, success, fail ) {
    http_get( "Area", data, success, fail );
}

//获取用户图标
function GetUserIcon( data, success, fail ) {
    http_get( "GetUserIcon", data, success, fail );
}

//查询用户基本信息
function UserHotInfo( data, success, fail ) {
    http_get( "UserHotInfo", data, success, fail );
}

module.exports = {
    init: init,
    UserArea: UserArea,
    Area: Area,
    GetUserIcon: GetUserIcon,
    UserHotInfo: UserHotInfo
}