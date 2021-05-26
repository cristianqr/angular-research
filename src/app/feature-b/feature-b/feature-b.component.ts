import { Component, OnInit } from '@angular/core';
import { NetworkingService } from '../../shared/networking/networking.service';
import { StorageService } from '../../shared/storage/storage.service';

@Component({
  selector: 'cqr-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss']
})
export class FeatureBComponent implements OnInit {

  constructor(private networking: NetworkingService, private storage: StorageService) { }

  ngOnInit(): void {
    this.networking.request();
    this.storage.save('FeatureBComponent');
  }

}
