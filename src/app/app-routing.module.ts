import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonComponent } from './lesson/lesson.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  {path: '', component: LessonComponent, children: [
    {path: 'add', component: ModalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
