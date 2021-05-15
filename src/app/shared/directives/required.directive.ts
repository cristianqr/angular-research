import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRequired]'
})
export class RequiredDirective {

  constructor(private el: ElementRef) {
    const required = document.createElement('span');
    required.innerText = '(*)';
    required.style.color = 'red';
    required.style.fontWeight = 'bold';

    const labelSpan = document.createElement('span');
    labelSpan.innerText = el.nativeElement.textContent;
    el.nativeElement.innerHtml = '';

    el.nativeElement.append(required);
    el.nativeElement.append(labelSpan);
   }

}
