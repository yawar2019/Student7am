import { LowerCasePipe, TitleCasePipe, UpperCasePipe,CurrencyPipe, DatePipe,SlicePipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeCasePipe } from '../change-case.pipe';

@Component({
  selector: 'app-example-on-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,DatePipe,SlicePipe,PercentPipe,ChangeCasePipe],
  templateUrl: './example-on-pipe.component.html',
  styleUrl: './example-on-pipe.component.css'
})
export class ExampleOnPipeComponent {
Fname='liga';
Lname='DAVID';
MiddleName='DoMIno';
Price=2221872.582925433;
currenDate:Date=new Date();
fruits:string[]=['apple','mango','banana'];
temp=0.23;
}
