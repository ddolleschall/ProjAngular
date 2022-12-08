import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRouter } from './app.router';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { MainmenuModule } from './mainmenu/mainmenu.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    NavbarModule,
    MainmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
