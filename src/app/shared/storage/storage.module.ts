import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StorageService } from './storage.service';



@NgModule({
  providers: [StorageService]
})
export class StorageModule {
  constructor(@Optional() @SkipSelf() storageModule: StorageModule) {
    if(storageModule) {
      throw new TypeError(`StorageModule is imported twice.`);
    }
  }
}
