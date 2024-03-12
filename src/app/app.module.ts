import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [], // TODO: Declaraciones, componentes, directivas, pipes
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:
  [
    CookieService,
  ],
})
export class AppModule {
  ngDoBootstrap() {}
}
