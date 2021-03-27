
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cultureData: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onReady(){
    this.setData({
      cultureData: app.globalData.curCultureData
    })
  },
 
  onPullDownRefresh: function (event) {
  }
})