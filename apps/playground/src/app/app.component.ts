import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapComponent } from './leaflet/feature/map/map.component';

@Component({
  standalone: true,
  imports: [RouterModule, MapComponent],
  selector: 'px-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
