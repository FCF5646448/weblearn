<template>
    <h3>生命周期</h3>
    <p>{{ message }}</p>
    <button @click="message='newMessage'">点击更新message</button>
</template>

<script>
export default {
    name: "lifeCycle",
    data() {
        return {
            message: "message",
        }
    },
    beforeCreate() {
        console.log("beforeCreate: 组件创建之前")
    },
    created() {
        console.log("created: 组件创建完成")
    },
    beforeMount() {
        console.log("beforeMount: 组件渲染之前")
    },
    mounted() {
        console.log("mounted: 组件渲染完成")
    },
    beforeUpdate() {
        console.log("beforeUpdate: 组件更新之前")
    },
    updated() {
        console.log("updated: 组件更新完成")
    },
    beforeUnmount() {
        console.log("beforeUnmount: 组件卸载之前")
    },
    unmounted() {
        console.log("unmounted: 组件卸载完成")
    }
}
</script>

<style scoped>
h3{
    color: aquamarine;
}
</style>