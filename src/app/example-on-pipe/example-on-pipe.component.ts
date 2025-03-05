import { LowerCasePipe, TitleCasePipe, UpperCasePipe,CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example-on-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,DatePipe],
  templateUrl: './example-on-pipe.component.html',
  styleUrl: './example-on-pipe.component.css'
})
export class ExampleOnPipeComponent {
Fname='liga';
Lname='DAVID';
MiddleName='DoMIno';
Price=2221872.582925433;
currenDate:Date=new Date();
}
