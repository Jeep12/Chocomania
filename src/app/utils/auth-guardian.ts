import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
@Injectable()
export class AuthGuardian implements CanActivate {
    userMail : string | null | undefined;
    constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            this.userMail = user?.email;
          })
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
       return true;
    }
   



}