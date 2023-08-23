import { defineStore } from 'pinia';
import Task from "~/models/todoModel";

export type RootState = {
  tasks: Task[];
};



export const useTodoStore = defineStore('todoStore', {

  state: (): RootState => ({
    tasks: []
  }),

  getters:{
    allTasks(): Task[] {
      return this.tasks;
    },
    completedTasks(): Task[] {
      return this.tasks.filter((task) => task.isFinished);
    },
    leftTasks(): Task[] {
      return this.tasks.filter((task) => !task.isFinished);
    },
  },

  actions: {
    addTask(content: string){
      this.tasks.push({_id: this.tasks.length++, content: content, isFinished: false})
    },

    removeTask(id: number): void{
      this.tasks = this.tasks.filter((t) => t._id !== id);
    }
  }
});

