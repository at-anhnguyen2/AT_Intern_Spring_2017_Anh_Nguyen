import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MembersService } from './exercise/services/members.service';
import { MembersAppComponent }  from './exercise/members/members.component';
import { DetailComponent } from './exercise/member_detail/detail.component';
import { AvatarPipe } from './exercise/pipes/avatar.pipe';
import { TeamPipe } from './exercise/pipes/team.pipe';
import { SignupForm } from './exercise/forms/signup-form.component';
import { MemberForm } from './exercise/forms/member-form.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ MembersAppComponent, DetailComponent, AvatarPipe, TeamPipe, SignupForm, MemberForm ],
  bootstrap:    [ MembersAppComponent ],
  providers:    [ MembersService ]
})
export class AppModule { }
