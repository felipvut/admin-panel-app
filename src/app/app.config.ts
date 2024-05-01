import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { en_US, provideNzI18n, pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask'
import pt from '@angular/common/locales/pt';
registerLocaleData(pt);
const maskConfig: Partial<IConfig> = {
  validation: false,
};

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzI18n(pt_BR), importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideEnvironmentNgxMask(maskConfigFunction),
    provideHttpClient(withFetch()),
  ]
};
