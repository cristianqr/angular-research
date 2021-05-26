import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cqr-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modalClose() {
    console.log('=====>');
    this.router.navigate(['/people']);
  }
}
