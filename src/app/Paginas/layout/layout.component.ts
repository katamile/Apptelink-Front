import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  authToken: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    debugger;
    this.authToken = localStorage.getItem('token');
  }
}
