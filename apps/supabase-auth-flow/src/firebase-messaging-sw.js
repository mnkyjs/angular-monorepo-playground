/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyAD9X118r5PENtZoPcoy1pE50KxHn5WGGk',
    authDomain: 'supabase-auth-flow.firebaseapp.com',
    projectId: 'supabase-auth-flow',
    storageBucket: 'supabase-auth-flow.appspot.com',
    messagingSenderId: '745617678234',
    appId: '1:745617678234:web:f9244643fab563b2526423',
    vapidKey: 'BB28tJbGD_hy_2m5gzqJ0K1QiHUnRs-q-at_82wgs34aHcQgsQ8fx0JR-h7VVbQ0gFQGlWO1sq8fl812wV16Gv4',
});
const messaging = firebase.messaging();
