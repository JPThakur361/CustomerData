import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './Customer.Mastercomponent';
import { HomeComponent } from './Customer.Homecomponent';
import { MainRoutes } from '../Routing/Customer.MainRouting.module';
import { BaseLogger,ConsoleLogger,DbLogger, FileLogger } from '../Utility/Customer.Logger';




@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
    
  ],
  providers: [{
     provide: BaseLogger,
     useClass: ConsoleLogger
  }],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
