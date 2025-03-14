import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ViewChild2Component } from '../view-child2/view-child2.component';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [ViewChild2Component],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent implements 
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
OnChanges
{
age=0;
a=0;
constructor()
{
  this.age=18;
  console.log('Constructor Called:'+this.age);
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called:'+this.age);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called:'+this.age);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called:'+this.age);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called:'+this.age);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called:'+this.age);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called:'+this.age);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck Called:'+this.age);
  }
  ngOnInit(): void {
    console.log('ngOnInit Called:');
  
  }


  updateAge()
  {
    this.age=21;
  }

}

