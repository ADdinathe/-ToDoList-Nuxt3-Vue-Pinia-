<template>
  <div class="todo-input">
    <h1 class="title">ToDo App</h1>
    <form class="form" @submit.prevent="addTodo">
      <label for="todo" class="input-label">ToDo App</label>
      <input id="todo" name="todo" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
      <button @click="addTodo">Add ToDo</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useTodoStore} from "~/store/counter";

const todoStore = useTodoStore();
const newTodo = ref('');

function addTodo(): void {
  if (newTodo.value.trim() !== '') {
    todoStore.addTask(newTodo.value);
    newTodo.value = '';
  }
}
</script>

<style lang="scss" src="./ToDoInput.scss"></style>
