import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ImageCardComponent } from '../../shared/components/image-card/image-card.component';

import { classes, gallery, toppers } from '../../core/data/school.data';
import { HOME_TEXT } from '../../core/data/home-text';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SectionTitleComponent,
    ImageCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  classes = classes;
  gallery = gallery;
  toppers = toppers;

  constructor(
    public languageService: LanguageService
  ) {}

  get text() {
    return HOME_TEXT[this.languageService.language()];
  }
}