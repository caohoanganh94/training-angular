import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';

const apiUrl = 'http://blog-api.local/wp-json/wp/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postsApi = `${apiUrl}/posts`;
  private usersApi = `${apiUrl}/users`;
  private tagsApi = `${apiUrl}/tags`;
  private categoriesApi = `${apiUrl}/categories`;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(params): Observable<any> {
    const orderData = params.order.split(',');
    const url = `${this.postsApi}?per_page=${params.limit}&order=${orderData[1]}&order_by=${orderData[1]}&page=${params.page}&search=${params.search}`;

    return this.http.get<any>(url).pipe(
      map(posts => {
        // Authors
        this.getUsers().subscribe(usersRes => {
          let authors = {};
          usersRes.map(user => authors[user.id] = user.name);

          // Categories
          this.getCategories().subscribe(categories => {
            // Tags
            this.getTags().subscribe(tags => {
              posts.map(post => {
                post.author = authors[post.author];
                post.categories = _.filter(categories, category => post.categories.includes(category.id));
                post.tags = _.filter(tags, tag => post.tags.includes(tag.id));
              });
            });
          });
        });

        return posts;
      }),
      catchError(this.handleError<any>('getPosts', []))
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersApi).pipe(
      catchError(this.handleError<any>('getUsers', []))
    );
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.categoriesApi}?per_page=100`).pipe(
      catchError(this.handleError<any>('getCategories', []))
    );
  }

  getTags(): Observable<any> {
    return this.http.get<any>(`${this.tagsApi}?per_page=100`).pipe(
      catchError(this.handleError<any>('getTags', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
