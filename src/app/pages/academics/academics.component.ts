import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { classes } from '../../core/data/school.data';
import { LuxuryCta } from '../../shared/components/luxury-cta/luxury-cta';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    LuxuryCta
  ],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent {

  classes = classes;

  searchTerm = '';
  expandedClass: string | null = null;
  activePillar = 0;

  learningPillars = [
    {
      number: '01',
      title: 'Strong Foundations',
      description:
        'Children build essential academic foundations while developing the confidence to ask questions, practise and discover.'
    },
    {
      number: '02',
      title: 'Curiosity & Creativity',
      description:
        'Learning leaves room for imagination, exploration, stories, creative expression and meaningful experiences.'
    },
    {
      number: '03',
      title: 'Communication',
      description:
        'Children are encouraged to listen, speak, read, express ideas and gradually communicate with greater confidence.'
    },
    {
      number: '04',
      title: 'Character & Confidence',
      description:
        'Academic growth is supported by kindness, responsibility, collaboration and opportunities to participate.'
    }
  ];

  get filteredClasses() {
    const query = this.searchTerm.trim().toLowerCase();

    if (!query) {
      return this.classes;
    }

    return this.classes.filter(item => {
      const searchableText = [
        item.name,
        item.age,
        item.focus,
        ...item.highlights
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }

  toggleClass(name: string): void {
    this.expandedClass =
      this.expandedClass === name ? null : name;
  }

  setPillar(index: number): void {
    this.activePillar = index;
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  scrollToClass(index: number): void {
    const element = document.getElementById(`class-${index}`);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}