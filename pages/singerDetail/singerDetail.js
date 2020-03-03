import api from "../../http/api";
let formattime = require('../../utils/util.js');
// pages/singerDetail/singerDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        singerItem: {},
        bar: ["主页", "歌曲", "专辑", "视频"],
        currentSelect: 0,
        scrolltop: 0,
        hotSongs: [],
        artist: {},
        hotAlbums: [],
        MV: []
    },
    //歌手部分信息和热门歌曲
    getSingle(id) {
        api.getSingle(id).then(res => {
            console.log(res);
            this.setData({
                hotSongs: res.hotSongs,
                artist: res.artist,
                singerItem: res.artist
            })
        }).catch(err => {
            console.log(err);
        })
    },
    //获得歌手专辑内容
    getAlbum(id, limit) {
        api.getAlbum(id, limit).then(res => {
            console.log(res);
            this.setData({
                hotAlbums: res.hotAlbums
            })
            this.data.hotAlbums.map((item) => {
                item.publishTime = formattime.formatTimeTwo(item.publishTime, 'Y.M.D')
            })
            this.setData({
                hotAlbums: this.data.hotAlbums
            })
            console.log(this.data.hotAlbums);
        }).catch(err => {
            console.log(err);
        })
    },
    //获得歌手更多专辑内容
    getMoreAlbum(id, limit, offset) {
        api.getMoreAlbum(id, limit, offset).then(res => {
            console.log(res);
            this.setData({
                hotAlbums: this.data.hotAlbums.concat(res.hotAlbums)
            })
            this.data.hotAlbums.map((item) => {
                item.publishTime = formattime.formatTimeTwo(item.publishTime, 'Y.M.D')
            })
            this.setData({
                hotAlbums: this.data.hotAlbums
            })
        }).catch(err => {
            console.log(err);
        })
    },
    //获得歌手 mv 信息
    getMV(id) {
        api.getMV(id).then(res => {
            console.log(res);
            this.setData({
                MV: res.mvs
            })
        }).catch(err => {
            console.log(err);
        })
    },
    clickItem(e) {
        let { index } = e.currentTarget.dataset
        console.log(index);
        this.setData({
            currentSelect: index
        })
    },
    upper(e) {
        console.log(e)
    },

    lower(e) {
        console.log(e)
    },

    scroll(e) {
        console.log(e)
        this.setData({
            scrolltop: e.detail.scrollTop
        })
        console.log(this.data.scrolltop);
    },

    scrollToTop() {
        this.setAction({
            scrollTop: 0
        })
    },

    tap() {
        for (let i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1],
                    scrollTop: (i + 1) * 200
                })
                break
            }
        }
    },

    tapMove() {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        // console.log(JSON.parse(decodeURIComponent(options.Item)));
        // this.setData({
        //         singerItem: JSON.parse(decodeURIComponent(options.Item))
        //     })
        // 微信小程序报错 Unexpected end of JSON input;at pages/flow/checkout page getOrderData function
        // 这个报错是在将数组对象通过页面传值，传到指定页面时报的错。
        // 是因为JSON.parse无法识别某些url中的特殊字符，所以报错。
        // 因此解决这个报错的方法是将要传输的数据用 encodeURIComponent()函数（可把字符串作为 URI 组件进行编码） 先进行编码，
        //传输过去后再通过decodeURIComponent()函数解码，最后通过JSON.parse()将其还原为数组对象
        wx.setNavigationBarTitle({
            title: options.title,
        });
        this.getSingle(options.SingerId)
        this.getAlbum(options.SingerId, 30)
        this.getMoreAlbum(options.SingerId, 30, 1 * 30)
        console.log(formattime.formatTimeTwo(1536854400007, 'Y.M.D'));
        this.getMV(options.SingerId)
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

    }
})