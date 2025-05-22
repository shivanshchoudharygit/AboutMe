import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true, // Make sure this is a standalone component
  imports: [CommonModule], // <-- this is critical for *ngIf and *ngFor
  templateUrl: './about.component.html',
})
export class AboutComponent {
  showSkills = true;
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];
}
