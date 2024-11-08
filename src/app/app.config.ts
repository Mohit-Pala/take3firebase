import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './config_files/config';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp({
    "projectId": firebaseConfig.projectId,
    "appId": firebaseConfig.appId,
    "storageBucket": firebaseConfig.storageBucket,
    "apiKey": firebaseConfig.apiKey,
    "authDomain": firebaseConfig.authDomain,
    "messagingSenderId": firebaseConfig.messagingSenderId
  })),
  provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
