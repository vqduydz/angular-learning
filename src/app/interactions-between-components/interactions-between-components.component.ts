import { Component } from '@angular/core';

@Component({
  selector: 'app-interactions-between-components',
  templateUrl: './interactions-between-components.component.html',
  styleUrl: './interactions-between-components.component.scss',
})
export class InteractionsBetweenComponentsComponent {
  name?: string;

  reply(name: string) {
    this.name = name;
  }
}
