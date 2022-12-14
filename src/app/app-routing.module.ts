import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './pages/user/user.component';
import { NewGigComponent } from './common/new-gig/new-gig.component';
import { AssessmentComponent } from './common/assessment/assessment.component';


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
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    {
      provide: ROUTES,
      useFactory: () =>{
        let dynamicRoutes: Routes = [];
        dynamicRoutes.push(
          {
            path: '',
            component: LayoutComponent,
            children:[
              {
                path: 'freelancer',
                children:[
                  {
                    path: 'borromeo.alvin',
                    component: UserComponent,
                    children:[
                      { path: 'new-gig', component: NewGigComponent },
                      { path: 'skill-assessment', component: AssessmentComponent },
                    ]
                  },
                ]
              },
            ]
          }
        );

        return [
          ...dynamicRoutes,
          ...routes
        ];
      },
      multi: true
    }
  ]
})
export class AppRoutingModule { }
