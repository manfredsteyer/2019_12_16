import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bus: ReplaySubject<any>;

  constructor() { }

  ngOnInit() {
    this.bus = window['serviceBus']
    this.bus.next('Client A is here now!');
  }

  send() {
    this.bus.next('Hello from Client A');
  }

}
