import { Component, Input, OnChanges } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.html',
})

export class DetailComponent  {
  @Input() value: any = null;
  memberSelected: any;

  constructor(private _membersService: MembersService) {
    this.memberSelected = null;
  }

  ngOnChanges(){
    this._membersService.getMember(this.value)
    .subscribe((data: any) => {
      this.memberSelected = data;
    })
  }
}
