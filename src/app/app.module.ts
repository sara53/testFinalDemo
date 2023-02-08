import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/:id', component: UserFormComponent },
  { path: 'usersDetails', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailsComponent,
    UserFormComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
