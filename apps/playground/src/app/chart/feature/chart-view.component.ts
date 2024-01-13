import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardComponent } from '../../pokedex/feature/pokemon-card/pokemon-card.component';
import { ChartComponent } from '../ui/chart/chart.component';

@Component({
  selector: 'px-chart-view',
  standalone: true,
  imports: [PokemonCardComponent, ChartComponent],
  templateUrl: './chart-view.component.html',
  styleUrl: './chart-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartViewComponent {
  loadChart = false;
}
