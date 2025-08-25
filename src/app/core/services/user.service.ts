import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { users } from '../data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  async getRecentUsers(): Promise<User[]> {
    return users;
  }
}
