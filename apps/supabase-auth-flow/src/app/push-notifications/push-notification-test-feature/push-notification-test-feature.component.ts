import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseMessaging, GetTokenOptions } from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { firebaseConfig } from '../../auth-config';

@Component({
    selector: 'sfa-push-notification-test-feature',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './push-notification-test-feature.component.html',
    styleUrl: './push-notification-test-feature.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushNotificationTestFeatureComponent {
    public token = '';

    constructor() {
        FirebaseMessaging.addListener('notificationReceived', (event) => {
            console.log('notificationReceived: ', { event });
        });
        FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
            console.log('notificationActionPerformed: ', { event });
        });
        if (Capacitor.getPlatform() === 'web') {
            navigator.serviceWorker.addEventListener('message', (event: any) => {
                console.log('serviceWorker message: ', { event });
                const notification = new Notification(event.data.notification.title, {
                    body: event.data.notification.body,
                });
                notification.onclick = (event) => {
                    console.log('notification clicked: ', { event });
                };
            });
        }
    }

    public async requestPermissions(): Promise<void> {
        await FirebaseMessaging.requestPermissions();
    }

    public async getToken(): Promise<void> {
        const options: GetTokenOptions = {
            vapidKey: firebaseConfig.vapidKey,
        };
        if (Capacitor.getPlatform() === 'web') {
            options.serviceWorkerRegistration = await navigator.serviceWorker.register('firebase-messaging-sw.js');
        }
        const { token } = await FirebaseMessaging.getToken(options);
        this.token = token;
    }
}
