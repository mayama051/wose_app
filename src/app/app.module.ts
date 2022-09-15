import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { BgComponent } from './bg/bg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLiveWorkoutComponent } from './dashboard-live-workout/dashboard-live-workout.component';
import { CommunityComponent } from './community/community.component';
import { PlanComponent } from './plan/plan.component';
import { MyComponent } from './my/my.component';

import { AchievementComponent } from './achievement/achievement.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BgInterfacesComponent } from './bg-interfaces/bg-interfaces.component';
import { AchievementPageComponent } from './achievement-page/achievement-page.component';
import { BackComponent } from './back/back.component';

import { MealComponent } from './meal/meal.component';


import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { SnackComponent } from './snack/snack.component';

import { VideosComponent } from './videos/videos.component';
import { SetGoalComponent } from './set-goal/set-goal.component';







@NgModule({

  declarations: [AppComponent, FirstpageComponent, BgComponent, NavbarComponent, LoginComponent, SignupComponent, Signup2Component, Signup3Component, PrivacyPolicyComponent, DashboardComponent, DashboardLiveWorkoutComponent, CommunityComponent,
    PlanComponent, MyComponent, AchievementComponent, SuggestionsComponent, BgInterfacesComponent, AchievementPageComponent, BackComponent, MealComponent, BreakfastComponent, LunchComponent, DinnerComponent, SnackComponent, VideosComponent, SetGoalComponent],


  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
