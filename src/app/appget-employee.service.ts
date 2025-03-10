import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IEmployee{
  EmpId:0,
  EmpName:'',
  EmpSalary:0
}

@Injectable({
  providedIn: 'root'
})
export class AppgetEmployeeService {
url="https://localhost:44312/";


Employee:IEmployee={
  EmpId: 0,
  EmpName: '',
  EmpSalary: 0
}

AllEmployees:IEmployee[]=[];

constructor(private http:HttpClient)
 { 


}

getEmployees():Observable<any>
{

  return this.http.get(this.url+'api/EmployeeApi');

}

SaveEmployees(Employee:IEmployee):Observable<any>
{

  return this.http.post(this.url+'api/EmployeeApi',Employee);

}


}
