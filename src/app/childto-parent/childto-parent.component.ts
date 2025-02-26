import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childto-parent',
  imports: [],
  templateUrl: './childto-parent.component.html',
  styleUrl: './childto-parent.component.css'
})
export class ChildtoParentComponent {
@Input({required:true}) parentdata:string="";
@Output() chilData=new EventEmitter();

sendChildInfo()
{
  this.chilData.emit("Got Child Data");
}

}
