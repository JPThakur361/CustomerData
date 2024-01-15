import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { CustomerRoutingModule } from './Customer-routing.module';
import { CustomerComponent } from './Customer.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
