import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  imports: [CommonModule],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css'
})
export class DirectivesExampleComponent {
isAvailable:unknown;
hero='help';
Cars=['BMW','THAR','TESLA','TATA'];
Sports=[
  {id:11,name:'cricket'},
  {id:12,name:'kabadi'},
  {id:13,name:'hockey'},
  {id:14,name:'chess'}
]

firstObj={
  first:true,
  second:false
  //third:false
}
firstStyle={"color":"red","background-color":"gray"};
}
