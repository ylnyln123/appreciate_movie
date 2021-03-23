// pages/blog/blog.js
let keyword=' '
//搜索的关键字
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //控制底部弹出层显示
    modalShow:false,
    blogList:[],
  },
  //发布
  onPublish(){
    //判断用户是否授权
    wx.getSetting({
      success :(res)=> {
        console.log(res)
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:(res) =>{
              this.onLoginSuccess({
                detail:res.userInfo
              })
            }
          })
      }else{
        this.setData({
          modalShow:true,
        })
      }
  }
})
},
onLoginSuccess(event){
    console.log(event)
    const detail=event.detail
    wx.navigateTo({
      url: `../blog-edit/blog-edit?nickName=${detail.nickName}&avatarUrl=${detail.avatarUrl}`,
    })
  },
  onLoginFail(){
    wx.showModal({
      title: '授权用户才能发布',
      content: '',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.scene)
    this._loadBlogList()
    //小程序端调用云函数
    // const db=wx.cloud.database()
    // db.collection('blog').orderBy('createTime','desc').get().then((res)=>{
    //   console.log(res)
    //   const data=res.data
    //   for(let i=0,len=data.length;i<len;i++){
    //     data[i].createTime=data[i].createTime.toString
    //   }
    //   this.setData({
    //     blogList:res.data
    //   })
    // })
  },
  onSearch(event){
      // console.log (event.detail.keyword)
      this.setData({
        blogList:[]
      })
      keyword=event.detail.keyword
      this._loadBlogList(0)
  },
  _loadBlogList(start=0){
    wx.showLoading({
      title: '拼命加载中',
    })
    wx.cloud.callFunction({
      name:'blog',
      data:{
        keyword,
        start,
        $url:'list',
        count:10,
      }
    }).then((res)=>{
      console.log(res)
      this.setData({
        blogList:this.data.blogList.concat(res.result)
      })
      wx.hideLoading()
      wx.stopPullDownRefresh()
    })
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