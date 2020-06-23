import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { from } from 'rxjs';


@NgModule({
  imports: [
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatMenuModule,
      MatSelectModule,
      MatListModule
],
  exports: [
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatMenuModule,
      MatSelectModule,
      MatListModule
    ],
})
export class MaterialModules { }