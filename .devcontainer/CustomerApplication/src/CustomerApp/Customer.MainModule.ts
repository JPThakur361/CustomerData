import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './Customer/Customer.Customercomponent';
import { HomeComponent } from './Home/Customer.Homecomponent';
import { SupplierComponent } from './Supplier/Customer.Suppliercomponent';
import { MasterPageComponent } from './Home/Customer.Mastercomponent';
import { MainRoutes } from './Routing/Customer.MainRouting.module';


@NgModule({
  declarations: [
    MasterPageComponent,CustomerComponent,
    HomeComponent,SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
