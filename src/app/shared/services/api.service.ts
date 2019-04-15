import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const apiUrl = 'http://blog-api.local/wp-json/wp/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postsApi = `${apiUrl}/posts`;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(params): Observable<any> {
    const orderData = params.order.split(',');
    const url = `${this.postsApi}?per_page=${params.limit}&order=${orderData[1]}&order_by=${orderData[1]}&page=${params.page}&search=${params.search}`;

    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>('getPosts', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
