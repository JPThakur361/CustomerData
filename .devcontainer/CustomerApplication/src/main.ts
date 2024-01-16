import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomerModule } from './CustomerApp/Customer.MainModule';


platformBrowserDynamic().bootstrapModule(CustomerModule)
  .catch(err => console.error(err));
