// pages/project/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
     lunbo:[],
     indexNews:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.request({
    url:"http://127.0.0.1:3000/index/lunboList",
    success:(res)=>{
      console.log(res.data);
     this.setData({
       lunbo:res.data
     })

    }
  })
   wx.request({
    url:"http://127.0.0.1:3000/index/indexNews",
    success:(res)=>{
      console.log(res.data);
      this.setData({
        indexNews:res.data
      })
    }
   
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
  
  },
   jump1(){
    wx.switchTab({
      url:"../news/news"
    })
   },

   jump2(){
     wx.switchTab({
       url: "../list/list"
     })
   },
  jumpNewDetail(e){
    var pid=e.target.dataset.pid;
    console.log(pid)
   wx.navigateTo({
     url: '../newsDetail/newsDetail?pid='+pid
   })

  }
 
})