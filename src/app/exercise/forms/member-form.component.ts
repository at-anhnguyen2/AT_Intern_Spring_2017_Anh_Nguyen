import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'member-form',
  templateUrl: './member-form.html',
})

export class MemberForm {
  newMemberForm: FormGroup;
  info: FormGroup;
  account: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  team: FormControl;
  email: FormControl;
  github: FormControl;

  constructor(_formBuilder: FormBuilder){
    this.firstName = new FormControl("Anh", Validators.required);
    this.lastName = new FormControl("Nguyen", Validators.required);
    this.team = new FormControl("FE", Validators.required);
    this.email = new FormControl("", Validators.required);
    this.github = new FormControl("at-anhnguyen", Validators.required);
    
    this.info = _formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      team: this.team
    });

    this.account = _formBuilder.group({
      email: this.email,
      github: this.github
    });
    this.newMemberForm = _formBuilder.group({
      info: this.info,
      account: this.account
    });
    this.changeValue();
    console.log(this.firstName);
  }
  ngOnInit() {
    this.firstName.valueChanges.subscribe(value => {
      this.changeValue();
    });
    this.lastName.valueChanges.subscribe(value => {
      this.changeValue();
    });
  }

  changeValue() {
    var strFirstName = this.firstName.value.toLowerCase();
    var strLastName = this.lastName.value.toLowerCase();
    this.email.setValue(strFirstName + '.' + strLastName  + '@asiantech.vn');
    this.github.setValue('at-' + strFirstName + strLastName);
  }
}