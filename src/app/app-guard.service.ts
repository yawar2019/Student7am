import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {

  constructor(private service:AppServiceService,private router:Router) { }
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
