import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './product/index/index.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FooterComponent } from './widget/footer/footer.component';
import { HeaderComponent } from './widget/header/header.component';
import { CardComponent } from './widget/card/card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './widget/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    WelcomeComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
