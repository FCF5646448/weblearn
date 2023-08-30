<template>
  <div class="hello">
    <h1>vue学习</h1>
    <p>message: {{ message }} </p>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <div v-bind:id="dynamicId"></div>
    <p>{{ num + 10 }}</p>
    <p>{{ ok ? 'Yes': 'No' }} </p>
    <p>{{ message.split('').reverse().join(',') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message: "学习",
      rawHtml: "<a href='http://www.itbaizhan.com/'>百战</a>",
      dynamicId: 10001,
      num: 10,
      ok: false,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
