import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: 'pocetna', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'novosti', component: NewsListComponent},
            {path: 'statistika', component: StatisticsComponent},
            // {path: 'profil', component: MemberEditComponent},
            {path: '**', redirectTo: 'pocetna', pathMatch: 'full'}
        ]
    }
];
