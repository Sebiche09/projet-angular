import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  constructor(private router: Router, private taskService: TaskService) {}
  myTasks ={};
  seeDetail(route: string) {
    this.router.navigate([route]);
  }
  getTasks() {
    return this.taskService.getTasks();
  }
  goToRoute(route: string) {
    
    this.router.navigate([route]);
  }
}
