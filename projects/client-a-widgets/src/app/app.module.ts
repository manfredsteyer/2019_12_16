import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const Elm = createCustomElement(AppComponent, {injector});
    customElements.define('client-a-widget', Elm);
  }

  ngDoBootstrap() {
  }


}
