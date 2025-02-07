import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  // templateUrl: './app.component.html',
  template: `<p>Hello Brother {{studentName}}</p>
             <button>click me</button>
             <h1>great</h1>
             <input/>`,
  //styleUrl: './app.component.css'
styles:[`
  p
  {
  color:skyblue
  }
   h1{
   color:red
   }
  `]
})
export class AppComponent {
  title = 'Student7am batch';
  studentName='Ravi';
  
}












/// npm i -g @angular/cli@17

//npm going to provide you angular commands


//commands
//ng new projectname
//ng build
//ng serve
//ng generate component home
//ng g c home


//ng update @angular/cli@18