import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { LayoutComponent } from './app/layout/layout.component';
import { AngularComponentExamleComponent } from './app/angular-component-examle/angular-component-examle.component';
import { SignalexampleComponent } from './app/signalexample/signalexample.component';

bootstrapApplication(SignalexampleComponent, appConfig)
  .catch((err) => console.error(err));
