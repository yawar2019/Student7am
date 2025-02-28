import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  IndiaStates=[{id:1,name:"Telangana"},{id:2,name:"Karnataka"},{id:3,name:"Andhra"},]

  studentForm:FormGroup=new FormGroup({
    firstName:new FormControl("Alice",[Validators.required]),
    lastName:new FormControl(""),
    userName:new FormControl(""),
    city:new FormControl(""), 
    state:new FormControl(""),
    zipCode:new FormControl(""),
    isAgreed:new FormControl(false),
  })


  onSubmit()
  {
    console.log(this.studentForm);
  }
}
