import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: any;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}')]),
      'mobileNumber': new FormControl(null, [Validators.required, Validators.pattern('[7-9]{1}[0-9]{9}')]),
    });
  }

  submitData() {
    console.log(this.registerForm.value);
  }

  get FirstName() {
    return this.registerForm.get('firstName');
  }

  get LastName() {
    return this.registerForm.get('lastName');
  }

  get Email() {
    return this.registerForm.get('email');
  }

  get PhoneNumber() {
    return this.registerForm.get('mobileNumber');
  }
}
