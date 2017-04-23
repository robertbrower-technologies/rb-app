import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { LogoutComponent } from './home/logout/logout.component';

const homeRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent }
        ]
    }
];

const authenticatedRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'list', loadChildren: './list/list.module#ListModule' }
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...homeRoutes,
            ...authenticatedRoutes,
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];

export const appRoutingProviders: any[] = [];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);