import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { CarouselComponent } from './Carousel/carousel.component';
import { VerticalCardComponent } from './Vertical Card/vertical.card.component';
import { HorizontalCardComponent } from './Horizontal Card/horizontal.card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    VerticalCardComponent,
    HorizontalCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
