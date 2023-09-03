<template>
    <h3>swiper滚动组件</h3>
    <Swiper :modules="modules" :pagination="{ clickable: true }">
        <SwiperSlide>
            <img src="../assets/v1.png" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../assets/v2.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../assets/v3.png" alt=""/>
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';


export default {
    name: "swiperComponent",
    data() {
        return {
            modules: [ Pagination ],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    }
}
</script>

<style scoped>
h3{
    color: green;
}
img {
    width: 100%;
}
</style>