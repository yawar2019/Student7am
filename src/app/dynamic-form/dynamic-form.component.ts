import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit{
form!:FormGroup;

formConfig=[
{

  name:'firstName',
  type:'text',
  label:'First Name',
  value:'',
  validators:{
    required:true,
    minLength:3
  }
},
{

  name:'lastName',
  type:'text',
  label:'Last Name',
  value:'',
  validators:{
    required:true,
    minLength:3
  }
},
{

  name:'userName',
  type:'text',
  label:'User Name',
  value:'',
  validators:{
    required:true,
    minLength:3
  }
},

{

  name:'country',
  type:'dropdown',
  label:'Country',
  value:'',
  options:[
    {key:'US',label:'United States'},
    {key:'UK',label:'United Kingdom'},
    {key:'In',label:'India'}
  ],
  validators:{
    required:true
     
  }
},

{

  name:'gender',
  type:'radio',
  label:'Gender',
  value:'',
  options:[
    {key:'male',label:'Male'},
    {key:'female',label:'Female'},
  ],
  validators:{
    required:true
     
  }
},


]

constructor(private fb:FormBuilder)
{

}
  ngOnInit(): void {
    this.buildForm();
  }

buildForm()
{
  const group:{[key:string]:any}={};

this.formConfig.forEach(control=>{

  const validators=[];
  if(control.validators?.required)
  {
    validators.push(Validators.required)
  }


  if(control.validators?.minLength)
    {
      validators.push(Validators.minLength(control.validators?.minLength))
    }

    group[control.name]=[control.value||'',validators];

})
this.form=this.fb.group(group);

}


}
