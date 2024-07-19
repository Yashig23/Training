import { TemplateRef, ViewContainerRef } from '@angular/core';
import { StructDirectiveDirective } from './struct-directive.directive';

describe('StructDirectiveDirective', () => {
  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;
  it('should create an instance', () => {
    const directive = new StructDirectiveDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
