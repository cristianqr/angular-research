import { Inject, InjectionToken, ModuleWithProviders, NgModule, Optional, Self, SkipSelf } from '@angular/core';
import { NetworkingConfig } from './models';
import { networkingConfig } from './options.injector';
import { NetworkingService } from './networking.service';

// export const ROUTER_FORROOT_GUARD = new InjectionToken<void>('ROUTER_FORROOT_GUARD');
export const forRootGuard = new InjectionToken<void>('forRootGuard');

// // https://timdeschryver.dev/blog/guarding-your-angular-modules
// export const THEME_ROOT_GUARD = new InjectionToken<void>(
//   'Internal Theme ForRoot Guard',
// )

// export function provideForRootGuard(router: Router): any {
//   if ((typeof ngDevMode === 'undefined' || ngDevMode) && router) {
//     throw new Error(
//         `RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.`);
//   }
//   return 'guarded';
// }

// export function createThemeRootGuard(theme) {
//   if (theme) {
//     throw new TypeError(
//       `ThemeModule.forRoot() called twice. Feature modules should use ThemeModule.forFeature() instead.`,
//     )
//   }
//   return 'guarded'
// }

export function createRootGuard(config: NetworkingConfig) {
  if (config) {
    throw new TypeError(
      `NetworkingModule.forRoot() called twice. Feature modules should use ThemeModule.forFeature() instead.`,
    )
  }
  return 'guarded'
}

@NgModule()
export class NetworkingModule {
  constructor(
    @Optional()
    @Inject(forRootGuard)
    guard: any,
  ) {}
  static forRoot(config: NetworkingConfig): ModuleWithProviders<NetworkingModule> {
    return {
      ngModule: NetworkingModule,
      providers: [
        {
          provide: networkingConfig,
          useValue: config,
        },
        {
          provide: forRootGuard,
          useFactory: createRootGuard,
          deps: [[networkingConfig, new Optional(), new SkipSelf()]],
        },
        NetworkingService,

      ]
    };
  }
  static forFeature(config: NetworkingConfig): ModuleWithProviders<NetworkingModule> {
    return {
      ngModule: NetworkingModule,
      providers: [
        {
          provide: networkingConfig,
          useValue: config,
        },
        NetworkingService,

      ]
    };
  }
}
