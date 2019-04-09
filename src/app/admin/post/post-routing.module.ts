import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListingComponent } from './listing/listing.component';
import { PostCreateComponent } from './create/create.component';
import { PostUpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: PostListingComponent,
    data: { title: 'Posts' }
  },
  {
    path: 'create',
    component: PostCreateComponent,
    data: { title: 'Create new post' }
  },
  {
    path: 'update/:id',
    component: PostUpdateComponent,
    data: { title: 'Update post' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
