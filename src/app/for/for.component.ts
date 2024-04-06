import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
})
export class ForComponent {
  fruits: any[] = [
    { id: 1, name: 'Cam' },
    { id: 2, name: 'Xoài' },
    { id: 3, name: 'Táo' },
    { id: 4, name: 'Nho' },
  ];
}
