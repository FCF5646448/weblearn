<template>
  <div id="App">
    <h1>My To-Do List</h1>
    <to-do-form @sendInput="addToDo"></to-do-form>
    <ul>
      <li v-for="(item, index) in ToDoItems" :key="index">
        <to-do-item :label="item.label" :done="item.done" :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue';
import ToDoForm from './components/ToDoForm.vue';
import uniqueId from "lodash.uniqueid";

export default {
  name: 'App',
  components: {
    ToDoItem, ToDoForm,
  },
  data() {
    return {
      ToDoItems: [
        {id: uniqueId("todo-"), label: "Learn Vue", done: false},
        {id: uniqueId("todo-"), label: "Create a Vue project with the CLI", done: true},
        {id: uniqueId("todo-"), label: "Have Fun", done: true},
        {id: uniqueId("todo-"), label: "Create a to-do list", done: false},
      ],
    };
  },
  methods: {
    addToDo(toDoLabel) {
      this.ToDoItems.push({id:uniqueId("todo-"), label:toDoLabel, done:false})
    },
  },
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
