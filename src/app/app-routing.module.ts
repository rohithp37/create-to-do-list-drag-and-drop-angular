import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashbaordComponent } from './views/dashboard/dashboard.component';
import { TaskFormComponent } from './views/task-form/task-form.component';

const routes: Routes = [
  {
    path: '',
    component: AppDashbaordComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
