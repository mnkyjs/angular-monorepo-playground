import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PushNotificationTestFeatureComponent } from './push-notification-test-feature.component';

describe('PushNotificationTestFeatureComponent', () => {
    let component: PushNotificationTestFeatureComponent;
    let fixture: ComponentFixture<PushNotificationTestFeatureComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PushNotificationTestFeatureComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PushNotificationTestFeatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
