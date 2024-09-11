import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {
    this.taskForm = this.fb.group({
      titre: [''],
      description: ['']
    });
  }
  addTask() {
    this.taskService.addTask(this.taskForm.value);
    this.router.navigate(['/task']);
  }
  goToRoute(route: string) {
    
    this.router.navigate([route]);
  }
  
}
