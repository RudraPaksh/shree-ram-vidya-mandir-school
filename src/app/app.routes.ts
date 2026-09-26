import { Routes } from '@angular/router';
import { AcademicsComponent } from './pages/academics/academics.component';

export const appRoutes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'principal', loadComponent: () => import('./pages/principal/principal.component').then(m => m.PrincipalComponent) },
  { path: 'academics', loadComponent: () => import('./pages/academics/academics.component').then(m => m.AcademicsComponent) },
  { path: 'students', loadComponent: () => import('./pages/students/students.component').then(m => m.StudentsComponent) },
  { path: 'toppers', loadComponent: () => import('./pages/toppers/toppers.component').then(m => m.ToppersComponent) },
  { path: 'activities', loadComponent: () => import('./pages/activities/activities.component').then(m => m.ActivitiesComponent) },
  { path: 'faculty', loadComponent: () => import('./pages/faculty/faculty.component').then(m => m.FacultyComponent) },
  { path: 'events', loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent) },
  { path: 'facilities', loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  {
    path: 'principal',
    loadComponent: () =>
      import('./pages/principal/principal.component')
        .then(m => m.PrincipalComponent)
  },
  {
  path: 'academics',
  component: AcademicsComponent
},
   
  
  { path: '**', redirectTo: '' }
];
