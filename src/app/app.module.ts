import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


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

  ],
})
export class AppModule {
  ngDoBootstrap() {}
}
