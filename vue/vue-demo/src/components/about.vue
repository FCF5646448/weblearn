<template>
    <h3> 关于 </h3>
    <RouterLink to="/about/info">关于信息</RouterLink> | 
    <RouterLink to="/about/us">关于我们</RouterLink>
    <RouterView></RouterView>
</template>

<script>
export default {
    name: 'AboutView',
}
</script>