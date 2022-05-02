import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerService } from './app.service';
import { InputSearchComponent } from './input-search/input-search/input-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
