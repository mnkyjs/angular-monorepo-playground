import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetEmailPasswordResetComponent } from './getEmailPasswordReset.component';

describe('GetEmailPasswordResetComponent', () => {
    let component: GetEmailPasswordResetComponent;
    let fixture: ComponentFixture<GetEmailPasswordResetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GetEmailPasswordResetComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GetEmailPasswordResetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
