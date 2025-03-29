import { Component } from '@angular/core';
import { listData, taskData } from './task-list';

@Component({
  selector: 'app-proj-one',
  templateUrl: './proj-one.component.html',
  styleUrls: ['./proj-one.component.scss'],
})
export class ProjOneComponent {
  taskList = listData;

  newTask: string = null;

  constructor() {}

  addNewTask() {
    console.log('....', this.newTask);
    let taskLength = this.taskList.length;
    let lastTask = this.taskList[taskLength - 1];

    let task = {
      id: lastTask.id + 1,
      name: this.newTask,
    };
    this.taskList.push(task);
    this.newTask = null;
  }

  editTask(task: taskData) {
    task.isEditMode = !task.isEditMode;
  }

  deleteTask(task: taskData) {
    this.taskList = this.taskList.filter((item) => item.id !== task.id);
  }
}
