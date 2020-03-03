// component/index/recommendItem/recommend.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        recommend: {
            type: Array,
            value: () => []
        },
        newMusic: {
            type: Array,
            value: () => []
        },
        title: {
            type: String,
            value: ""
        },
        title2: {
            type: String,
            value: ""
        },
        more: {
            type: String,
            value: ""
        },
        more2: {
            type: String,
            value: ""
        },
        playmodel: {
            type: Number,
            value: -1
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        selectIndex: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        clickItem(e) {
            let { index } = e.currentTarget.dataset
            console.log(e);
            this.setData({
                selectIndex: index
            })
        },
    }
})