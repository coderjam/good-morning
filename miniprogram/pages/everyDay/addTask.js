// pages/everyDay/addTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minTime: '2019-09-15',
    maxTime: '3019-09-15',
    dateStart: '2019-09-15',
    dateEnd: '2019-09-15',
    region: ['江苏省', '苏州市', '姑苏区'],
    name:"吃饭睡觉",
    intro:"好好睡觉，早睡早起"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // console.log("当前时间：" + Y + '-' + M + '-' + D);
    this.setData({
      dateStart: Y + '-' + M + '-' + D,
      dateEnd: Y + '-' + M + '-' + D,
      minTime: Y + '-' + M + '-' + D,
      maxTime: Y + 1 + '-' + M + '-' + D
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
  //开始时间
  DateStartChange(e) {
    this.setData({
      dateStart: e.detail.value
    })
  },
  //结束时间
  DateEndChange(e) {
    this.setData({
      dateEnd: e.detail.value
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
})