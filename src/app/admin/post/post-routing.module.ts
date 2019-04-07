import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { PostListingComponent } from './listing/listing.component';
import { PostCreateComponent } from './create/create.component';
import { PostUpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListingComponent,
    canActivate: [AuthGuard],
    data: { title: 'Posts' }
  },
  {
    path: 'posts/create',
    component: PostCreateComponent,
    canActivate: [AuthGuard],
    data: { title: 'Create new post' }
  },
  {
    path: 'posts/update/:id',
    component: PostUpdateComponent,
    canActivate: [AuthGuard],
    data: { title: 'Update post' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
