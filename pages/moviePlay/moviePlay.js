//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    navList: [{
      text: '简介',
      imageUrl: '../../images/icons/movie-detail.svg'
    },{
      text: '评论',
      imageUrl: '../../images/icons/movie.svg'
    }],
    userDiscussList: [
      {
        userName: '刺猬的天',
        discussDate:'2020-03-23 21:59:20',
        detailsText: '这部电影真好看！周末和女神一起去！'
      }
    ],
    navIndex: 0
  },
  onLoad () {
    

  },
  switchNav(e){
    const clickIndex = e.currentTarget.dataset.index
    if (clickIndex != this.data.navIndex) {
      this.setData({
        navIndex: clickIndex
      })
    }
  }
})