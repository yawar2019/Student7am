import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponentComponent } from '../user-component/user-component.component';

@Component({
  selector: 'app-contact',
  imports: [RouterLink,RouterOutlet,UserComponentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
username="Ravi";
}
