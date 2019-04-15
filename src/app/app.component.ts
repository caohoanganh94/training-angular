import { Component } from '@angular/core';
import { User } from './shared/models/user';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/auth.service';
import { fadeAnimation } from './shared/models/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  private title: string = 'My App';
  private currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
