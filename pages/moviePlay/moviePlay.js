//logs.js
// const util = require('../../utils/util.js')
import Util from '../../utils/util'
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
    movieData: {},
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
    this.userInfo = app.globalData.userInfo;//获取用户信息
  },
  getMovieDetail() {
    db.collection('movieData').field({
      name: true,
      synopsis: true,
      playUrl: true,
      id: true,
      comment: true
    }).where({
      id: this.curMovieID
    }).get().then(res => {
      console.log(res);
      const data = res.data[0];
      this.setData({
        movieData: data
      })
    })
  },
  sendComment(e) {
    console.log(e);
    const submitValue = e.detail.value.commentValue
    if (submitValue) {
      const curDate = Util.formatTime(new Date());
      const _id = this.data.movieData._id;
      const userInfo = app.globalData.userInfo
      //  _id
      const _ = db.command
      db.collection('movieData').doc(_id).update({
        data: {
          comment: _.unshift({
              content: submitValue,
              submitDate: curDate,
              submitName: this.userInfo.nickName,
              avatarUrl:  this.userInfo.avatarUrl
          })
        }
      }).then(res => {
        if (res.errMsg == 'document.update:ok') {
          this.showToast('success','评论发表成功');
          this.getcommandDetail();
        }
      
      },err => {
        this.showToast('error','提交失败');
      })
      console.log(curDate);
    } else {
     this.showToast('none','不能为空哦');
    }
  },
  getcommandDetail(){
    db.collection('movieData').field({
      comment: true
    }).where({
      id: this.curMovieID
    }).get().then(res => {
      console.log(res);
      const commentData = res.data[0].comment;
      this.setData({
        'movieData.comment': commentData
      })
    })
  },
  showToast(status,text){
    wx.showToast({
      title: text,
      icon: status,
      duration: 2000
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