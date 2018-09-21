import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {ApiWeatherService} from './api-weather.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';




import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PopUpComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
=======
    HttpModule,
    FormsModule

>>>>>>> b085c3df9617578b4fff5138ec20f7e0e4bc8a1d
  ],
  providers: [ApiWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
