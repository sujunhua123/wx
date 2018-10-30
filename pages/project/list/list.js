// pages/project/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     products:[],
     navbar:[],
     toView: 'in1',
     _click:"",
     viewtop:""
     
  },
  scroll: function (e) {
        //右侧列表滑动-左侧列表名称样式跟着改变
    //获取滚动距离
    var top = e.detail.scrollTop;
    console.log(top)
    //将滚动距离（位移）动态添给滚动条的left
    this.setData({
      viewtop:top
    })
  },
  
  scrollToViewFn: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      toView: 'in' + id,
      _click:id
    })


  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
     wx.request({
     url:"http://127.0.0.1:3000/list/products",
     success:(res)=>{
       console.log(res.data)
       this.setData({
         products:res.data
       })
 
     }

     })
     wx.request({
       url: "http://127.0.0.1:3000/list/navbar",
       success: (res) => {
         console.log(res.data)
         this.setData({
           navbar: res.data
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

  jumpList:function(e){
    var pid=e.target.dataset.pid;
    console.log(pid)
    wx.navigateTo({
        url:"../productDetail/productDetail?pid="+pid
    })  
  }  

})