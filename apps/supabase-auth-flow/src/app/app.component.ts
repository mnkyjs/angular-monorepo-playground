import { Component, NgZone } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { firebaseConfig } from './auth-config';
import { initializeApp } from 'firebase/app';

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'sfa-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(
        private router: Router,
        private zone: NgZone,
    ) {
        this.initializeFirebase();

        App.addListener('appUrlOpen', async (data) => {
            this.zone.run(() => {
                const redirectTo = data.url.slice(data.url.lastIndexOf('//') + 1);

                if (redirectTo.startsWith('/password-reset')) {
                    this.router.navigateByUrl(redirectTo);
                }
            });
        });
    }

    public async initializeFirebase(): Promise<void> {
        if (Capacitor.isNativePlatform()) {
            return;
        }
        initializeApp(firebaseConfig);
    }
}
