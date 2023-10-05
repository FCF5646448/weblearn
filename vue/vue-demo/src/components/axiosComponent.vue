<template>
    <h3> Axios 网络请求 </h3>
    <div>
        <p>{{ chenpin.title }}</p>
    </div>
</template>

<script>
// import axios from 'axios'
import querystring from 'querystring'
import api from "../api/index"

export default {
    name: 'axiosComponent',
    data() {
        return {
            chenpin: {}
        }
    },
    mounted() {
        // get 请求方式
        // axios({
        //     method: "get",
        //     url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
        // }).then(res => {
        //     console.log(res.data);
        //     this.chenpin = res.data.chengpinDetails[0]
        // })

        // this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        //     .then(res => {
        //     console.log(res.data);
        //     this.chenpin = res.data.chengpinDetails[0]
        // })
        api.getChengpin().then( res => {
            console.log(res.data);
            this.chenpin = res.data.chengpinDetails[0]
        }),

        // api.fingerUnion().then( res => {
        //     console.log(res.data);
        // })

        // post请求方式
        // axios({
        //     method: "post",
        //     url: "http://iwenwiki.com/api/blueberrypai/login.php",
        //     data: querystring.stringify({
        //         user_id: "iwen@qq.com",
        //         password: "iwen123",
        //         verification_code: "crfvw"
        //     })
        // }).then(res => {
        //     console.log(res.data);
        // })

        this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php", querystring.stringify({
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            })).then(res => {
                console.log(res.data);
            })
    }
}
</script>

<style scoped>
h3 {
    color: black;
}
</style>