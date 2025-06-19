import { Routes } from '@angular/router';
import { EntityDetailsComponent } from '@modules/entity-details/entity-details.component';
import { HomeComponent } from '@modules/home/home.component';
import { queryDetailsResolver } from '@resolvers/query-details.resolver';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'entity',
        component: EntityDetailsComponent,
        resolve: {
            queryDetails: queryDetailsResolver
        }
    }
];
