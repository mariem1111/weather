import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
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
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    AppRoutingModule,
<<<<<<< HEAD
<<<<<<< HEAD
    NgbModule,
>>>>>>> 06115183019ac2f6071c1ea1161d312261998f42
=======
<<<<<<< HEAD
    NgbModule,
=======
    HttpModule,
    FormsModule

>>>>>>> b085c3df9617578b4fff5138ec20f7e0e4bc8a1d
>>>>>>> 95fdaaa24317e1e2a7e081d8a82281323f76351b
=======

    FormsModule
>>>>>>> 6b70b5f9099902cbd3ff3e92e87d58b207487639
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
