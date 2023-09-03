<template>
    <h2>组件内数据回调</h2>
    <button @click="sendClickHandler">点击回调数据</button>
</template>

<script>
export default {
    name: "myComponent2",
    data() {
        return {
            message: "mycomponent内部数据",
        }
    },
    methods: {
        sendClickHandler() {
            // $emit向外部传递数据
            // 参数1：字符串（理论上是随便的，但是需要具有意义）
            // 参数2：传递的数据
            this.$emit("onEvent", this.message)
        }
    }
}
</script>

<style scoped>
h2{
    color: blue,
}
</style>