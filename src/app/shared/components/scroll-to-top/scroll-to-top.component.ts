import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {
  visible = false;
  @HostListener('window:scroll')
  onScroll(): void { this.visible = window.scrollY > 500; }
  top(): void { window.scrollTo({top:0, behavior:'smooth'}); }
}
