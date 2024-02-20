import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../domain/data-access/auth.service';

@Component({
    selector: 'sfa-sign-in',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, NgIf],
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
    private authService = inject(AuthService);

    private router = inject(Router);

    form = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required]),
    });

    authError?: string;
    showPassword = false;

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    async onSubmit() {
        const { email, password } = this.form.value;
        if (!email || !password) {
            return;
        }
        try {
            await this.authService.signIn(email, password);
        } catch (error: any) {
            this.authError = error.message;
        }
    }
}
