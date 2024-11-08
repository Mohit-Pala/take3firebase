
import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user, UserCredential } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FireauthService {

  constructor() { }

  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth)

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(
      (response) => updateProfile(response.user, { displayName: username })
    )
    return from(promise)
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => { { } })
    return from(promise)
  }
}
