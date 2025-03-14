import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewChild2Component } from '../view-child2/view-child2.component';
import { NgContentExpComponent } from '../ng-content-exp/ng-content-exp.component';

@Component({
  selector: 'app-view-child',
  imports: [ViewChild2Component,NgContentExpComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
//First Example
 //@ViewChild('inputE1') input!:ElementRef;

 @ViewChildren('inputE1',{}) input!:QueryList<ElementRef>;

  name:string='';
  show()
  {
   this.input.forEach(element=>
{
this.name+=element.nativeElement.value+' ';
}
   )
  }

//Second Example
// @ViewChild(ViewChild2Component) Child!:ViewChild2Component;
// show()
//   {
//     console.log(this.Child.ExamResult);
//     console.log(this.Child.ShowChildExample());
//   }
 }

// In angular @viewChild decorator help to allow parent Component to Access Child
//Component,directives ,DomElements directly

//purpose
//Access Child Component/Element
//@viewChild Enable parent component to access or interact with Child Componet 
//Direct Interaction Parent Component can access child component methodes ,properties 
//event manuplate it

//Template Reference Variable with that access variables or dom Elements 

