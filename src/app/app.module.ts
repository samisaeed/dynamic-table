import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicTableModule} from './dynamic-table/dynamic-table.module';

// const routes: Routes = [
//   {
//     path: '', loadChildren: () => import('./dynamic-table/dynamic-table.module')
//       .then(m => m.DynamicTableModule), data: { title: 'dynamic' }
//   },
// ];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DynamicTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
