import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/Customer.Logger';
@Component({

  templateUrl: './Customer.HomeView.html',
})
export class HomeComponent {
   Logobj : BaseLogger ;
   constructor (_loger: BaseLogger){
    this.Logobj = _loger
     this.Logobj.Log();
   }
}
