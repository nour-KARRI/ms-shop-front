import { Component, inject, OnInit } from '@angular/core';
import { KeycloakService } from '../../../config/keycloak/keycloak.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isAuthenticated: boolean = false;
  username: string | undefined = "";
  
  constructor(private keycloakService: KeycloakService){}

  ngOnInit(): void {
    
  }

  login() {
  // this.keycloakService.login()
    this.isAuthenticated = false
    this.username = this.keycloakService.profile?.username

    console.log(this.username )
  }

  logout() {
  //  this.keycloakService.logout()
    this.isAuthenticated = true
  }

}
