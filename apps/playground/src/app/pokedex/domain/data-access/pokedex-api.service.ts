import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { PokedexResponse } from '../models/pokedex-response';
import { Pokemon } from '../models/pokemon';

@Injectable({ providedIn: 'root' })
export class PokedexApiService {
  readonly httpClient = inject(HttpClient);

  private data$: BehaviorSubject<PokedexResponse | null> =
    new BehaviorSubject<PokedexResponse | null>(null);

  readonly pokedex$ = this.data$.asObservable();

  constructor() {
    this.loadData('https://pokeapi.co/api/v2/pokemon');
  }

  loadData(url: string) {
    this.httpClient.get<PokedexResponse>(url).subscribe({
      next: (data) => this.data$.next(data),
    });
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }
}
