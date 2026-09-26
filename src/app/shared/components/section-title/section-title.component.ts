import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() text = '';
  @Input() center = false;
}
