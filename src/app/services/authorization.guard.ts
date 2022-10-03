import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  //Inyectamos las dependencias necesarias
  constructor(private authService: AuthorizationService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Preguntamos si el usuario esta logueado
      if (!this.authService.isUserLogIn()) {
        //Si no esta logueado, ir a la pagina de login
        this.router.navigate(['/login']); 
        return false;
      }

    return true;
  }
  
}
