import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuOpen = false;

  constructor(public languageService: LanguageService) {}

  closeMenu(): void {
    this.menuOpen = false;
  }

  changeLanguage(language: 'en' | 'hi'): void {
    this.languageService.setLanguage(language);
  }
}