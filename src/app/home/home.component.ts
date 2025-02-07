import { Component } from '@angular/core';

@Component({
  selector: 'app-home,[app-home],.app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
a:number=10;
hero:string="spiderman";
choice:string="true";
isAvailable:boolean=true;
title:string="Angular";
google="http://www.google.com";


carlist=['BMW','TESLA','AUDI','THAR']
sports=[
  {
  id:11,
  name:'Dhoni'
},

{
  id:22,
  name:'Ganguly'
},
{
  id:33,
  name:'Virat'
},
]

hitme(a:any)
{
  alert('some one hitted me'+a);
}
}


