import { HomeComponent } from '../Home/Customer.Homecomponent';
import { CustomerComponent } from '../Customer/Customer.Customercomponent';
import { SupplierComponent } from '../Supplier/Customer.Suppliercomponent';


export const MainRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: '', component: HomeComponent }
  
];