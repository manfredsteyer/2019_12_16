import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'client-b',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-b';

  bus: ReplaySubject<any>;

  constructor() { }

  ngOnInit() {
    this.bus = window['serviceBus']
    this.bus.next('Client B is here now!');

    this.bus.subscribe(msg => {
      console.debug('Client B got a message', msg);
    });
  }

}
