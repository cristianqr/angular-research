import { Injectable } from '@angular/core';
import { Storage } from './storage';

@Injectable()
export class StorageService {
  private core: Storage;

  constructor() {
    this.core = new Storage();
   }
  save(value: any) {
    this.core.save(value);
  }
}
