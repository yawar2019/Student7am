import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpletemplateform',
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './simpletemplateform.component.html',
  styleUrl: './simpletemplateform.component.css'
})
export class SimpletemplateformComponent {

  IndiaStates=[{id:1,name:"Telangana"},{id:2,name:"Karnataka"},{id:3,name:"Andhra"},]
  studentObj:any={
    firstName:"",
    lastName:"",
    userName:"",
    city:"",
    state:"",
    zipCode:"",
    isAgreed:false
  }
onSubmit()
{
  console.log(this.studentObj);
}

}
