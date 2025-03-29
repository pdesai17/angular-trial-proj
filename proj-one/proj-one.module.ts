import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjOneComponent } from './proj-one.component';
import { ProjOneRoutingModule } from './proj-one-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjOneComponent],
  imports: [CommonModule, ProjOneRoutingModule, FormsModule],
})
export class ProjOneModule {}
