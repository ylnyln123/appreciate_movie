//index.js
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
    search:null,
    searchResultList: [],
    isLogin: true,
    searchValue: '',
    isFocus: false,
    isShowSeachClose: false
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../story/story'
    })
  },
  onLoad: function() {
    wx.showLoading({
      title: '加载中',
    })
    this.getMovieList()//暂时注释
  },
  onReady(){
    this.setData({
      search: this.searchFun.bind(this)
    })
    console.log('登录',app.isLogin());
  //  const userInfo = Util.getStorage('userInfo');
   if (!app.globalData.userInfo) {
    this.setData({
      isLogin: false
    })
   }
  },
  searchFun(e){
      const movieData = this.data.movieList
      const resultList = []
      for (let index = 0; index < movieData.length; index++) {
        const element = movieData[index];
        if (e && element.name && element.name.search(e) > -1) {
          resultList.push({
            text: element.name,
            value: element._id
          });
        }
      }
      return resultList
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
      wx.hideLoading()
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
    console.log(e);
    const id = e.currentTarget.dataset.id
    this.navigateToDetail(id);
  },
  navigateToDetail(id){
    if (!id) {
      return
    }
    wx.navigateTo({
      url: `/pages/moviePlay/moviePlay?_id=${id}`
    })
  },
  searchInput(event){
    console.log(event);
    this.setData({
      searchResultList: this.searchFun(event.detail.value),
      isShowSeachClose: true
    })
  },
  closeSearch(){
    this.setData({
      searchValue: '',
      searchResultList: [],
      isFocus: false,
      isShowSeachClose: false
    })
  },
  focusInput(){
    this.setData({
      isFocus: true
    })
  },
  searchNavigateTo(e){
    this.closeSearch();
    console.log(e);
    this.navigateToDetail(e.currentTarget.dataset.id)
  }
})