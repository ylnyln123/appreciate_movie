
const app = getApp();
import detailData from './detail'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cultureData: {},
    showActionsheet: false,
    isShowAction: false,
    groups: [
        { text: '丹尼尔·戴-刘易斯', value: 1 },
        { text: '保罗·纽曼', value: 2 },
        { text: '哈维·凯特尔', value: 3 },
        { text: '安东尼·霍普金斯', value: 4 },
        { text: '杰克·尼科尔森', value: 5 },
        { text: '詹姆斯·斯图尔特', value: 6 },
        { text: '阿尔·帕西诺', value: 7 },
        { text: '马龙·白兰度', value: 8 },
        { text: '罗伯特·德尼罗', value: 9 }
    ]
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('!!',app.globalData.curCultureData);
  },
  onReady(){
    if (app.globalData.curCultureData.isScreen) {
      const data = {
        ... app.globalData.curCultureData,
        content: [{title:detailData[0].name,detail: detailData[0].content}]
      }
      this.setData({
        cultureData: data
      })
    } else {
      this.setData({
        cultureData: app.globalData.curCultureData
      })
    }
    this.setData({
      isShowAction: app.globalData.curCultureData.isScreen
    })
  },
  close() {
    this.setData({
        showActionsheet: false
    })
},
  btnClick(e) {
    console.log(e)
    const value = e.detail.value;
    this.close()
    for (let index = 0; index < detailData.length; index++) {
      const element = detailData[index];
      if (element.value == value) {
        this.setData({
        "cultureData.content": [{title:element.name,detail: element.content}],
        })
        break;
      }
    }

},
  showAction(){
    this.setData({
      showActionsheet: true
    })
  },
})