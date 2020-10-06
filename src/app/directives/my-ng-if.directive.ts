import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective{
  @Input('appMyNgIf') set createContent(condition: boolean) {
    condition ? this.viewContainer.createEmbeddedView(this.template) : this.viewContainer.clear();
  }

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ){ }
}
