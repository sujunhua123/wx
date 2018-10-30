// pages/project/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     newsList:[],
     smallnews:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
     url:"http://127.0.0.1:3000/news/newslist",
     success:(res)=>{
        console.log(res.data)
      this.setData({
         newsList:res.data
      })  
     }

    })
  wx.request({
   url:"http://127.0.0.1:3000/news/smallnews",
   success:(res)=>{
     console.log(res.data)
   this.setData({
     smallnews:res.data
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
  toNewDetail:function(e){
     var pid=e.target.dataset.pid;
     console.log(pid);
   wx.navigateTo({
     url: '../newsDetail/newsDetail?pid='+pid
  })
 }
})