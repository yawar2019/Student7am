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
EmployeeDelete(id:any)
{
alert(id);
}

}
