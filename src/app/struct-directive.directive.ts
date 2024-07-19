import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructDirective]'
})
export class StructDirectiveDirective {

  constructor(private tempRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

  @Input() set appNot(condition: boolean){
    if(!condition){
        this.viewRef.createEmbeddedView(this.tempRef);
    }
    else{
        this.viewRef.clear();
    }
  }

}
