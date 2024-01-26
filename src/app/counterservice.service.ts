import { Injectable } from "@angular/core";

@Injectable()

export class countservice{
    print(count:number){
        alert(count);
    }
}