// pages/project/shopCart/shopCart.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		cartsList: [],
		hasList: false,
		totalPrice: 0,
		selectAllStatus: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.request({
			url: "http://127.0.0.1:3000/carts/cartsList",
			success: (res) => {
				console.log(res.data)
				var cartsList = res.data
				console.log(cartsList)
				var hasList = false;
				if (cartsList.length == 0) {
					hasList = false;
				} else {
					hasList = true;
				}
				this.setData({
					cartsList: res.data,
					hasList: hasList

				})
			}

		})

	},
	/*
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {


	},
	getTotalPrice() {
		var cartsList = this.data.cartsList;
		var total = 0;
		for (var i = 0; i < cartsList.length; i++) {
			total += cartsList[i].sum;
		}
		console.log(total);
		this.setData({
			cartsList: cartsList,
			totalPrice: total

		})

	},
	selectList(e) {
		var index = e.target.dataset.index;
		var cartsList = this.data.cartsList;
		var selectAllStatus = this.data.selectAllStatus;
		var selected = cartsList[index].selected;
		cartsList[index].selected = !selected; // 改变状态
		cartsList[index]['selected'] = !selected;

		//判断有一个没有选中，全选取消
		var j = 0;
		for (let i = 0; i < cartsList.length; i++) {
			if (cartsList[i].selected == true) {
				j++;
				continue;
			} else {
				selectAllStatus = false;
			}

		}
		if (j == cartsList.length) {
			selectAllStatus = true;
		}
		//如果都选中，全选也选中实现
		this.setData({
			cartsList: cartsList,
			selectAllStatus: selectAllStatus,
		});
		this.getTotalPrice();
	},
	selectAll(e) {
		var selectAllStatus = this.data.selectAllStatus; // 是否全选状态
		selectAllStatus = !selectAllStatus;
		var cartsList = this.data.cartsList;
		for (let i = 0; i < cartsList.length; i++) {
			cartsList[i].selected = selectAllStatus;
			cartsList[i]['selected'] = selectAllStatus; // 改变所有商品状态
		}
		this.setData({
			selectAllStatus: selectAllStatus,
			cartsList: cartsList
		});
		this.getTotalPrice(); // 重新获取总价
	},


	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	toList: function() {
		wx.reLaunch({
			url: "../list/list"
		})
	},

	//商品的数量加减
	addNum: function(e) {
		var pid = e.target.dataset.pid
		console.log(pid)
		wx.request({
			url: "http://127.0.0.1:3000/carts/addcartsList?pid=" + pid,
			success: (res) => {
				console.log(res.data);
			}
		})
		var index = e.target.dataset.index;
		console.log(index)
		var cartsList = this.data.cartsList;
		var num = cartsList[index].num;
		var price = cartsList[index].price;
		var sum = cartsList[index].sum;
		num++;
		cartsList[index].num = num;
		cartsList[index].sum = num * price
		console.log(sum)
		this.setData({
			cartsList: cartsList,
		})
		this.getTotalPrice();
	},
	lessNum: function(e) {
		var pid = e.target.dataset.pid
		console.log(pid)
		wx.request({
			url: "http://127.0.0.1:3000/carts/lesscartsList?pid=" + pid,
			success: (res) => {
				console.log(res.data);
			}
		})
		var index = e.target.dataset.index;
		var cartsList = this.data.cartsList;
		var num = cartsList[index].num;
		var price = cartsList[index].price;
		var sum = cartsList[index].sum;
		if (num <= 0) {
			num = 0
		} else {
			num--
		}
		cartsList[index].num = num;
		cartsList[index].sum = num * price
		console.log(sum)
		this.setData({
			cartsList: cartsList
		})
		this.getTotalPrice();
	},

	//删除商品
	deleteCarts: function(e) {
		var cartsList = this.data.cartsList;
		var pid = e.target.dataset.pid
		var index = e.target.dataset.index //获取当前点击事件的下标索引
		console.log('调试的时候没事多打日志来追踪很重要[1]----------')
		wx.showModal({
			title: '提示',
			content: '确定要删除该商品吗？',
			success: (res) => {
				console.log('[2]------')
				console.log(res)
				if (res.confirm) {
					console.log('[3]------')
					cartsList.splice(index, 1)
					this.setData({
						cartsList: cartsList
					})
					console.log('[4]------')
					wx.request({
						url: "http://127.0.0.1:3000/carts/deleteCart?pid=" + pid,
						success: (res) => {
							console.log('最好放到这里再删除[5]-----')
						},
                        fail: (res)=>{
                            console.log('看是不是走这里了[6]---------');
                        }

					})

                    console.log('删除成功也一样，这个提示要放到[5]里去[6]---------');
					wx.showToast({
						title: '删除成功',
						icon: 'success',
						duration: 2000
					});
				} else {
                    console.log('取消确认走这里[7]');
					return
				}
			}
		})
	

	}
})
