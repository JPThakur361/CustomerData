import { Component } from '@angular/core';
import{Customer} from './Customer.Model'
import {BaseLogger} from "../Utility/Customer.Logger"
@Component({

  templateUrl: './Customer.CustomerView.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  Logobj: BaseLogger;
  constructor(_logger : BaseLogger){
     this.Logobj = _logger;
     this.Logobj.Log();

  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI
  }
}
