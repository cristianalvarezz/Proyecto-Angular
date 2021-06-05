import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthServiceService,
    private router: Router ) { }

  ngOnInit() {
  }
  salir() {
   this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
