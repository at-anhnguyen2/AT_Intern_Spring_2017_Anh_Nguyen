import { Component, Input } from '@angular/core';
import { MembersService } from './members.service';

@Component({
  selector: 'detail',
  templateUrl: './templates/detail.html',
  styles: [`
    .table{
      border-collapse: collapse;
      background-color: #f6f6f6;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }
    .table, th, td {
      border: 2px solid #336699;
    }
    th, td{
      text-align: left;
      padding: 5px;
    }
    th{
      width: 100px;
    }
    td{
      width: 200px;
    }
  `]
})

export class DetailComponent  {
  @Input() value: any = null; 
  array_members: any;

  constructor(private _membersService: MembersService) {
    this.array_members = [];
    this._membersService.getAllMembers()
    .subscribe((data: any) => {
      this.array_members = data.members;
    })
  }
}
