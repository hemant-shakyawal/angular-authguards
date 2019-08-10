import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Router,Routes } from '@angular/router'
import {AuthGuard} from './auth.guard'
import { AuthService } from './auth.service';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const myRoots: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: 
  [AuthGuard]},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
