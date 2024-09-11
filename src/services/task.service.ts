import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private myTasks: Array<{id: number; titre: string; description: string }> = [{id: 0, titre: 'Task 1', description: 'Description 1'}];
  currentId = 1;
  getTasks() {
    return this.myTasks;
  }

  addTask(task: { titre: string; description: string }) {
    const newTask = { id: this.currentId++, ...task };
    this.myTasks.push(newTask);
  }
  getTaskById(id: number) {
    return this.myTasks.find(task => task.id === id);
  }
  
}