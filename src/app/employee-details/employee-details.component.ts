import { Component, OnInit } from '@angular/core';
import { AppgetEmployeeService, IEmployee } from '../appget-employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  constructor(public service:AppgetEmployeeService)
  {

  }
  ngOnInit(): void {
    this.service.getEmployees().subscribe(data=>{
      this.service.AllEmployees=data;
    })


  }

  EmployeeAdd(Employee:IEmployee)
  {
    this.service.SaveEmployees(Employee).subscribe(data=>{
       
    this.service.getEmployees().subscribe(data=>{
      this.service.AllEmployees=data;
    })


  })

  }

  EmployeeEdit(id:any){
    this.service.Employee=this.service.AllEmployees.find(x=>x.EmpId==id) as IEmployee;
  }

EmployeeDelete(id:any)
{
   let result=confirm("Do you want to Delete?");
   if(result)
  {
this.service.DeleteEmployee(id).subscribe(data=>{
  this.service.getEmployees().subscribe(data=>{
    this.service.AllEmployees=data;
  })
})
}
}

}
