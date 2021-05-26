import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cqr-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.scss']
})
export class NgStyleExampleComponent implements OnInit {
  students: any[];
  constructor() {
    this.students = [
      {
        name: 'Carlos',
        score: 18,
      },
      {
        name: 'Pedro',
        score: 10,
      },
      {
        name: 'Maria',
        score: 13,
      },
      {
        name: 'Martha',
        score: 5
      },
      {
        name: 'Juan',
        score: 20,
      },
    ];
  }

  ngOnInit(): void {
  }

}
