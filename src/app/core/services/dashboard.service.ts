import { Injectable } from '@angular/core';
import { LoginAttempt, Role, User } from '../interfaces/user.interface';
import type { ChartData } from 'chart.js';

export interface DashboardSummary {
  totalUsers: number;
  activeUsers: number;
  newRegistrationsThisWeek: number;
  roles: Record<Role, number>;
  pendingApprovals?: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  async getSummary(): Promise<DashboardSummary> {
    return {
      totalUsers: 1280,
      activeUsers: 1043,
      newRegistrationsThisWeek: 37,
      roles: { Admin: 8, Manager: 42, User: 1230 },
      pendingApprovals: 5,
    };
  }

  async getRecentUsers(): Promise<User[]> {
    return [
      {
        id: 1,
        name: 'Arjun Mehta',
        email: 'arjun@corp.com',
        role: 'Manager',
        active: true,
        avatarUrl: '',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: 'Riya Patel',
        email: 'riya@corp.com',
        role: 'User',
        active: true,
        avatarUrl: '',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
      {
        id: 3,
        name: 'Dev Sharma',
        email: 'dev@corp.com',
        role: 'User',
        active: false,
        avatarUrl: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: 4,
        name: 'Priya Nair',
        email: 'priya@corp.com',
        role: 'Admin',
        active: true,
        avatarUrl: '',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
      {
        id: 5,
        name: 'Vikram Rao',
        email: 'vikram@corp.com',
        role: 'User',
        active: true,
        avatarUrl: '',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
    ];
  }

  async getLoginAttempts(): Promise<LoginAttempt[]> {
    return [
      {
        id: 1,
        email: 'arjun@corp.com',
        when: new Date().toISOString(),
        ip: '103.21.44.22',
        ok: true,
      },
      {
        id: 2,
        email: 'dev@corp.com',
        when: new Date().toISOString(),
        ip: '49.36.118.4',
        ok: false,
      },
      {
        id: 3,
        email: 'riya@corp.com',
        when: new Date().toISOString(),
        ip: '14.98.77.10',
        ok: true,
      },
      {
        id: 4,
        email: 'someone@unknown.com',
        when: new Date().toISOString(),
        ip: '182.73.12.201',
        ok: false,
      },
      {
        id: 5,
        email: 'priya@corp.com',
        when: new Date().toISOString(),
        ip: '49.205.16.9',
        ok: true,
      },
    ];
  }

  async getUserGrowthSeries(): Promise<ChartData<'line'>> {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return {
      labels,
      datasets: [
        {
          label: 'New Registrations',
          data: [6, 9, 12, 8, 7, 10, 14],
          tension: 0.3,
          fill: true,
        },
      ],
    };
  }

  async getRoleDistribution(): Promise<ChartData<'doughnut'>> {
    return {
      labels: ['Admin', 'Manager', 'User'],
      datasets: [
        {
          data: [8, 42, 1230],
        },
      ],
    };
  }

  async getLoginActivitySeries(): Promise<ChartData<'bar'>> {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return {
      labels,
      datasets: [
        { label: 'Successful', data: [55, 61, 49, 72, 66, 80, 74] },
        { label: 'Failed', data: [8, 6, 10, 4, 7, 5, 6] },
      ],
    };
  }
}
