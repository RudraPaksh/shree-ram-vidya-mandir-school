import { Component } from '@angular/core';
import { events } from '../../core/data/school.data';

@Component({selector:'app-events',standalone:true,templateUrl:'./events.component.html',styleUrl:'./events.component.css'})
export class EventsComponent { events = events; }
