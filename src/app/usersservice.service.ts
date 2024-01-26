import { Injectable } from "@angular/core";
import { countservice } from "./counterservice.service";
@Injectable()

export class userservice{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    count = 0;
    constructor(private cntservice:countservice) {};
    onSetToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.count += 1;
        this.cntservice.print(this.count);
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.count += 1;
        this.cntservice.print(this.count);

      }
}