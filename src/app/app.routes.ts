import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AppGuardService } from './app-guard.service';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about/:id/:name',component:AboutComponent},
{path:'contact',component:ContactComponent,canActivate:[AppGuardService],
children:[{path:':id/:name',component:UserComponentComponent}]},

];
