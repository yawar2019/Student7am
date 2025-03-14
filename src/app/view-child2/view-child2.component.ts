import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child2',
  imports: [],
  templateUrl: './view-child2.component.html'
 
})
export class ViewChild2Component {

  ExamResult='Pass';
  ShowChildExample()
  {
    console.log('Child Method is Called');
  }

}
