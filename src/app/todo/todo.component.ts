import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  number: number = 0;
  @Output() up = new EventEmitter<number>();
  @Output() down = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  upNumber() {
    if(this.number === this.max) {
      return;
    }
    this.number++;
    this.up.emit(this.number);
  }
  downNumber() {
    if(this.number === this.min) {
      return;
    }
    this.number--;
    this.down.emit(this.number);
  }
}
