var app=getApp()
Page({
  data:{
    subjects:[
  ]
  },
/*页面加载完成后执行的函数 */
  onLoad: function () {
    const _this=this;



    wx.request({
      url: app.globalData.doubanBase + app.globalData.inTheaters+'?start=0&count=3',/*请求网络地址 start:从什么地址开始，count:请求数量*/
      data: {},/*请求的时候传递的参数*/
      methods: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {/*请求成功后执行该函数，执行该函数时会将请求得到的结果放入到res变量中，如果要获取返回的结果，可以直接从res中获取*/

        _this.setData({
          subjects: res.data.subjects
        });
        console.log(_this.data.subjects);
        /*var data = res.data;
        currentPage.setData({
          list: data.subjects
        })*/
      },
    })
  },
})

