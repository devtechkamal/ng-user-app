import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedImports } from '../../shared/shared.config';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, SharedImports],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  username = '';
  password = '';
  error = '';

  handleLogin() {}
}
