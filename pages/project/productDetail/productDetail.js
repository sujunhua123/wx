// pages/project/Detail/Detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   details:[],
   pid:0,
   title:"",
   img_url:"",
   price:"",
   sum:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (pid) {
     // console.log(pid.pid);
   wx.request({
     url:"http://127.0.0.1:3000/list/details?pid="+pid,
     data:{
       pid:pid.pid
     },
     success:(res)=>{
       console.log(res.data)
       this.setData({
        details:res.data,
        pid:res.data[0].pid,
        title:res.data[0].title,
        img_url:res.data[0].img_url,
        price:res.data[0].price,
        sum:res.data[0].sum
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
  addshopList:function(){
   console.log("传参pid"+this.data.pid)
   console.log(this.data.price)
 wx.request({
   url:"http://127.0.0.1:3000/carts/getCarts?pid="+this.data.pid+"&title="+this.data.title+"&img_url="+
   this.data.img_url+"&price="+this.data.price+"&sum="+this.data.sum,
  success:(res)=>{
    wx.showToast({
      title:"添加购物车成功"
    })
  } 
    
   })  
  },
  buy:function(){
    wx.reLaunch({
     url: '../shopCart/shopCart'
   })

  }

})