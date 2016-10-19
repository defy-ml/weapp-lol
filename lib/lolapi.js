
function http_get( apiname, data, success, fail ) {

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
            'DAIWAN-API-TOKEN': 'B18BA-9A49A-AAABB-3C322'
        },
        success: function( res ) {
            success( res.data )
        },
        fail: function( error ) {
            fail( error )
        }
    })
}

//获取指定用户名所在的区服信息及用户在区服中的基本信息
function UserArea( data, success, fail ) {
    http_get( "UserArea", data, success, fail );
}

//国服区服字典
function Area( data, success, fail ) {
    http_get( "Area", data, success, fail );
}

module.exports = {
    UserArea: UserArea,
    Area: Area
}