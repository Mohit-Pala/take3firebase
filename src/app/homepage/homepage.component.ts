import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from '../services/fireauth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  constructor (private router : Router) {}

  message = ''
  loggedIn = false
  userName = ''
  email = ''


  authService = inject(FireauthService)
  ngOnInit(): void {
    this.authService.user$.subscribe((user: any)=>{
      if(user) {
        this.message = 'logged in'
        this.userName = user.displayName
        this.email = user.email
        this.loggedIn = true
      }
      else {
        this.message = 'logged out'
      }
    })
  }

  paths = [
    {display: 'Login', path: '/login'},
    {display: 'Register', path: '/register'}
  ]

  navigate(path: string) {
    this.router.navigate([path])
  }
}
