import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedImports } from '../../shared/shared.config';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, SharedImports, ReactiveFormsModule],
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.css',
})
export class ProfilePage {
  profileImage: string | null = null;
  private fb: FormBuilder = inject(FormBuilder);
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  passwordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loadProfile() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(file);
    }
  }

  saveProfile() {}

  changePassword() {}
}
