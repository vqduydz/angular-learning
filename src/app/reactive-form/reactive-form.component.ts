import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  // formData: FormGroup = new FormGroup({
  //   user: new FormControl(''),
  //   password: new FormControl(''),
  // });

  formData = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private common: CommonService, private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    this.common.submitData(this.formData.value);
  }
}
