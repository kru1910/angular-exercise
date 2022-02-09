import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task2Component } from './MyTasks/task2/task2.component';
import { Task3Component } from './MyTasks/task3/task3.component';

const routes: Routes = [
  {
    path: 'task2',
    component:Task2Component
  },
  {
    path: 'task3',
    component:Task3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
