<template>
  <div>
<!--    <NuxtWelcome />-->
    <h1>Hello, world!</h1>
    <div class="container">
      <ToDoInput />
      <ToDoList />
    </div>
  </div>
</template>

<script setup>
import ToDoInput from "@/components/ToDoInput.vue";
import ToDoList from "@/components/ToDoList.vue";
</script>

<style lang="scss" src="./styles.scss"></style>
