<template>
    <h2> 组件数据正向传入 </h2>
    <p>title = {{ title }}</p>
    <p>age = {{ age }}</p>
    <p>name = {{ name }}</p>
    <ul>
        <li v-for="(item, index) in colors" :key="index">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    name: "MyComponent",
    props:{
        title: {
            type: String, 
            default: ""
        },
        age: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: ""
        },
        colors: {
            type: Array,
            // 数组和对象必须使用函数进行返回
            default: function() {
                return []
            }
        }
    }
}
</script>

<style scoped>
h2{
    color: red;
}
</style>