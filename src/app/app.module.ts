import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AddressComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
