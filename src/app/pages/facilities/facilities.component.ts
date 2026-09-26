import { Component } from '@angular/core';
import { facilities } from '../../core/data/school.data';

@Component({selector:'app-facilities',standalone:true,templateUrl:'./facilities.component.html',styleUrl:'./facilities.component.css'})
export class FacilitiesComponent { facilities = facilities; }
