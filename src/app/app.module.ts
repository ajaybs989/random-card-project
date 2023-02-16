import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//http module included.
import {HttpClientModule} from '@angular/common/http';

//font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
