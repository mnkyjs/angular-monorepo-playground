import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./auth/sign-in/sign-in.component').then((m) => m.SignInComponent),
    },
    {
        path: 'check-emails',
        loadComponent: () => import('./auth/ui-check-emails/checkEmails.component').then((m) => m.CheckEmailsComponent),
    },
    {
        path: 'user',
        loadComponent: () => import('./auth/feature-user/feature-user.component').then((m) => m.FeatureUserComponent),
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
