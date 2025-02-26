import { Component } from '@angular/core';
import { ChildtoParentComponent } from '../childto-parent/childto-parent.component';

@Component({
  selector: 'app-parentto-child',
  imports: [ChildtoParentComponent],
  templateUrl: './parentto-child.component.html',
  styleUrl: './parentto-child.component.css'
})
export class ParenttoChildComponent {
username='shivam agrawal';
message='';

showMessage()
{
  console.log('i have receive message from child '+this.message);
}
}
