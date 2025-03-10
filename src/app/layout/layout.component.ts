import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DirectivesExampleComponent } from '../directives-example/directives-example.component';
import { ParenttoChildComponent } from '../parentto-child/parentto-child.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,HomeComponent,AboutComponent,ContactComponent,DirectivesExampleComponent,ParenttoChildComponent,EmployeeDetailsComponent,RouterLink,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
