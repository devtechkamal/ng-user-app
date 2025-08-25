import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedImports } from '../../../shared/shared.config';
import { users } from '../../../core/data';
import { AppUrl } from '../../../core/constants/url.constants';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, SharedImports, ReactiveFormsModule],
  templateUrl: './user-form.page.html',
  styleUrl: './user-form.page.css',
})
export class UserFormPage {
  formBuilder: FormBuilder = inject(FormBuilder);
  users = users;
  appUrl = AppUrl;
  roles = [
    { name: 'USER', code: 'USER' },
    { name: 'ADMIN', code: 'ADMIN' },
  ];
  visible: boolean = false;
  userForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  userFormCtrl(field: string): FormControl {
    return this.userForm.get(field) as FormControl;
  }

  showDialog() {
    this.visible = true;
  }
  handleLogin() {}

  saveUser() {
    console.log(this.userForm);

    if (this.userForm.valid) {
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
