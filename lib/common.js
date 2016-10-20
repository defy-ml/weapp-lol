
function setNavigationBarTitle( title ) {
    wx.setNavigationBarTitle( {
        title: title
    })
}

function isExitsVariable( variableName ) {
    try {
        if( typeof ( variableName ) == "undefined" ) {
            return false;
        } else {
            return true;
        }
    } catch( e ) { }
    return false;
}

module.exports = {
    setNavigationBarTitle: setNavigationBarTitle,
    isExitsVariable: isExitsVariable
}
