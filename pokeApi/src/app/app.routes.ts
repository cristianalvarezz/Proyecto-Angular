import { Routes, RouterModule } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

export const ROUTES:Routes=[
    {path: 'home', component: PokeTableComponent},
    {path: 'pokeDetail/:id', component: PokeDetailComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]