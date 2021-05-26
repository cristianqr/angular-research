import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cqr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() width: string = 'auto';
  @Output() modalClose = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal() {
    // this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next();
  }
}
