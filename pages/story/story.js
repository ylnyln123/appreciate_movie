// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    story: [{
      src: "../../images/1.jpg",
      title: '《电影中的集体英雄主义和美式个人英雄主义》',
      dis:"中国电影网 #近期热门"
    }
    ]
  },
 //事件处理函数
 bindViewTap: function() {
  wx.navigateTo({
    url: '../detail/detail'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})