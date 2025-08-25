import { signal } from '@angular/core';
import { Role } from '../core/interfaces/user.interface';

export class AuthContext {
  // Replace with JWT-derived claims in your real app
  role = signal<Role>('Admin');
  fullName = signal<string>('Kamal Kumar');
  email = signal<string>('kamal@example.com');
  lastLoginAt = signal<string>(new Date().toISOString());
}
