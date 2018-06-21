import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Servers } from './../../../models/servers.model';


@Component({
  selector: 'app-list-of-servers',
  templateUrl: './list-of-servers.component.html',
  styleUrls: ['./list-of-servers.component.css']
})
export class ListOfServersComponent implements OnInit, OnChanges {

  @Input('servers') servers: Servers[];

  constructor(private router:Router) { }

  ngOnInit() {

  }

  ngOnChanges() {
    // console.log('serverssss 123', this.servers);
  }

  convertToInt(qt: string): number {
    return parseInt(qt);
  }

  convertCentToEur(cents:number):number{
    return cents / 100;
  }

  onServerDetails(){
    this.router.navigate(['/serverDetails'])
  }
}
