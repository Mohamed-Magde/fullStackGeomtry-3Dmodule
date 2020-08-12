import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGeometryComponent } from './components/add-geometry/add-geometry.component';
import { DetailsGeometryComponent } from './components/details-geometry/details-geometry.component';
import { ListGeometryComponent } from './components/list-geometry/list-geometry.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGeometryComponent,
    DetailsGeometryComponent,
    ListGeometryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
