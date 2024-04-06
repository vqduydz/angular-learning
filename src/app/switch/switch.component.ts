import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  user = '';
  onSelect(e: Event) {
    this.user = (e.target as HTMLSelectElement).value;
  }
}
