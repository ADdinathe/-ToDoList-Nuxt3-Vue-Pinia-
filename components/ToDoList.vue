<script setup lang="ts">
import {useTodoStore} from "~/store/counter";
import {computed, Ref} from "vue";
import Task from "~/models/todoModel";

const todoStore = useTodoStore();
const todos: Ref<Task[]> = computed(() => todoStore.leftTasks)

const removeTodo = (todoID: number): void => {
  todoStore.removeTask(todoID);
};
</script>

<template>
  <div class="todo-list">

    <h2 class="list-title">ToDo List</h2>
    <h4 v-if="todos.length === 0" class="plug">Empty list</h4>
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        <span class="text"> {{ todo.content }}</span>
        <button class="button" @click="removeTodo(todo._id)">Remove</button>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" src="./ToDoList.scss"></style>
