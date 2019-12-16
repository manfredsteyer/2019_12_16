import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor() {

    // Perhaps you need an own smarter alternative to ReplaySubject
    // which is, e. g. doing multiplexing etc.
    const bus = new ReplaySubject(10);
    window['serviceBus'] = bus;

    bus.subscribe(msg => {
      console.debug('SHELL got an message', msg);
    });
    

    this.load('client-a-widgets');
  }

  clientsMap = new Map<string, HTMLElement>();

  hideAll() {
    this.clientsMap.forEach(elm => elm['hidden'] = true);
  }

  navigate(microFrontendName: string): void {
    // Normally, we would use some metadata abt the micro frontends

    this.hideAll();

    if (!this.clientsMap.has(microFrontendName)) {
      this.load(microFrontendName);

      const fe = document.createElement(microFrontendName);
      const content = document.getElementById('content');
      content.appendChild(fe);

      this.clientsMap.set(microFrontendName, fe);

    } else {
      const element = this.clientsMap.get(microFrontendName);
      element['hidden'] = false;
    }

  }

  private load(microFrontendName: string) {
    const path = `/assets/${microFrontendName}/main.js`;
    const script = document.createElement('script');
    script.src = path;
    document.body.appendChild(script);
  }
}
