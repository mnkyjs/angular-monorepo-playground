import {
  Component,
  ViewChildren,
  AfterViewInit,
  ViewContainerRef,
  QueryList,
} from '@angular/core';
import { MapComponent } from './leaflet/feature/map/map.component';

@Component({
  standalone: true,
  imports: [MapComponent],
  selector: 'px-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('map', { read: ViewContainerRef })
  vcr!: QueryList<ViewContainerRef>;

  async ngAfterViewInit() {
    const dfc = await import('./leaflet/feature/map/map.component').then(
      (c) => c.MapComponent
    );
    this.vcr.map((viewContainerRef: ViewContainerRef) => {
      viewContainerRef.createComponent(dfc);
    });
  }
}
