
var str = 'http://api.douban.com/v2/movie/';
var app = getApp()
Page({
  data: {
    title:'',
    subjects:[],
    flag:true,
    hasMore: true
  },
  /*页面加载完成后执行的函数 */
  onLoad: function (params) {
    const _this = this;
    


    wx.request({
      url: str+params.type,
      data: {

      },
      methods: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {/*请求成功后执行该函数，执行该函数时会将请求得到的结果放入到res变量中，如果要获取返回的结果，可以直接从res中获取*/

        _this.setData({
          title:res.data.title,
          subjects: res.data.subjects,
          flag:false
        });
        console.log(_this.data.subjects);
        
      },
    })
  },

})

