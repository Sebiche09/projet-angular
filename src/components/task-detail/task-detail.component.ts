import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit{
  task: any;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router:Router) {}
  goToRoute(route: string) {
    
    this.router.navigate([route]);
  }

  ngOnInit() {
    // Récupère l'ID à partir des paramètres de la route
    const taskId = Number(this.route.snapshot.paramMap.get('id'));

    // Utilise l'ID pour récupérer la tâche correspondante
    this.task = this.taskService.getTaskById(taskId);
  }
}
