
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import {MatCheckboxModule} from '@angular/material/checkbox';
>>>>>>> e4e754faed09e6417d068944dffccbc22f6bf800
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
<<<<<<< HEAD
  MatProgressSpinnerModule
=======
  MatProgressSpinnerModule,
  MatCheckboxModule
>>>>>>> e4e754faed09e6417d068944dffccbc22f6bf800
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule
   ],
})
export class CustomMaterialModule { }
