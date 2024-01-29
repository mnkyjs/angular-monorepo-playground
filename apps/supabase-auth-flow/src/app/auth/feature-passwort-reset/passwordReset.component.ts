import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../domain/data-access/auth.service';

@Component({
    selector: 'sfa-password-reset',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, NgIf],
    templateUrl: './passwordReset.component.html',
    styleUrl: './passwordReset.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordResetComponent implements OnInit, OnDestroy {
    form = new FormGroup({
        newPassword: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        newPasswordConfirm: new FormControl<string>('', [Validators.required]),
    });
    authError?: string;
    fragmentHasError = false;
    showPassword = false;
    private authService = inject(AuthService);
    private router = inject(Router);
    private activeRoute = inject(ActivatedRoute);

    async ngOnInit() {
        const fragment = this.activeRoute.snapshot.fragment;
        this.fragmentHasError = !fragment?.includes('access_token');
    }

    ngOnDestroy() {
        this.authService.signOut();
    }

    async toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    async onSubmit() {
        this.authError = undefined;
        if (this.form.valid) {
            const newPassword = this.form.value.newPassword!;

            try {
                await this.authService.updatePassword(newPassword);
                await this.router.navigate(['/login']);
            } catch (error: any) {
                this.authError = error.message;
            }
        }
    }
}
