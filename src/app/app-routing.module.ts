import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './Pages/master-component/master-component.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { ProductPageComponent } from './Pages/products-page/products-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';

const routes: Routes = [{
  path: '',
  component: FramePageComponent,
  children: [
    { path: '', component: MainPageComponent},
    { path: 'login', component: LoginPageComponent,/* canActivate: [AuthService] */},
    { path: 'products', component: ProductPageComponent},
    { path: 'signup', component: SignupPageComponent},
    { path: 'userpage', component: UserPageComponent},
    { path: 'about', component: AboutPageComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
