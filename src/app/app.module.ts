import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '../app/material/material.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ImagesGridComponent } from './grid-view/images-grid/images-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridViewComponent,
    ImagesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
