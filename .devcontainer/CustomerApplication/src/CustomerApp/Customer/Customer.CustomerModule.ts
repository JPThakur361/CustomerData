import { NgModule, importProvidersFrom } from '@angular/core';

import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './Customer.Customercomponent';
import { CustomerRoutes } from '../Routing/Customer.CustomerRouting.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CustomerComponent
    
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,ReactiveFormsModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
