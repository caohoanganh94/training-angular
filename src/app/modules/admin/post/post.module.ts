import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostListingComponent } from './listing/listing.component';
import { PostCreateComponent } from './create/create.component';
import { PostUpdateComponent } from './update/update.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PostListingComponent,
    PostCreateComponent,
    PostUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PostRoutingModule
  ]
})
export class PostModule { }
