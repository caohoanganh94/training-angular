import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class PostListingComponent implements OnInit {
  private posts: any[] = [];
  private users;
  private settings = {
    plural: 'Posts',
    singular: 'Post',
    shows: [10, 20, 30],
    notFoundMessage: 'No posts found',
    selected: [],
    selectedAll: false,
    showing: '',
    loading: false,
    searchingTime: 600
  };
  private params: any = {
    page: 1,
    order: 'title,asc',
    search: '',
    limit: this.settings.shows[0]
  };
  private timer: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  onChangeLimit(event) {
    this.params.limit = event;
    this.getPosts();
  }

  onChangeSearch(search) {
    if(search.value !== this.params.search) {
      this.params.search = search.value;
      this.settings.loading = true;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        this.getPosts();
      }, this.settings.searchingTime);
    }
  }

  onChangeOrder(field) {
    const orderData = this.params.order.split(',');
    const curField = orderData[0];
    const curType = orderData[1];
    let type = 'asc';

    if (curField == field && curType == type) {
      type = 'desc';
    }

    this.params.order = `${field},${type}`;
    this.getPosts();
  }

  getPosts() {
    this.settings.loading = true;
    this.apiService.getPosts(this.params).subscribe(posts => {
      this.posts = posts;
      this.settings.loading = false;
    });
  }

  getUsers() {
    this.apiService.getUsers().subscribe(users => {
      let usersArr = {};
      users.map(user => usersArr[user.id] = user.name);
      this.users = usersArr;
      this.getPosts();
    });
  }

  isSelected (id) {
    return this.settings.selected.includes(id);
  }
}
