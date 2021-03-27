//index.js
//获取应用实例
import Util from '../../utils/util'
const app = getApp();
const db = app.db();
Page({
  data: {
    autoplay: true,
    interval: 4000,
    duration: 1000,
    movieList: [],
    books: [],
    isLogin: true
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../story/story'
    })
  },
  onLoad: function() {
    this.getMovieList()
  },
  onReady(){
    console.log('登录',app.isLogin());
  //  const userInfo = Util.getStorage('userInfo');
   if (!app.globalData.userInfo) {
    this.setData({
      isLogin: false
    })
   }
  },
  getMovieList(){
    db.collection('movieData').field({
      name: true,
      src: true,
      id: true,
      plot:true
    }).where({
      id: this.curMovieID
    }).get().then(res => {
      // res.data 包含该记录的数据
      const books = [];
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        if (books.length < 4) {
          books.push(element)
        }
      }
      this.setData({
        movieList: res.data,
        books
      })
    })
  },
  getUserInfo(e){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo;
    Util.setStorage('userInfo',e.detail.userInfo);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      isLogin: true
    });

  },
  onInfoDetail(e){
    const id = e.currentTarget.dataset.id
    this.navigateToDetail(id);
  },
  navigateToDetail(id){
    if (!id) {
      return
    }
    wx.navigateTo({
      url: `/pages/moviePlay/moviePlay?id=${id}`
    })
  }
})