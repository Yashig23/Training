import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirectiveDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.background = 'yellow';
   }

}
