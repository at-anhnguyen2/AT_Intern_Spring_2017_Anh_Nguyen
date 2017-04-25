import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.html',
})

export class SignupForm {
  @Output() result: EventEmitter<any> = new EventEmitter;
  
  registerUser(form: NgForm) {
    if (form.valid) {
      this.result.emit(form.value);
      form.reset();
    } else {
      alert("Error: Form is unvalid");
      console.log(form);
    }
  }
}