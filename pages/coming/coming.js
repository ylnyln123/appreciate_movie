
var pageSize = 20
Page({
  data: {
    films: {
      subjects: [
        {
        "episodes_info": "",
        "rate": "7.3",
        "cover_x": 4950,
        "title": "寻龙传说",
        "url": "https://movie.douban.com/subject/34804147/",
        "playable": false,
        "cover": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2633531206.webp",
        "id": "34804147",
        "cover_y": 6900,
        "is_new": false
        },
        {
        "episodes_info": "",
        "rate": "8.3",
        "cover_x": 2700,
        "title": "无依之地",
        "url": "https://movie.douban.com/subject/30458949/",
        "playable": false,
        "cover": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2630453887.webp",
        "id": "30458949",
        "cover_y": 4000,
        "is_new": false
        },
        {
        "episodes_info": "",
        "rate": "7.2",
        "cover_x": 810,
        "title": "沿路而下",
        "url": "https://movie.douban.com/subject/30456637/",
        "playable": false,
        "cover": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2633150167.webp",
        "id": "30456637",
        "cover_y": 1200,
        "is_new": true
        },
        {
        "episodes_info": "",
        "rate": "5.9",
        "cover_x": 1500,
        "title": "有求必应日",
        "url": "https://movie.douban.com/subject/30242905/",
        "playable": false,
        "cover": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2632772050.webp",
        "id": "30242905",
        "cover_y": 2222,
        "is_new": true
        },
        {
        "episodes_info": "",
        "rate": "7.4",
        "cover_x": 1199,
        "title": "何塞",
        "url": "https://movie.douban.com/subject/35088888/",
        "playable": false,
        "cover": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2621323275.webp",
        "id": "35088888",
        "cover_y": 1600,
        "is_new": true
        },
        {
        "episodes_info": "",
        "rate": "7.5",
        "cover_x": 3264,
        "title": "送你一朵小红花",
        "url": "https://movie.douban.com/subject/35096844/",
        "playable": true,
        "cover": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2618247457.webp",
        "id": "35096844",
        "cover_y": 4929,
        "is_new": false
        },
        {
        "episodes_info": "",
        "rate": "7.9",
        "cover_x": 992,
        "title": "同学麦娜丝",
        "url": "https://movie.douban.com/subject/34902639/",
        "playable": false,
        "cover": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2623673142.webp",
        "id": "34902639",
        "cover_y": 1418,
        "is_new": false
        }]
    },
    hasMore: true,
    city: "",
    showLoading: true,
    url: 'https://movie.douban.com/subject/',
    url2: "https://douban.uieee.com/v2/movie/coming_soon",
    start: 0
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  scroll: function (e) {
    //console.log(e)
  },
  onLoad: function () {
    this.setData({
      showLoading:false,
      hasMore: false,
    })
  },
  scrolltolower: function () {
    
  },
  viewDetail: function (e) {
    var ds = JSON.stringify(e.currentTarget.dataset);
    wx.navigateTo({
      url: '/pages/detail2/detail?films=' + ds
    })
  }
})
