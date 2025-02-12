import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home,[app-home],.app-home',
  imports: [FormsModule],
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

fun2(event:any)
{
  console.log(event);
}

firstcss="first";
firstcssarr=["first","second","third"];
firstobj={
  first:false,
  second:true,
  third:true
}
hastrue=true;
firstStyle={"color":"red","background-color":"cyan"}
secondStyle=this.hastrue?"green":"red";
Username='shivam';


constructor(private router:Router)
{

}




GotoAbout()
{
 // this.router.navigateByUrl('/about');
 this.router.navigate(['/about',1,'Srija']);
}

}


