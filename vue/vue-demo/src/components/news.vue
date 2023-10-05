<template>
    <h3> 新闻</h3>
    <ul>
        <li><RouterLink to="/newsDetails/百度">百度新闻</RouterLink> </li>
        <li><RouterLink to="/newsDetails/网易">网易新闻</RouterLink></li>
        <li><RouterLink to="/newsDetails/腾讯">腾讯新闻</RouterLink></li>
    </ul>
</template>

<script>
export default {
    name: "newsView"
}
</script>