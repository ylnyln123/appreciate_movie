//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 4000,
    duration: 1000,
    movieList: [
      {
        src: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.jpg",
        name:'复仇者联盟4'
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555084871.jpg",
        name:'恶人传'
      },
      {
        src: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2558022335.jpg",
        name:'天气的子'
      },{
        src:"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2567973073.jpg",
        name:"乔乔的异想世界"
      }, {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555084871.jpg",
        name:'恶人传'
      },
      {
        src:"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2567973073.jpg",
        name:"乔乔的异想世界"
      }
    ],
    books: [{
        src: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.jpg",
        dis:'中美电影文化'
      },
      {
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555084871.jpg",
        dis:'中韩电影文化'
      },
      {
        src: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2558022335.jpg",
        dis:'中日电影文化'
      },{
        src:"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2567973073.jpg",
        dis:"中欧电影文化"
      }
    ],
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../story/story'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onClickSwiper(e){
    console.log(e);
  },
  navigateToDetail(){
    wx.navigateTo({
      url: '/pages/moviePlay/moviePlay'
    })
  }
})