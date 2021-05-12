import { Component, OnInit } from '@angular/core';
import { NetworkingService } from '../../shared/networking/networking.service';
import { StorageService } from '../../shared/storage/storage.service';

@Component({
  selector: 'app-feature-c',
  templateUrl: './feature-c.component.html',
  styleUrls: ['./feature-c.component.scss']
})
export class FeatureCComponent implements OnInit {

  constructor(private networking: NetworkingService, private storage: StorageService) { }

  ngOnInit(): void {
    this.networking.request();
    this.storage.save('FeatureCComponent');
  }

}
