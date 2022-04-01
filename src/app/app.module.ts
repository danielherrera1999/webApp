import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './product/index/index.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FooterComponent } from './widget/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
