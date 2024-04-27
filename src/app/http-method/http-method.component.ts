import { Component } from '@angular/core';
import { HttpServicesService } from '../Services/http-services.service';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-http-method',
  templateUrl: './http-method.component.html',
  styleUrl: './http-method.component.scss',
})
export class HttpMethodComponent {
  users: any[] = [];
  editModelOpen: boolean = false;
  currentUser: any = {};

  constructor(
    private httpServer: HttpServicesService,
    private fb: FormBuilder
  ) {}

  getUser() {
    this.httpServer.getUser().subscribe((data) => {
      console.log(data);
      this.users = data.data;
    });
  }

  ngOnInit() {
    this.getUser();
  }

  formData = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    active: ['true', Validators.required],
  });

  createUser() {
    this.httpServer.createUser(this.formData.value).subscribe((data) => {
      console.log(data);
      if (data.error) return;
      this.getUser();
    });
  }

  edit(currentUser: any) {
    this.editModelOpen = true;
    this.currentUser = currentUser;
  }

  closeUpdateModel() {
    this.editModelOpen = false;
    this.getUser();
  }

  deleteUser(id: number) {
    this.httpServer.deleteUserById(id).subscribe((data) => {
      console.log(data);
      this.getUser();
    });
  }
}
