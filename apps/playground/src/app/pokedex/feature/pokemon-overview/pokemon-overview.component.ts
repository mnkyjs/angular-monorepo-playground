import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokedexApiService } from '../../domain/data-access/pokedex-api.service';
import { AsyncPipe } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'px-overview',
    standalone: true,
    templateUrl: './pokemon-overview.component.html',
    styleUrl: './pokemon-overview.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, PokemonCardComponent, FormsModule],
})
export class PokemonOverviewComponent {
    protected pokedexApiService = inject(PokedexApiService);

    pokedex$ = this.pokedexApiService.pokedex$;

    load(url: string) {
        this.pokedexApiService.loadData(url);
    }
}
