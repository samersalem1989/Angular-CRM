import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { SideBarComponent } from './main-components/side-bar/side-bar.component';
import { LoginComponent } from './main-components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CanActivateAuth } from './guards/canActivate-auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddUserComponent} from './firebase/AddUser/add-user.component';
import { SignUpComponent } from './main-components/sign-up/sign-up.component';
import { GetUserComponent } from './firebase/get-user/get-user.component';
import { UpdateUserComponent } from './firebase/update-user/update-user.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnersAngularModule } from 'spinners-angular';
import { ChooseOneComponent } from './firebase/choose-one/choose-one.component';
import { FilterPipe } from './filter.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { FilterPipeOne } from './filterOne.pipe';



const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: 'home', component: DashboardComponent,children: [
    {
      path: 'get-user', 
      component: GetUserComponent,
    },
    {
      path: 'add-user',
      component: AddUserComponent, 
    },
    {
      path: 'get-user/:id',
      component: ChooseOneComponent, 
    },
    {
      path: 'contacts',
      component: ContactsComponent, 
    },
    
  ], canActivate: [CanActivateAuth]},
  { path: 'add-user', component: AddUserComponent, canActivate: [CanActivateAuth]},
  { path: 'get-user', component: GetUserComponent, canActivate: [CanActivateAuth]},
  { path: 'contacts', component: GetUserComponent, canActivate: [CanActivateAuth]}

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    DashboardComponent,
    AddUserComponent,
    SignUpComponent,
    GetUserComponent,
    UpdateUserComponent,
    ChooseOneComponent,
    FilterPipe,
    ContactsComponent,
    FilterPipeOne
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    ShowHidePasswordModule,
    NgbModule,
    SpinnersAngularModule
  ],
  exports: [RouterModule],
  providers: [CanActivateAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
