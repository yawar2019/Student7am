import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signalexample',
  imports: [CommonModule],
  templateUrl: './signalexample.component.html',
  styleUrl: './signalexample.component.css'
})
export class SignalexampleComponent {
a=signal(10);
b=signal(20);

Cars=signal(["BMW","TOYTO","Duster"]);

user=signal({name:'abhijit',salary:12345})
 

setSignal()
{
  //this.b.set(this.b()+1);
  this.b.update(preval=>preval+1);
}

doubleOfB=computed(()=>this.b()*2)

updateName()
{
  this.user.set({...this.user(),name:'Arun'});
}

isVisible=signal(true);
toggle()
{
this.isVisible.set(!this.isVisible());
}
}