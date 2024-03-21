import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.mnkyjssfa.app',
    appName: 'supabase-auth-flow',
    webDir: '../../dist/apps/supabase-auth-flow',
    server: {
        hostname: 'localhost',
        androidScheme: 'https',
        cleartext: true,
    },
    plugins: {
        PushNotifications: {
            presentationOptions: ['badge', 'sound', 'alert'],
        },
    },
};

export default config;
