import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarHandlerService } from 'src/app/_services/navbar-handler.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private navbarHandler: NavbarHandlerService) { 
              }

  option: string;
  isActivate: boolean;

  ngOnInit() {
    this.route.data
    .subscribe(v => {this.option = v["router"]
  console.log(this.option)});

  this.navbarHandler.change.subscribe(isActive => {
    console.log(isActive)
    this.isActivate = isActive;
  });
  }

}
