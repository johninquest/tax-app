import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { from } from 'rxjs';


@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatMenuModule,
      MatSelectModule,
      MatListModule,
      MatIconModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule
],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatMenuModule,
      MatSelectModule,
      MatListModule,
      MatIconModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
})
export class MaterialModules { }