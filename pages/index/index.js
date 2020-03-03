import api from '../../http/api';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners: [],
        recommendList: [],
        newsong: [],
        newAlbum: [],
        Djprogram: [],
        Program: []
    },
    getData() {
        api.getBanner().then(res => {
            console.log(res);
            this.setData({
                banners: res.banners
            })
        }).catch(err => {
            console.log(err);
        })
    },
    //推荐歌单
    getRecommend(limit) {
        api.getRecommend(limit).then(res => {
            console.log(res);
            this.setData({
                recommendList: res.result.splice(0, 6)
            })
            console.log(this.data.recommendList);
        }).catch(err => {
            console.log(err);
        })
    },
    //新歌新碟
    getNewsong() {
        api.getNewsong().then(res => {
            console.log(res);
            this.setData({
                newsong: res.result.splice(0, 6)
            })
        }).catch(err => {
            console.log(err);
        })
        api.getNewAlbum().then(res => {
            console.log(res);
            this.setData({
                newAlbum: res.albums.splice(0, 6)
            })
        }).catch(err => {
            console.log(err);
        })
    },
    //推荐电台
    getDjprogram() {
        api.getDjprogram().then(res => {
            console.log(res);
            this.setData({
                Djprogram: res.result.splice(0, 6)
            })
        }).catch(err => {
            console.log(err);
        })
    },
    //推荐节目
    getProgram() {
        api.getProgram().then(res => {
            console.log(res);
            this.setData({
                Program: res.programs.splice(0, 6)
            })
        }).catch(err => {
            console.log(err);
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getData()
        this.getRecommend(100)
        this.getNewsong()
        this.getDjprogram(),
            this.getProgram()
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