import { Component } from '@angular/core';
import { MembersService } from './members.service';

@Component({
  selector: 'members-app',
  templateUrl: './templates/members.html',
  styles: [`
    h1{
      margin-bottom: 10px;
    }
    .members{
      width: 400px;
      margin: 0 auto;
    }
    .members ul{
      margin: 0;
    }
    .members ul li{
      width: 150px;
      padding: 5px;
    }
    .members ul button{
      float: right;
      border: none;
      color: #ffffff;
      background-color: #336699;
      vertical-align: middle;
    }
  `]
})

export class MembersAppComponent  { 
  array_members: any;
  member_selected: any;

  constructor(private _membersService: MembersService) {
    this.array_members = [];
    this.member_selected = null;
    this._membersService.getAllMembers()
    .subscribe((data: any) => {
      this.array_members = data.members;
    })
  }

  show(index: number){
    this.member_selected = index;
  }
}
