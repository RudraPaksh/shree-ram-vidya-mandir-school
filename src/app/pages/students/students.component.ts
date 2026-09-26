import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { activities } from '../../core/data/school.data';
import { LuxuryCta } from '../../shared/components/luxury-cta/luxury-cta';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    RouterLink,
    LuxuryCta
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  activities = activities;

  activeActivity = 0;

  studentPillars = [
    {
      number: '01',
      icon: '✦',
      title: 'Friendship',
      text: 'Children learn to share, collaborate, listen and build meaningful friendships.'
    },
    {
      number: '02',
      icon: '◈',
      title: 'Creativity',
      text: 'Art, expression, imagination and playful discovery give every child space to shine.'
    },
    {
      number: '03',
      icon: '✧',
      title: 'Confidence',
      text: 'Every activity creates opportunities for children to participate, communicate and grow.'
    },
    {
      number: '04',
      icon: '❖',
      title: 'Independence',
      text: 'Age-appropriate experiences help children make choices and discover their own strengths.'
    }
  ];

  setActivity(index: number): void {
    this.activeActivity = index;
  }

  scrollToActivities(): void {
    document
      .getElementById('student-activities')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }
}