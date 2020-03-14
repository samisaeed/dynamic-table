import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicTableModule} from './dynamic-table/dynamic-table.module';
import { ViewComponentComponent } from './view-component/view-component.component';
import {MatDialogModule} from '@angular/material/dialog';

// const routes: Routes = [
//   {
//     path: '', loadChildren: () => import('./dynamic-table/dynamic-table.module')
//       .then(m => m.DynamicTableModule), data: { title: 'dynamic' }
//   },
// ];
@NgModule({
  declarations: [
    AppComponent,
    ViewComponentComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DynamicTableModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    ViewComponentComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
