import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { SupplierComponent } from './Customer.Suppliercomponent';

import { SupplierRoutes } from '../Routing/Customer.SupplierRouting.module copy';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
   
    SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
 
   CommonModule, FormsModule
    
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModlue { }
