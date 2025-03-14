import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-child2',
  imports: [],
  templateUrl: './view-child2.component.html'
 
})
export class ViewChild2Component implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
@Input() parentData=0;
  ExamResult='Pass';
  ShowChildExample()
  {
    console.log('Child Method is Called');
  }

}
