import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-learning';

  name: string | undefined;
  resetName() {
    this.name = undefined;
  }
  ngOnInit() {}
}
