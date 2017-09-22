var URL = 'http://api.douban.com/v2/movie/subject/';
var app = getApp()
Page({
  data: {
    subjects: {},
    flag: true,
    summary:'',
    rating:'',
    directors:'',
    casts:'',
    
  },
  /*页面加载完成后执行的函数 */
  onLoad: function (params) {
    const _this = this;



    wx.request({
      url: URL+params.id,
      data: {

      },
      methods: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {/*请求成功后执行该函数，执行该函数时会将请求得到的结果放入到res变量中，如果要获取返回的结果，可以直接从res中获取*/

        _this.setData({
          subjects: res.data,
          flag: false,
          summary:"摘要：",
          rating:"评分：",
          directors:"导演",
          casts:"主演",
        });
        console.log(_this.data);

      },
    })
  },

})