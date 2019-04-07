import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
