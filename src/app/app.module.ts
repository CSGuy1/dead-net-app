import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { CarouselComponent } from './Carousel/carousel.component';
import { VerticalCardComponent } from './Vertical Card/vertical.card.component';
import { HorizontalCardComponent } from './Horizontal Card/horizontal.card.component';
import { AppRoutingModule } from './app-routing.module';
import { NewReleasesLayoutComponent } from './/Layouts/New Releases/New-Releases-layout.component';
import { HomeLayoutComponent } from './Layouts/Home/home-layout.component';
import { CDLayoutComponent } from './Layouts/CD/cd-layout.component';
import { LPLayoutComponent } from './Layouts/LP/lp-layout.component';
import { DigitalLayoutComponent } from './Layouts/Digital/digital-layout.component';
import { VideoLayoutComponent } from './Layouts/Video/video-layout.component';
import { DavesPicksLayoutComponent } from './Layouts/Dave\'s Picks/daves-picks-layout.component';
import { SevenInchSinglesCollectionComponent } from './Layouts/7 inch Singles Collection/singles-collection-layout.component';
import { DeadAndCompanyLayoutComponent } from './Layouts/Dead & Company/dead-and-company-layout.compent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    VerticalCardComponent,
    HorizontalCardComponent,
    NewReleasesLayoutComponent,
    HomeLayoutComponent,
    CDLayoutComponent,
    LPLayoutComponent,
    DigitalLayoutComponent,
    VideoLayoutComponent,
    DavesPicksLayoutComponent,
    SevenInchSinglesCollectionComponent,
    DeadAndCompanyLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
