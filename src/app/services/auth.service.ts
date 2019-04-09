import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Cookie } from '../helpers/cookie';

const AUTH_API_URL = 'http://blog-api.local/wp-json/jwt-auth/v1/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(Cookie.getItem('currentUser') || null));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(AUTH_API_URL, { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          Cookie.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    Cookie.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
