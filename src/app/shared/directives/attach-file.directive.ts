import { Directive, ElementRef, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttachFile]'
})
export class AttachFileDirective implements OnInit{
  fileElement: HTMLInputElement;
  @Output() appAttachFileSelect = new EventEmitter();

  constructor(private el: ElementRef) {
    this.fileElement = document.createElement('input');
    this.fileElement.type = 'file';
    this.fileElement.hidden = true;
    this.fileElement.addEventListener('change', (e) => {
      const file = (e.target as any).files[0];
      this.appAttachFileSelect.emit(file);
    });
  }

  ngOnInit() {
    console.log(this.el.nativeElement.parentNode);
    this.el.nativeElement.insertAdjacentElement('afterend', this.fileElement);
  }

  @HostListener('click')
  attach() {
    this.fileElement.click();
  }
}
