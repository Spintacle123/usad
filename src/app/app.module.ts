import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MainAdComponent } from './common/main-ad/main-ad.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinesComponent } from './common/lines/lines.component';
import { StarsComponent } from './common/stars/stars.component';
import { ImageCarouselComponent } from './common/image-carousel/image-carousel.component';
import { ImageCardComponent } from './common/image-card/image-card.component';
import { JobTypeComponent } from './common/job-type/job-type.component';
import { FooterComponent } from './pages/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LandingComponent,
    MainAdComponent,
    LinesComponent,
    StarsComponent,
    ImageCarouselComponent,
    ImageCardComponent,
    JobTypeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
