
function setNavigationBarTitle( title ) {
    wx.setNavigationBarTitle( {
        title: title
    })
}

module.exports = {
    setNavigationBarTitle: setNavigationBarTitle
}
