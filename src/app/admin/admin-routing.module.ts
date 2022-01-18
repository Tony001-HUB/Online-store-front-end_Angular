import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [{ path: '', component: AdminDashboardComponent, children:
    [
      { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'users', component: UsersComponent },
      { path: 'registration', component: RegistrationComponent}
    ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
