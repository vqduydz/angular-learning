import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss',
})
export class IfComponent {
  age: number | undefined;
  resetAge() {
    this.age = undefined;
  }
}
