import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  imports: [CommonModule],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css'
})
export class DirectivesExampleComponent {
isAvailable=true;
}
