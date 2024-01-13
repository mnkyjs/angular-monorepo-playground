import {
  Component,
  ViewChildren,
  AfterViewInit,
  ViewContainerRef,
  QueryList,
} from '@angular/core';
import { MapComponent } from './leaflet/feature/map/map.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [MapComponent, RouterLink, RouterOutlet],
  selector: 'px-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
