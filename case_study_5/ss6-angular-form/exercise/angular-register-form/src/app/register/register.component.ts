import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from '../../providers/CustomValidator';
import {Register} from "./register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myArr: Register[] = [];

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
    country: new FormControl(''),
    age: new FormControl('', Validators.min(18)),
    gender: new FormControl(''),
    phone: new FormControl('', Validators.pattern("^\\+84\\d{9,10}$")),
  }, [CustomValidator.MatchValidator('password', 'confirmPassword')]);

  constructor() { }

  ngOnInit(): void {
  }

  submit(register: Register) {
    console.log("Success");
    this.registerForm.reset();
  }

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }
}
