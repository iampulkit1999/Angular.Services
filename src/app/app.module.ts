import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeServiceService } from './employee-service.service';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [EmployeeServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
