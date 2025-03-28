import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDeactivate } from '../app-guard.service';
@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit,IDeactivate {
  user={
    id:"",
    name:""
  }

@Input() parentData:string="";
  constructor(private route:ActivatedRoute)
{
 
}
  canExit():boolean
  {
if(confirm("Are you sure you want to exit or not"))
{
  return true;
}
else{
  return false;
}
  }
 
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.user={
        id:data['id'],
        name:data['name']
      }
    })
  }


}
