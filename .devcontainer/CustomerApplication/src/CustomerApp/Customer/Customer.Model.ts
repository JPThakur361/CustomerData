import{
     NgForm,
        FormGroup,
           FormControl,
             Validators, 
             FormBuilder} from '@angular/forms'

export class Customer{
    CustomerCode:string = "";
    CustomerName:string = "";
    CustomerAmount:number = 0;

    formCustomerGroup: FormGroup;
    constructor(){
         var _builder = new FormBuilder();
         this.formCustomerGroup = _builder.group({});
         // control --> validation 
         this.formCustomerGroup.
         addControl("CustomerNameControl",
                     new FormControl('',Validators.required)
         );
         // customer code control -> 
         // Required , 4 letter numeric 
          
         var validationCollection = [
          Validators.required,
          Validators.pattern('^[0-9]{4}$')
        ];
         
        this.formCustomerGroup.
        addControl("CustomerCodeControl",
                    new FormControl('',Validators.compose(validationCollection)));
    }

}
// create -> we create the validation object model
// connnect ->  we connect the validation model to UI.
//check..-> IsValid, IsDitry


