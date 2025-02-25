import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childto-parent',
  imports: [],
  templateUrl: './childto-parent.component.html',
  styleUrl: './childto-parent.component.css'
})
export class ChildtoParentComponent {
@Input() parentdata:string="";
}
