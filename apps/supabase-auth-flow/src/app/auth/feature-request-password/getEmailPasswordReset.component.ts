import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../domain/data-access/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'sfa-get-email-password-reset',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './getEmailPasswordReset.component.html',
    styleUrl: './getEmailPasswordReset.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetEmailPasswordResetComponent {
    private authService = inject(AuthService);
    private router = inject(Router);

    form = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
    });

    authError?: string;

    async onSubmit() {
        this.authError = undefined;
        if (this.form.valid) {
            const email = this.form.value.email!;
            try {
                await this.authService.sendResetPasswordEmail(email);
                await this.router.navigate(['/']);
            } catch (error: any) {
                this.authError = error.message;
            }
        }
    }
}
