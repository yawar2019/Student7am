import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AppGuardService } from './app-guard.service';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { ParenttoChildComponent } from './parentto-child/parentto-child.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ExampleOnPipeComponent } from './example-on-pipe/example-on-pipe.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about/:id/:name',component:AboutComponent},
{path:'contact',component:ContactComponent,canActivateChild:[AppGuardService],
children:[{path:':id/:name',component:UserComponentComponent,canDeactivate:[AppGuardService]}]},
{path:'directive',component:DirectivesExampleComponent},
{path:'parent',component:ParenttoChildComponent},
{path:'template',component:SimpletemplateformComponent},
{path:'reactive',component:ReactiveFormComponent},
{path:'formbuilder',component:FormbuilderComponent},
{path:'dynamicformbuilder',component:DynamicFormComponent},
{path:'pipeExample',component:ExampleOnPipeComponent},
{path:'crud',component:EmployeeDetailsComponent},
{path:'viewChild',component:ViewChildComponent},
{path:'lifeCycle',component:LifeCycleHooksComponent},
];
