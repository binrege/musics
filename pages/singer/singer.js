// pages/singer/singer.js
import api from '../../http/api';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        word: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        singerType: [{
                name: "入驻歌手",
                id: 5001
            },
            {
                name: "华语男歌手",
                id: 1001
            },
            {
                name: "华语女歌手",
                id: 1002
            },
            {
                name: "华语组合/乐队",
                id: 1003
            },
            {
                name: "欧美男歌手",
                id: 2001
            },
            {
                name: "欧美女歌手",
                id: 2002
            },
            {
                name: "欧美组合/乐队",
                id: 2003
            },
            {
                name: "日本男歌手",
                id: 6001
            },
            {
                name: "日本女歌手",
                id: 6002
            },
            {
                name: "日本组合/乐队",
                id: 6003
            },
            {
                name: "韩国男歌手",
                id: 7001
            },
            {
                name: "韩国女歌手",
                id: 7002
            },
            {
                name: "韩国组合/乐队",
                id: 7003
            },
            {
                name: "其他男歌手",
                id: 4001
            },
            {
                name: "其他女歌手",
                id: 4002
            },
            {
                name: "其他组合/乐队",
                id: 4003
            }



        ],
        selectWord: 0,
        active: 0,
        showSinger: [],
        currentsingerTypeID: 5001,
        currentWord: '',
        currentPage: 0
    },
    getData(id, word) {
        api.getSinger(id, word).then(res => {
            console.log(res);
            this.setData({
                showSinger: res.artists
            })
            console.log(this.data.showSinger);
        }).catch(err => {
            console.log(err);
        })
    },
    //拼接歌手
    getMoreData(id, word, offset) {
        api.getMoreSinger(id, word, offset).then(res => {
            console.log(res);
            if (res.code === 200) {
                this.setData({
                    showSinger: this.data.showSinger.concat(res.artists)
                })
                wx.hideLoading();
            }

            console.log(this.data.showSinger);
        }).catch(err => {
            console.log(err);
        })
    },
    ToDetail(e) {
        let { item } = e.currentTarget.dataset
        wx.navigateTo({
            url: `../singerDetail/singerDetail?title=歌手&Item=${encodeURIComponent(JSON.stringify(item))}`,
        });
        // wx.navigateTo({
        //     url: `../details/details?title=详情&bookid=${item._id}`,
        // });
    },
    selectWord(e) {
        console.log(e);
        let { indexs, items } = e.currentTarget.dataset
        console.log(indexs);
        console.log(items);
        this.setData({
            selectWord: indexs
        })
        if (items === "热") {
            items = ""
        }
        this.setData({
            currentPage: 0,
            currentWord: items
        })
        this.getData(this.data.currentsingerTypeID, items)
    },
    clickItem(e) {
        let { index, title } = e.detail
        console.log(title);
        console.log(this.data.singerType[index].id);
        this.setData({
            currentsingerTypeID: this.data.singerType[index].id
        })
        this.setData({
            currentPage: 0,
            selectWord: 0
        })
        this.getData(this.data.currentsingerTypeID, this.data.currentWord)

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getData(5001, "")
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
        // // 显示顶部刷新图标
        // wx.showNavigationBarLoading();
        // var that = this;
        // wx.request({
        //     url: 'https://xxx/?page=0',
        //     method: "GET",
        //     header: {
        //         'content-type': 'application/text'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             moment: res.data.data
        //         });
        //         // 设置数组元素
        //         that.setData({
        //             moment: that.data.moment
        //         });
        //         console.log(that.data.moment);
        //         // 隐藏导航栏加载框
        //         wx.hideNavigationBarLoading();
        //         // 停止下拉动作
        //         wx.stopPullDownRefresh();
        //     }
        // })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        console.log(this.data.currentPage);
        this.setData({
            currentPage: this.data.currentPage + 1
        })
        console.log(this.data.currentPage);
        wx.showLoading({
            title: '加载中...',
            mask: true,
            success: (result) => {
                this.getMoreData(this.data.currentsingerTypeID, this.data.currentWord, this.data.currentPage * 30)
            }

        });



        // 隐藏加载框

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})