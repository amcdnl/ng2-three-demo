import { Component } from '@angular/core';
import './app.scss';

@Component({
  selector: 'app',
  template: `
    <div>
      <header>
        <h1>ng2-three</h1>
      </header>
      <main>
        <three
          [height]="height"
          [width]="width"
          [ngModel]="data">
        </three>
      </main>
    </div>
  `
})
export class App {

  height: number = window.innerHeight - 50;

  width: number = window.innerWidth;

  data: any[] = [
    { name: 'bar' },
    { name: 'cat' }
  ];

}
