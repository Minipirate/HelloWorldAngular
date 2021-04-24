import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ListComponent } from './list/list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersLoginComponent } from './users-login/users-login.component';

const routes: Routes = [{
    path : "login", component: UsersLoginComponent
},{
    path: "users", component: ListComponent
}, {
    path:"users/add", component: UsersAddComponent
},{
    path:"users/edit/:id", component : UsersEditComponent
},{
    path: '**', redirectTo: 'users'
}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }