import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjOneComponent } from './proj-one.component';

const routes: Routes = [
  {
    path: '',
    component: ProjOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjOneRoutingModule {}
