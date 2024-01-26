import { Component, EventEmitter, Input, Output } from '@angular/core';
import { logging } from '../logging.service';
import { Accountservice } from '../accountservice.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() id:number;
  @Input() account:{name:string,status:string};

  constructor(private loggingservice:logging,private accountservice:Accountservice){};
  onSetTo(status: string) {
    this.accountservice.updateStatus(this.id,status);
    
    // this.loggingservice.logstatuschange(status);
    this.accountservice.statusUpdated.emit(status);
  }


}
