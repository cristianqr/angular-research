import { Component } from '@angular/core';

@Component({
  selector: 'cqr-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'angular-research';
  test = 'hola como esta los anios';
  up(event: any) {
    console.log('upp', event);
  }

  down(event: any) {
    console.log('down', event);
  }
}
