import { Component, Input } from '@angular/core';

@Component({
  selector: 'svm-luxury-cta',
  imports: [],
  templateUrl: './luxury-cta.html',
  styleUrl: './luxury-cta.css',
})
export class LuxuryCta {
  @Input() showAdmissions = true;
  @Input() showEnquiry = true;
  @Input() showDiscover = true;
  @Input() showBackHome = true;

  @Input() title = 'Begin your child’s next chapter.';
  @Input() description =
    'Discover a thoughtful learning environment where curiosity, character and confidence grow together.';
}