import { Component } from '@angular/core';
import { faculty } from '../../core/data/school.data';

@Component({selector:'app-faculty',standalone:true,templateUrl:'./faculty.component.html',styleUrl:'./faculty.component.css'})
export class FacultyComponent { faculty = faculty; }
