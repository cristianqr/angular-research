import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cqr-max-length-example',
  templateUrl: './max-length-example.component.html',
  styleUrls: ['./max-length-example.component.scss']
})
export class MaxLengthExampleComponent implements OnInit {
  lorems: string [];
  constructor() {
    this.lorems = [
      'Lorem, ipsum dolor.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit iste asperiores minus qui! Officiis, tempore rem. Pariatur ullam soluta aut.',
      'Lorem ipsum dolor sit amet consectetur.',
    ];
  }

  ngOnInit(): void {
  }

}
