import { Component, OnInit } from '@angular/core';
import { Accountservice } from './accountservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Accountservice]
})
export class AppComponent implements OnInit{
  accounts: {name:string, status:string}[] = [];
  constructor(private accountservice:Accountservice) {};
  ngOnInit(): void {
    this.accounts = this.accountservice.accounts;
  }
}
