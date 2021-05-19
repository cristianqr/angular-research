import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
