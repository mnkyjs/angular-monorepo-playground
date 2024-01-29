import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { tileLayer, latLng } from 'leaflet';

@Component({
    selector: 'px-map',
    standalone: true,
    imports: [LeafletModule],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '...',
            }),
        ],
        zoom: 5,
        center: latLng(46.879966, -121.726909),
    };
}
