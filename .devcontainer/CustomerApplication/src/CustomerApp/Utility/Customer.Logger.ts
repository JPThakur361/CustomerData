import { concatWith } from "rxjs";

export interface ILogger{
   Log(): void;

} 
export class  BaseLogger implements ILogger{
     Log(): void {
         
     }
     
}
export class ConsoleLogger extends BaseLogger{
     override Log(): void {
        console.log("Using COnsole ");
     }
}
export class DbLogger extends BaseLogger{
     
    override Log(): void {
         console.log("DbLogger ");
    }
}
export class FileLogger extends BaseLogger{
     
   override Log(): void {
         console.log("FileLogger ");
    }
}