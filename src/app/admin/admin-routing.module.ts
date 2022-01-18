import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [{ path: 'dashboard', component: AdminDashboardComponent, children:
    [
      { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'users', component: UsersComponent }
    ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
