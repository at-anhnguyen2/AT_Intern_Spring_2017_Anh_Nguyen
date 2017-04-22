import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'members-app',
  templateUrl: './members.html',
})

export class MembersAppComponent  { 
  teamName: string;
  inputTeamName: string;
  arrayMembers: any;
  memberSelected: any;

  constructor(private _membersService: MembersService) {
    this.teamName = '';
    this.inputTeamName = '';
    this.arrayMembers = [];
    this.memberSelected = null;
    this._membersService.getAllMembers()
    .subscribe((data: any) => {
      this.arrayMembers = data.members;
    })
  }

  show(name: string){
    this.memberSelected = name;
  }

  searchTeam(){
    this.teamName = this.inputTeamName;
  }
}
