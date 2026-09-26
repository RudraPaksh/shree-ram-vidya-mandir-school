import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(
    public languageService: LanguageService
  ) {}

  get isHindi(): boolean {
    return this.languageService.language() === 'hi';
  }
}