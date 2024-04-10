import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
  }

  constructor() {}
}
