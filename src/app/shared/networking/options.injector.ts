import { InjectionToken } from '@angular/core';
import { NetworkingConfig } from './models/networking-config';

export const networkingConfig = new InjectionToken<NetworkingConfig>(
  'NETWORKING_CONFIG'
);
