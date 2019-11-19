import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  option: string;

  ngOnInit() {
    this.route.data
    .subscribe(v => {this.option = v["router"]
  console.log(this.option)});
  }

}
