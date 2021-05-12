import { Inject, Injectable } from '@angular/core';
import { NetworkingConfig } from './models';
import { Networking } from './networking';
import { networkingConfig } from './options.injector';

@Injectable()
export class NetworkingService {
  private core: Networking;
  constructor(
    @Inject(networkingConfig)
    config: NetworkingConfig
  ) {
    this.core = new Networking(config);
   }

  request() {
    this.core.request();
  }
}
