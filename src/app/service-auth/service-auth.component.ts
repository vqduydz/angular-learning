import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-service-auth',
  templateUrl: './service-auth.component.html',
  styleUrl: './service-auth.component.scss',
})
export class ServiceAuthComponent {
  constructor(public authService: CommonService) {}

  login() {
    this.authService.login();
    // console.log(this.isLoggedIn);
  }
  logout() {
    this.authService.logout();
    // console.log(this.isLoggedIn);
  }
}
