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
import { NewReleasesVerticalCardComponent } from './Layouts/New Releases/Vertical Card View/new-releases-vertical.component';
import { NewReleasesHeaderComponent } from './Layouts/New Releases/Header/new-releases-header.component';
import { NewReleasesFooterComponent } from './Layouts/New Releases/Footer/new-releases-footer.component';
import { NewRelasesSecondaryHeader } from './Layouts/New Releases/Secondary Header/new-releases-secondary-header';
import { GratefulGearBannerComponent } from './Layouts/Home/Grateful Gear Banner/grateful-gear-banner.component';
import { VideoCardComponent } from './Layouts/Home/Video Card/video-card.component';
import { HomeFeaturesComponent } from './Layouts/Home/Features/features-section.component';
import { UsrInfoComponent } from './usr-info/usr-info.component';
import { HttpClientModule } from '@angular/common/http';

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
    DeadAndCompanyLayoutComponent,
    NewReleasesVerticalCardComponent,
    NewReleasesHeaderComponent,
    NewReleasesFooterComponent,
    NewRelasesSecondaryHeader,
    GratefulGearBannerComponent,
    VideoCardComponent,
    HomeFeaturesComponent,
    UsrInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
