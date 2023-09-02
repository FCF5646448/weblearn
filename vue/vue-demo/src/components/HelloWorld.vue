<template>
  <div class="hello">
    <h1>vue学习</h1>
    <h2>文本渲染</h2>
    <div>
      <p>message: {{ message }} </p>
      <p>{{ rawHtml }}</p>
      <p v-html="rawHtml"></p>
      <div v-bind:id="dynamicId"></div>
      <p>{{ num + 10 }}</p>
      <p>{{ ok ? 'Yes': 'No' }} </p>
      <p>{{ message.split('').reverse().join(',') }}</p>
    </div>
    
    <h2>条件渲染</h2>
    <div>
      <p v-if="flag">我是孙猴子</p>
      <p v-else>你是傻猴子</p>
      <p v-show="flag">你真是那只孙猴子?</p>
    </div>

    <h2>列表渲染</h2>
    <ul>
      <li v-for="(item, index) in newsList" :key="index"> {{ index + item.title }} </li>
    </ul>

    <h2>事件处理</h2>
    <div>
      <button v-on:click="counter += 1"> 点击counter=：{{ counter }} </button>
      <button @click="clickHandle">按钮</button>
      <p>{{ message }}</p>
      <button @click="say('hi')">say hi</button>
      <button @click="say('what')">say what</button>
      <ul>
        <li 
          v-for="(item, index) in names" 
          :key="index" 
          @click="clickNameHandle(item)">
          {{ item }}
        </li>
      </ul>
    </div>

    <h2>输入绑定</h2>
    <div>
      <input type="text" v-model.lazy="username" />
      <input type="text" v-model.trim="password" />
      <p>{{ username }},{{ password }}</p>
      <button @click="clickGetUserName">获取用户名</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: "学习",
      rawHtml: "<a href='http://www.itbaizhan.com/'>百战</a>",
      dynamicId: 10001,
      num: 10,
      ok: false,
      flag: true,
      newsList: [
        {
          id: 1001,
          title: "今日新闻1"
        },
        {
          id: 1002,
          title: "今日新闻2"
        },
        {
          id: 1003,
          title: "今日新闻3"
        }
      ],
      counter: 0,
      names:["iwen","ime","frank"],
      username: "xxx",
      password: "",
    }
  },
  methods: {
    clickHandle(event) {
      // 在事件中，读取data中的属性，是需要使用this.属性
      this.message += "h";
      // 这里能把event正常打印出来
      console.log(event);
    },
    say(data) {
      console.log(data);
    },
    clickNameHandle(item) {
      console.log(item);
      this.message = item;
    },
    clickGetUserName() {
      console.log(this.username);
    }
  },
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
