import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';

const routes: Routes = [
  {
    path: '',
    component: DynamicTableComponent
  }
];

@NgModule({
  declarations: [DynamicTableComponent],
  exports: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class DynamicTableModule { }
