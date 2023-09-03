<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MyComponent/>
  <my-component 
    :title="title" 
    :age="age" 
    name="fcf" 
    :colors="colors"></my-component>
  <my-component2 @onEvent="getDataFromMyCompenent2"></my-component2>
  <p> {{ dataFromMyCompenent2 }}</p>
  <my-component3/>
  <swiper-component/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/myComponents.vue'
import MyComponent2 from './components/myComponent2.vue'
import MyComponent3 from './components/myComponent3.vue'
import SwiperComponent from './components/swiperComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, 
    MyComponent,
    MyComponent2,
    MyComponent3,
    SwiperComponent,
  },
  data() {
    return {
      title: "我是一个标题",
      age: 20,
      colors: ["red", "yellow", "white"],
      dataFromMyCompenent2: ""
    }
  },
  methods: {
    getDataFromMyCompenent2(data) {
      console.log(data);
      this.dataFromMyCompenent2 = data;
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
