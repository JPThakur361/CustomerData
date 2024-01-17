import { HomeComponent } from "../Home/Customer.Homecomponent";


export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', loadChildren: () => import('../Customer/Customer.CustomerModule').then(m => m.CustomerModule) },
    { path: 'Supplier', loadChildren: () => import('../Supplier/Customer.SupplierModule').then(m => m.SupplierModlue) },
    { path: '', component: HomeComponent }
    
];