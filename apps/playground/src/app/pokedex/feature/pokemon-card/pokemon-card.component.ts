import {
  ChangeDetectionStrategy,
  Component,
  signal,
  DestroyRef,
  inject,
  Input,
} from '@angular/core';
import { Pokemon } from '../../domain/models/pokemon';
import { PokedexApiService } from '../../domain/data-access/pokedex-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PokedexRecord } from '../../domain/models/pokedex-response';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'px-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  readonly pokemonService = inject(PokedexApiService);
  readonly destroyRef = inject(DestroyRef);
  readonly pokemonDetails = signal<Pokemon | null>(null);

  @Input({ required: true })
  set pokemon(value: PokedexRecord) {
    this.pokemonService
      .getPokemon(value.url)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((pokemonDetails) => this.pokemonDetails.set(pokemonDetails));
  }
}
