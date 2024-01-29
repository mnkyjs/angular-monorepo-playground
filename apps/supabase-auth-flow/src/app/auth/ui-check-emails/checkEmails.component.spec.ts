import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckEmailsComponent } from './checkEmails.component';

describe('CheckEmailsComponent', () => {
    let component: CheckEmailsComponent;
    let fixture: ComponentFixture<CheckEmailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CheckEmailsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CheckEmailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
