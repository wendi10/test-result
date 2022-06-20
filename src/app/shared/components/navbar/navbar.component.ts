import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

import { StorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public authData: any;
  constructor(private localStorage: StorageService, private router: Router) {
    this.authData = this.localStorage.getSessionToken()
  }

  ngOnInit(){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.authData = this.localStorage.getSessionToken();
      }
    });
  }

  public logout(): void {
    this.authData = {}
    this.localStorage.clear()
    this.router.navigate(['/'])
  }
}
