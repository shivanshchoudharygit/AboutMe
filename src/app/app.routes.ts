import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'about', pathMatch: 'full' },
//   { path: 'about', component: AboutComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'contact', component: ContactUsComponent },
// ];
export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'profile', loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent) },
  { path: 'contact', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
];
