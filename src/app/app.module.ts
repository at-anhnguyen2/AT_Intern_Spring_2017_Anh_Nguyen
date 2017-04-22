import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { MembersService } from './exercise/services/members.service';
import { MembersAppComponent }  from './exercise/members/members.component';
import { DetailComponent } from './exercise/member_detail/detail.component';
import { AvatarPipe } from './exercise/pipes/avatar.pipe';
import { TeamPipe } from './exercise/pipes/team.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ MembersAppComponent, DetailComponent, AvatarPipe, TeamPipe ],
  bootstrap:    [ MembersAppComponent ],
  providers:    [ MembersService ]
})
export class AppModule { }
