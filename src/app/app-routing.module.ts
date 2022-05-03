import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { SortFormComponent } from './sort-form/sort-form.component';

const routes: Routes = [
  {path: '', component: SortFormComponent},
  {path: 'addform', component: AddFormComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
