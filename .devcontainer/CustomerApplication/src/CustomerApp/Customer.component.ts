import { Component } from '@angular/core';
import{Customer} from './Customer.Model'
@Component({
  selector: 'app-root',
  templateUrl: './Customer.View.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI
  }
}
