import { importProvidersFrom, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { MyComponent } from './my/my.component';
import { PlanComponent } from './plan/plan.component';
import { AchievementPageComponent } from './achievement-page/achievement-page.component';
import { MealComponent } from './meal/meal.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { SnackComponent } from './snack/snack.component';
import { SetGoalComponent } from './set-goal/set-goal.component';



const routes: Routes = [
  {
    path: 'firstpage',
    component: FirstpageComponent
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup2',
    component: Signup2Component
  },
  {
    path: 'signup3',
    component: Signup3Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'plan',
    component: PlanComponent
  },
  {
    path: 'my',
    component: MyComponent
  },
  {
    path: '',
    redirectTo: 'firstpage',
    pathMatch: 'full'
  },
  {
    path: 'achievement-page',
    component: AchievementPageComponent
  },
  {
    path: 'meal',
    component: MealComponent
  },
  {
    path: 'breakfast',
    component: BreakfastComponent
  },
  {
    path: 'lunch',
    component: LunchComponent
  },
  {
    path: 'dinner',
    component: DinnerComponent
  },
  {
    path: 'snack',
    component: SnackComponent
  },
  {
    path: 'set-goal',
    component: SetGoalComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
