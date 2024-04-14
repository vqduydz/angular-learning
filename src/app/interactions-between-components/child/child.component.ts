import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() name: string = '';
  @Output() eventFromChild: EventEmitter<any> = new EventEmitter();

  callParent(name: string) {
    this.eventFromChild.emit(name);
  }
}
