import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUserComponent } from './feature-user.component';

describe('FeatureUserComponent', () => {
    let component: FeatureUserComponent;
    let fixture: ComponentFixture<FeatureUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureUserComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
