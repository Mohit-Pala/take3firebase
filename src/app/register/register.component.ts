import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FireauthService } from '../services/fireauth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router)
  fireAuth = inject(FireauthService)

  storage = [
    { displayName: 'Username', id: 'uname', type: 'text', extra: '' },
    { displayName: 'Email', id: 'email', type: 'email', extra: 'email' },
    { displayName: 'Password', id: 'pass', type: 'password', extra: 'minlength="4"' }
  ]

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.fireAuth.register(
      form.value.email,
      form.value.uname,
      form.value.pass
    ).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: (err) => {
        alert(err.code)
      },
    })
  }
}
