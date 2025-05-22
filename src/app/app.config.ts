import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    // You can add other providers here if needed
  ],
  // Component imports should happen in `AppComponent`
};
