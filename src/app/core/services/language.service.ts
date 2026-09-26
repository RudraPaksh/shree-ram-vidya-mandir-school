import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'hi';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language = signal<Language>('en');

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  toggleLanguage(): void {
    this.language.update(current =>
      current === 'en' ? 'hi' : 'en'
    );
  }

  isHindi(): boolean {
    return this.language() === 'hi';
  }
}