import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { UserDefaultProfileComponent } from './common/user-default-profile/user-default-profile.component';
import { UserPackagesComponent } from './common/user-packages/user-packages.component';
import { UserClientsComponent } from './common/user-clients/user-clients.component';
import { FaqsComponent } from './common/faqs/faqs.component';
import { ReviewRatingsComponent } from './common/review-ratings/review-ratings.component';
import { CommentsComponent } from './common/comments/comments.component';
import { RecommendedComponent } from './common/recommended/recommended.component';
import { SearchSuggestionComponent } from './common/search-suggestion/search-suggestion.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileBasicComponent } from './common/profile-basic/profile-basic.component';
import { ModalComponent } from './common/modal/modal.component';
import { ChatboxComponent } from './common/chatbox/chatbox.component';
import { ReceiveComponent } from './common/chatbox/receive/receive.component';
import { SendComponent } from './common/chatbox/send/send.component';
import { DealComponent } from './common/chatbox/deal/deal.component';
import { UserComponent } from './pages/user/user.component';
import { SkillAssessmentComponent } from './common/skill-assessment/skill-assessment.component';
import { NewGigComponent } from './common/new-gig/new-gig.component';
import { BreadCrumbsComponent } from './common/bread-crumbs/bread-crumbs.component';
import { OverviewComponent } from './common/forms/overview/overview.component';
import { PricingComponent } from './common/forms/pricing/pricing.component';
import { NewFaqsComponent } from './common/forms/new-faqs/new-faqs.component';
import { AssessmentComponent } from './common/assessment/assessment.component';
import { AssessmentDetailsComponent } from './common/assessment/assessment-details/assessment-details.component';
import { ExamComponent } from './common/assessment/exam/exam.component';
import { ResultComponent } from './common/assessment/result/result.component';

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
    FooterComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    CarouselComponent,
    UserDefaultProfileComponent,
    UserPackagesComponent,
    UserClientsComponent,
    FaqsComponent,
    ReviewRatingsComponent,
    CommentsComponent,
    RecommendedComponent,
    SearchSuggestionComponent,
    LoaderComponent,
    ProfileComponent,
    ProfileBasicComponent,
    ModalComponent,
    ChatboxComponent,
    ReceiveComponent,
    SendComponent,
    DealComponent,
    UserComponent,
    SkillAssessmentComponent,
    NewGigComponent,
    BreadCrumbsComponent,
    OverviewComponent,
    PricingComponent,
    NewFaqsComponent,
    AssessmentComponent,
    AssessmentDetailsComponent,
    ExamComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
