import { Component } from '@angular/core';
import { activities } from '../../core/data/school.data';

@Component({selector:'app-activities',standalone:true,templateUrl:'./activities.component.html',styleUrl:'./activities.component.css'})
export class ActivitiesComponent { activities = activities; }
