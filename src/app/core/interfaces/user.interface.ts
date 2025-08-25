export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: Role;
  active: boolean;
  avatarUrl?: string;
  lastLoginAt?: string;
  createdAt: string;
}

export interface LoginAttempt {
  id: number;
  email: string;
  when: string;
  ip: string;
  ok: boolean;
}

export type Role = 'Admin' | 'Manager' | 'User';
