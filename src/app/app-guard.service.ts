import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AppServiceService } from './app-service.service';

export interface IDeactivate
{
canExit:()=>boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate,CanActivateChild,CanDeactivate<IDeactivate> {

  constructor(private service:AppServiceService,private router:Router) { }
  canDeactivate(component: IDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
   return component.canExit?component.canExit():true;
  }




  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
   return this.canActivate(childRoute,state);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
   let result=this.service.getAuthDetails();
   if(result=='true')
   {
    return true;
   }
   else{
    this.router.navigate(['/'])
    return false;
   }
  }
}
