import { Routes } from '@angular/router';
import { ExempleComponent } from '../components/exemple/exemple.component';
import { MessageComponent } from '../components/message/message.component';
import { TaskComponent } from '../components/task/task.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';
export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    { path: 'exemple', component: ExempleComponent },
    { path: 'message', component: MessageComponent },
    { path: 'task', component: TaskComponent },
    { path: 'addTask', component: AddTaskComponent },
    { path: 'taskDetail/:id', component: TaskDetailComponent },
     // Redirection par défaut vers exemple
];