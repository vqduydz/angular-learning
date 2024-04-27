import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpServicesService } from '../../Services/http-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrl: './update-model.component.scss',
})
export class UpdateModelComponent {
  @Input() currentUser: any = {};
  @Output() customEvent: EventEmitter<any> = new EventEmitter();

  formData!: FormGroup;
  constructor(
    private httpServer: HttpServicesService,
    private fb: FormBuilder
  ) {}

  emitEvent() {
    this.customEvent.emit();
  }

  updateUser() {
    this.httpServer
      .updateUserById({ id: this.currentUser.id, ...this.formData.value })
      .subscribe((data) => {
        console.log(data);
        this.emitEvent();
      });
  }

  ngOnInit() {
    this.formData = this.fb.group({
      name: [this.currentUser.name, Validators.required],
    });
  }
}
