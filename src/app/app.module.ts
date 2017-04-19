import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MembersService } from './exercise/members.service';
import { MembersAppComponent }  from './exercise/members.component';
import { DetailComponent } from './exercise/detail.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ MembersAppComponent, DetailComponent ],
  bootstrap:    [ MembersAppComponent ],
  providers:    [ MembersService ]
})
export class AppModule { }
