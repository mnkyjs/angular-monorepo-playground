import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./splash-screen/ui-home-screen/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'check-emails',
        loadComponent: () => import('./auth/ui-check-emails/checkEmails.component').then((m) => m.CheckEmailsComponent),
    },

    {
        path: 'password-reset',
        loadComponent: () => import('./auth/feature-passwort-reset/passwordReset.component').then((m) => m.PasswordResetComponent),
    },
    {
        path: 'get-email-password-reset',
        loadComponent: () =>
            import('./auth/feature-request-password/getEmailPasswordReset.component').then((m) => m.GetEmailPasswordResetComponent),
    },
];
