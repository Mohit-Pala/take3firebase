import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FireauthService } from '../services/fireauth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router)
  fireAuthService = inject(FireauthService)

  storage = [
    {displayName : 'Email', id : 'email', type : 'email'},
    {displayName : 'Password', id : 'pass', type : 'password'}
  ]

  onSubmit(form : NgForm){
    console.log(form.value)
    
    this.fireAuthService.login(
      form.value.email,
      form.value.pass
    ).subscribe({
      next : () => {
        this.router.navigate([''])
      },
      error : (err) => {
        alert(err.code)
      }
    })
  }
}
