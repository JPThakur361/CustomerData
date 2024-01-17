import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './Customer.Mastercomponent';
import { HomeComponent } from './Customer.Homecomponent';
import { MainRoutes } from '../Routing/Customer.MainRouting.module';




@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
