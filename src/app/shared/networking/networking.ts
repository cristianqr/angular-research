import { NetworkingConfig } from './models';
export class Networking {
  constructor(private config: NetworkingConfig) {}
  request() {
    console.log('Networking:====>', this.config);
  }
}
