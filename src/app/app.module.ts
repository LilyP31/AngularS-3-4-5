import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { PageInicioComponent } from './page-inicio/page-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInicioComponent,
    MenuNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
