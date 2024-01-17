import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './CustomerApp/Home/Customer.MainModule';  


platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));
