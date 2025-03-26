import { Component, OnInit } from '@angular/core';
import { concatMap, delay, interval, map, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-rxjx-example',
  imports: [],
  templateUrl: './rxjx-example.component.html',
  styleUrl: './rxjx-example.component.css'
})
export class RxjxExampleComponent  {

  constructor()
  {
    // this.fetchData().then((result)=>{
    //   console.log(result);
    // });

    //this.ExampleObservable();
    //this.ExampleObservable_error();
    this.OperatorExample();
   //this.operatorexample2();
  // this.OperatorExample4();
  }
// ngOnInit(): void {
//   this.fetchData();
// }


fetchData()
{
  let age=12;
  return new Promise((resolve,reject)=>{
if(age>=18)
{
resolve('Age is Successfully Variefied');
}
else{
  reject('Error Occured')
;}
  })
}


ExampleObservable()
{
  let observable=new Observable((subs)=>{

    subs.next("my first value of Observable");
    
    subs.next("my second value of Observable");
  }
  )
  observable.subscribe(x=>console.log(x));

}

ExampleObservable_error()
{
  let observable=new Observable((subs)=>{
try{
    subs.next("my first value of Observable");
    subs.next("my second value of Observable");
    subs.complete();
  }
  catch(e)
  {
    subs.error(e);
  }
}
  )
  observable.subscribe(x=>console.log(x));

}


OperatorExample()
{
  const number=of(1,2,3,4,5);
  const res=number.pipe(
  map(number=>number*2),
  take(3)
  )

  res.subscribe(x=>console.log(x));
}

operatorexample2()
{
  const intervalObserable= interval(5000).pipe(take(3));
  intervalObserable.subscribe({next:value=>console.log('Emitted Value',value),
    complete:()=>console.log('Observale Completed')


  })
}

OperatorExample4()
{
  const num=of(1,2,3);
const result=num.pipe(

  concatMap(value=>of(`${value})`).pipe(delay(20000)))
)
result.subscribe(x=>console.log(x));
}

}
///next it is use to send values like num,string,object
//complete indicate next method to complete works
//error it is used to notify about error