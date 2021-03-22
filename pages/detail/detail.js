Page({
  data: {
    film: {
      directors: [{name: "管虎"}],
      actors: [
        {name: "王千源 / 张译 / 姜武 / 黄志忠 / 张俊一"},
      ],
      rating: { value: 7.6},
      genres: ["剧情", "历史","战争"],
      pic:{large: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615992304.webp"},
      title: "八佰",
      year: "2020",
      durations: ["147分钟(公映版)"],
      intro: "1937年淞沪会战的最后一役，“八百壮士”奉命坚守上海四行仓库，以少敌多顽强抵抗四天四夜。电影《八佰》由管虎导演，是亚洲首部全片使用IMAX摄影机拍摄的商业电影，将于2020年8月21日全国影院上映"
    },
    showLoading: true,
    options: null,
    url:''
  },
  onLoad: function (options) {
    var that = this
    that.setData({
          showLoading: false
        })
    wx.setNavigationBarTitle({
      title: "电影详情"
    })
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/subject/' + options.id,
    //   header: {
    //     'content-type': 'json'
    //   },
    //   success: function (res) {
    //     var data = res.data
    //     that.setData({
    //       film: data,
    //       showLoading: false
    //     })
    //   }
    // })
  }
})
