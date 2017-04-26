import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'members-app',
  templateUrl: './members.html',
})

export class MembersAppComponent  { 
  // teamName: string;
  inputTeamName: string;
  arrayMembers: any;
  memberSelected: any;
  isLoading: boolean;

  constructor(private _membersService: MembersService) {
    // this.teamName = '';
    this.inputTeamName = '';
    this.arrayMembers = [];
    this.memberSelected = null;
    this.isLoading = false;
    this._membersService.getAllMembers()
    .subscribe((data: any) => {
      this.arrayMembers = data.members;
    })
  }

  show(name: string){
    this.memberSelected = name;
  }

  addNewMember(objNewMember: any){
    this.isLoading = true;
    this.arrayMembers.push(objNewMember);
    setTimeout(() => {
      this.isLoading = false;
    });
  }

  // searchTeam(){
  //   this.inputTeamName = 'FE';
  // }
}
