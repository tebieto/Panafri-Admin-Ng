import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupPageRoutingModule } from './signup.router.module';

import { SignupPage } from './signup.page';
import { PersonalInfoPageModule } from '../signup/personal-info/personal-info.module';
import { CategoryInfoPageModule } from '../signup/category-info/category-info.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SignupPageRoutingModule,
    HomePageModule,
    PersonalInfoPageModule,
    CategoryInfoPageModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
