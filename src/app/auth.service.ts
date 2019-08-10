import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRouter:Router) { }

  settoken(token:string){
localStorage.setItem("logeduser",token)
  }
  gettoken(){
    return localStorage.getItem("logeduser")
  }
  isLoggedIn(){
    return this.gettoken() !==null;

  }
  logout(){
  localStorage.removeItem("logeduser")
    this.myRouter.navigate(['login']);
  }
}
