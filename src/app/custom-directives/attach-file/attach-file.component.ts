import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'cqr-attach-file',
  templateUrl: './attach-file.component.html',
  styleUrls: ['./attach-file.component.scss']
})
export class AttachFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectFile(file: File) {
    console.log(file);
  }
}
