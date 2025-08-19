import { Routes } from '@angular/router';
import { ShellLayout } from './layouts/shell/shell.layout';
import { DefaultLayout } from './layouts/default/default.layout';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
      },
    ],
  },
  {
    path: '',
    component: ShellLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
    ],
  },
];
