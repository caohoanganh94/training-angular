import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListingComponent } from './listing/listing.component';
import { PostCreateComponent } from './create/create.component';
import { PostUpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    PostListingComponent,
    PostCreateComponent,
    PostUpdateComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }

console.log('Post Module loaded!');
