import { Injectable, inject } from '@angular/core';
import { SupabaseClientService } from '../../../shared/util-supabase-client/supabase-client.service';
import { Router } from '@angular/router';

enum MobileOS {
    Android = 'android',
    iOS = 'ios',
    Unknown = 'unknown',
    WindowsPhone = 'Windows Phone',
}

enum DesktopOS {
    Linux = 'linux',
    MacOS = 'mac_os',
    Unix = 'unix',
    Unknown = 'unknown',
    Windows = 'windows',
}

const userAgent: string = navigator.userAgent;

const isMobileDevice = (): boolean => {
    const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i];
    return regexs.some((regex) => regex.test(userAgent));
};
const isTabletDevice = (): boolean => {
    const regex = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
    return regex.test(userAgent.toLowerCase());
};
const isDesktopDevice = (): boolean => !isMobileDevice() && !isTabletDevice();

const getDesktopOS = (): DesktopOS | undefined => {
    if (isDesktopDevice()) {
        if (userAgent.includes('Win')) return DesktopOS.Windows;
        else if (userAgent.includes('Mac')) return DesktopOS.MacOS;
        else if (userAgent.includes('X11')) return DesktopOS.Unix;
        else if (userAgent.includes('Linux')) return DesktopOS.Linux;
        return DesktopOS.Unknown;
    }
    return undefined;
};

const getMobileOS = (): MobileOS | undefined => {
    if (isMobileDevice()) {
        if (/windows phone/i.test(userAgent)) return MobileOS.WindowsPhone;
        else if (/android/i.test(userAgent)) return MobileOS.Android;
        if (/iPad|iPhone|iPod/.test(userAgent)) return MobileOS.iOS;
        return MobileOS.Unknown;
    }
    return undefined;
};

type DeviceOS = DesktopOS | MobileOS;
const getDeviceOS = (): DeviceOS | undefined => getMobileOS() ?? getDesktopOS();

const getRedirectToUrl = (deviceOS: DeviceOS | undefined): string => {
    return deviceOS && Object.values(MobileOS).includes(deviceOS as MobileOS)
        ? 'supaauthflow://password-reset'
        : 'http://localhost:4201/password-reset';
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    supabase = inject(SupabaseClientService).supabase;

    router = inject(Router);

    async sendResetPasswordEmail(email: string) {
        const deviceOS = getDeviceOS();
        const redirectTo = getRedirectToUrl(deviceOS);
        const { error } = await this.resetPasswordForEmail(email, redirectTo);
        if (error) {
            throw new Error(error.message);
        }
    }

    getSessionEmail() {
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
            console.log(error);
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
