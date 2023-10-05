<template>
    <h3> 新闻</h3>
    <ul>
        <li><RouterLink to="/newsDetails/百度">百度新闻</RouterLink> </li>
        <li><RouterLink to="/newsDetails/网易">网易新闻</RouterLink></li>
        <li><RouterLink to="/newsDetails/腾讯">腾讯新闻</RouterLink></li>
    </ul>
    <p>counter = {{ $store.state.counter }}</p>
    <p>{{ counter }}</p>
    <p>getcounter = {{ getCounter }}</p>
    <button @click="addClickHandler">增加</button>
    <button @click="addAsyncClickHandler">异步增加</button>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    name: "newsView",
    computed: {
        ...mapState(["counter"]),
        ...mapGetters(["getCounter"])
    },
    methods: {
        ...mapMutations(["addCounter"]),
        addClickHandler() {
            // 固定调用方式
            this.addCounter(20)
            // this.$store.commit("addCounter", 10)
        },
        addAsyncClickHandler() {
            this.$store.dispatch("asyncAddCounter")
        }
    }
}
</script>