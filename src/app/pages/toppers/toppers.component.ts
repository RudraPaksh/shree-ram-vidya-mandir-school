import { Component } from '@angular/core';
import { toppers } from '../../core/data/school.data';

@Component({selector:'app-toppers',standalone:true,templateUrl:'./toppers.component.html',styleUrl:'./toppers.component.css'})
export class ToppersComponent { toppers = toppers; }
