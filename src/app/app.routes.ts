import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/public/public.routes').then(m => m.default),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.default),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.routes').then(m => m.default),
    canActivate: [/* AdminGuard */],
  }
];
