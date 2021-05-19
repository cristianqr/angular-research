import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRequired]'
})
export class RequiredDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const required = document.createElement('span');
    required.innerText = ' (*)';
    required.style.color = 'red';
    required.style.fontWeight = 'bold';

    this.el.nativeElement.appendChild(required);
  }
}
