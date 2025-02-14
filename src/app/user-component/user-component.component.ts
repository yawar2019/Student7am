import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit {
  user={
    id:"",
    name:""
  }


  constructor(private route:ActivatedRoute)
{
 
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
