import { Component, OnInit } from '@angular/core';
import { NetworkingService } from '../../shared/networking/networking.service';
import { StorageService } from '../../shared/storage/storage.service';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {

  constructor(private networking: NetworkingService, private storage: StorageService) { }

  ngOnInit(): void {
    this.networking.request();
    this.storage.save('FeatureAComponent');
  }

}
