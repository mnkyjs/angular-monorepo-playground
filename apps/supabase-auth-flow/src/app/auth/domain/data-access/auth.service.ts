import { Injectable, inject } from '@angular/core';
import { SupabaseClientService } from '../../../shared/util-supabase-client/supabase-client.service';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    supabase = inject(SupabaseClientService).supabase;

    router = inject(Router);

    async sendResetPasswordEmail(email: string) {
        const redirectTo = Capacitor.isNativePlatform() ? 'supaauthflow://password-reset' : 'http://localhost:4201/password-reset';
        const { error } = await this.resetPasswordForEmail(email, redirectTo);
        if (error) {
            throw new Error(error.message);
        }
    }

    getUserSession() {
        return this.supabase.auth.getUser();
    }

    async signOut() {
        const { error } = await this.supabase.auth.signOut();
        if (error) {
            throw new Error(error.message);
        } else {
            await this.router.navigate(['/']);
        }
    }

    async updatePassword(newPassword: string) {
        const { error } = await this.supabase.auth.updateUser({
            password: newPassword,
        });
        if (error) {
            throw new Error(error.message);
        }
    }

    async signIn(email: string, password: string) {
        const { error } = await this.supabase.auth.signInWithPassword({ email, password });
        await this.router.navigate(['/user']);
        if (error) {
            throw new Error(error.message);
        }
    }

    async setSession(access_token: string, refresh_token = '') {
        return this.supabase.auth.setSession({ access_token, refresh_token });
    }

    private async resetPasswordForEmail(email: string, redirectTo: string) {
        const { error } = await this.supabase.auth.resetPasswordForEmail(email, { redirectTo });
        return { error };
    }
}
