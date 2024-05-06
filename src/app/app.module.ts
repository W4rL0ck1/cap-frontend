import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { FramePageComponent } from './Pages/master-component/master-component.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { LocalStorageService } from './Services/localStorage.Service';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LoadingComponent } from './Components/Shared/loading/loading.component';
import { LogoComponent } from './Components/Shared/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { UserCardComponent } from './Components/User/user-card/user-card.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { ProductPageComponent } from './Pages/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    FramePageComponent,
    NavbarComponent,
    LoadingComponent,
    LogoComponent,
    AboutPageComponent,
    UserCardComponent,
    UserPageComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
