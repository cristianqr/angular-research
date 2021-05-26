import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cqr-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.scss']
})
export class NgClassExampleComponent implements OnInit {
  todos: any[];
  constructor() {
    this.todos = [
      {
        title: 'Study Angular',
        completed: false,
      },
      {
        title: 'Study Java Script',
        completed: true,
      },
      {
        title: 'Study Sass',
        completed: false
      },
      {
        title: 'Study CSS',
        completed: true
      },
      {
        title: 'Study SOLID Principles',
        completed: false
      }
    ]
   }

  ngOnInit(): void {
  }

}
