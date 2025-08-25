import { Routes } from '@angular/router';
import { ShellLayout } from './layouts/shell/shell.layout';
import { DefaultLayout } from './layouts/default/default.layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: DefaultLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.page').then((m) => m.RegisterPage),
      },
      {
        path: 'register/success',
        loadComponent: () =>
          import('./pages/register/success-screen/success-screen.page').then(
            (m) => m.SuccessScreenPage,
          ),
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
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'users/list',
        loadComponent: () =>
          import('./pages/users/user-list/user-list.page').then((m) => m.UserListPage),
      },
      {
        path: 'users/form',
        loadComponent: () =>
          import('./pages/users/user-form/user-form.page').then((m) => m.UserFormPage),
      },
    ],
  },
];
