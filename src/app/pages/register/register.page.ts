import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared.config';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, SharedImports, RouterLink],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
})
export class RegisterPage {
  name = '';
  password = '';
  error = '';

  handleLogin() {}
}
