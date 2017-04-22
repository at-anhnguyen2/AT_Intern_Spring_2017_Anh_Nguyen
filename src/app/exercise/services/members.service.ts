import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()

export class MembersService {
  
  constructor(private _http: Http) { }

  getAllMembers() : Observable<any> {
    return this._http.get('./data/members.json')
    .map((res: any) => {
      return res.json();
    })
  }

  getMember(str: string) : Observable<any> {
    return this._http.get('./data/members.json')
    .map((res: any) => {
      return res.json().members.filter((item: any) => 
        item.name === str
      )[0]
    })
  }
}