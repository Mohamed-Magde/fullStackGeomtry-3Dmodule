import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CubeRoutingModule } from './cube-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [CommonModule, CubeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CubeModule {}
