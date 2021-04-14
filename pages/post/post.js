// pages/post/post.js
const app = getApp()
const db = app.db();
Page({
  data: {
   cultureData: [],
   isLoading: true
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
   
    this.getCulture();
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
  getCulture(){
    db.collection('cultures').where({
      id: this.curMovieID
    }).get().then(res => {
      console.log('#####',res);
      console.log(res);
      this.setData({
        cultureData: res.data,
        isLoading: false
      })
    })
  },
  onClickCulture(e){
    const clickIndex = e.currentTarget.dataset.index
    const itemData = this.data.cultureData[clickIndex];
    app.globalData.curCultureData = itemData;
    wx.navigateTo({
      url: '/pages/community/community'
    })
  }

})