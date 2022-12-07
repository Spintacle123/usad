import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '', redirectTo: '/landing',
        pathMatch: 'full'
      },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'freelancer',
        children:[
          { path: '', redirectTo: '/profile', pathMatch: 'full' },
          { path: 'profile', component: ProfileComponent },
          { path: 'service', component: EmployeeDetailsComponent },
        ]
      },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
