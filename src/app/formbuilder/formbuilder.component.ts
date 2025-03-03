import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  imports: [CommonModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {
stdForm:FormGroup;
IndiaStates=[{id:1,name:"Telangana"},{id:2,name:"Karnataka"},{id:3,name:"Andhra"},]

constructor(private fbbuilder:FormBuilder)
{
this.stdForm=this.fbbuilder.group({
  firstName:['Radha',[Validators.required,Validators.maxLength(6)]],
  lastName:'',
  userName:'',
  city:'', 
  state:'',
  zipCode:'',
  isAgreed:false,
})
}

onSubmit()
{
  console.log(this.stdForm);
}
}
