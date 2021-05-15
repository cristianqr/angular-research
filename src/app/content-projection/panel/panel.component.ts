import { Component, Input, OnInit } from '@angular/core';
import { PanelType } from './models';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() type: PanelType = 'info';
  constructor() { }

  ngOnInit(): void {
  }

}
