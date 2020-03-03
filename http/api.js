//封装所有的请求
import fly from "./index"
export default {
    //获取轮播图
    getBanner() {
        return fly.get('banner')
    },
    //登陆
    // login(params){
    //     return fly.post('login',parmas)
    // }
    login({ username, password }) {
        return fly.post('login', {
            username,
            password
        })
    },
    //推荐歌单limit默认30条
    getRecommend(limit) {
        return fly.get(`personalized?limit=${limit}`)
    },
    //新歌新碟
    getNewsong() {
        return fly.get(`personalized/newsong`)
    },
    getNewAlbum() {
        return fly.get(`/top/album`)
    },
    //推荐电台
    getDjprogram() {
        return fly.get(`personalized/djprogram`)
    },
    //推荐节目
    getProgram() {
        return fly.get(`/program/recommend`)
    },
    //获取歌手列表
    getSinger(id, word) {
        return fly.get(`/artist/list?cat=${id}&initial=${word}`)
    },
    //拼接歌手
    getMoreSinger(id, word, offset) {
        return fly.get(`/artist/list?cat=${id}&initial=${word}&offset=${offset}`)
    },
    //歌手部分信息和热门歌曲
    getSingle(id) {
        return fly.get(`/artists?id=${id}`)
    },
    //获得歌手 mv 信息
    getMV(id) {
        return fly.get(`/artist/mv?id=${id}`)
    },
    //获得歌手专辑内容
    getAlbum(id, limit) {
        return fly.get(`/artist/album?id=${id}&limit=${limit}`)
    },
    //获得歌手更多专辑内容
    getMoreAlbum(id, limit, offset) {
        return fly.get(`/artist/album?id=${id}&limit=${limit}&offset=${offset}`)
    },
    // 调用此接口 , 传入专辑 id, 可获得专辑内容
    getAlbumContent(id) {
        return fly.get(`/artist/album?id=${id}`)
    },
    //获得歌手描述
    getDesc(id) {
        return fly.get(`/artist/desc?id=${id}`)
    },
}