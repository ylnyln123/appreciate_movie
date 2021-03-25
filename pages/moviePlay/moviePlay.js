//logs.js
const util = require('../../utils/util.js')
const app = getApp()
const db = app.db();
Page({
  data: {
    navList: [{
      text: '简介',
      imageUrl: '../../images/icons/movie-detail.svg'
    }, {
      text: '评论',
      imageUrl: '../../images/icons/movie.svg'
    }],
    movieData:{},
    userDiscussList: [
      {
        userName: '刺猬的天',
        discussDate: '2020-03-23 21:59:20',
        detailsText: '这部电影真好看！周末和女神一起去！'
      }
    ],
    navIndex: 0
  },
  onLoad(options) {
    this.curMovieID = Number(options.id);
    this.getMovieDetail();
    
  },
  getMovieDetail(){
    db.collection('moviePlay').where({
      id: this.curMovieID
    }).get().then(res => {
      const data = res.data[0];
      this.setData({
        movieData: data
      })
    })
  },
  switchNav(e) {
    const clickIndex = e.currentTarget.dataset.index
    if (clickIndex != this.data.navIndex) {
      this.setData({
        navIndex: clickIndex
      })
    }
  }
})