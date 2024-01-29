import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'welcome',
        loadComponent: () => import('./nx-welcome.component').then((c) => c.NxWelcomeComponent),
    },
    {
        path: 'pokemon',
        loadComponent: () =>
            import('./pokedex/feature/pokemon-overview/pokemon-overview.component').then((c) => c.PokemonOverviewComponent),
    },
];
