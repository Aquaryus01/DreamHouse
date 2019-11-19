import { Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import {NavbarHandlerService} from 'src/app/_services/navbar-handler.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActivate: boolean
  constructor(private navbarHandler: NavbarHandlerService) { 
    this.isActivate = false;
  }

  handleNavbar(){
    this.isActivate = !this.isActivate;
    this.navbarHandler.handle(this.isActivate);
  }

  ngOnInit() {
  }

}
