import { Routes } from '@angular/router';
import { EntityDetailsComponent } from '@modules/entity-details/entity-details.component';
import { HomeComponent } from '@modules/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'entity',
        component: EntityDetailsComponent
    }
];
