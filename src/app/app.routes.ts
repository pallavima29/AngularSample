import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'child1',
        component:Child1Component
    },
    {
        path:'home',
        component:HomeComponent
    }
];
