import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesLayoutComponent } from './Layouts/New Releases/New-Releases-layout.component';
import { HomeLayoutComponent } from './Layouts/Home/home-layout.component';
import { CDLayoutComponent } from './Layouts/CD/cd-layout.component';
import { LPLayoutComponent } from './Layouts/LP/lp-layout.component';
import { DigitalLayoutComponent } from './Layouts/Digital/digital-layout.component';
import { VideoLayoutComponent } from './Layouts/Video/video-layout.component';
import { DavesPicksLayoutComponent } from './Layouts/Dave\'s Picks/daves-picks-layout.component';
import { SevenInchSinglesCollectionComponent } from './Layouts/7 inch Singles Collection/singles-collection-layout.component';
import { DeadAndCompanyLayoutComponent } from './Layouts/Dead & Company/dead-and-company-layout.compent';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: "", component: HomeLayoutComponent },
  { path: "New-Releases", component: NewReleasesLayoutComponent },
  { path: "Home", component: HomeLayoutComponent },
  { path: "CD", component: CDLayoutComponent },
  { path: "LP", component: LPLayoutComponent },
  { path: "Digital", component: DigitalLayoutComponent },
  { path: "Video", component: VideoLayoutComponent },
  { path: "Dave's Picks", component: DavesPicksLayoutComponent },
  { path: "7 inch Singles Collection", component: SevenInchSinglesCollectionComponent },
  { path: "Dead & Company", component: DeadAndCompanyLayoutComponent },
  { path: 'admin', component: AddProductComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
