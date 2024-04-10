import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighLight = '';

  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = this.appHighLight;
    // console.log('Constructor HighLightDirective', this.appHighLight);
  }

  ngOnInit() {
    this.el.nativeElement.style.color = this.appHighLight || 'blue';
    console.log('ngOnInit HighLightDirective', this.appHighLight);
  }
}
