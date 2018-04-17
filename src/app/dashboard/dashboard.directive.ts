import { Directive,  Input, TemplateRef, ViewContainerRef} from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';

@Directive({
  selector: '[appDashboard]'
})
export class DashboardDirective {

  constructor(
    private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  @Input() set appDashboard(condition: boolean) {
      if (condition) {
        this.vcRef.createEmbeddedView(this.templateRef);

    } else {
        this.vcRef.clear();

    }
  }

}
