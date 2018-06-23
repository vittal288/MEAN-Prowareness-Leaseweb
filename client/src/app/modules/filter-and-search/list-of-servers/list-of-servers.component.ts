import { Component, OnInit, Input} from '@angular/core';

import { Servers } from './../../../models/servers.model';


@Component({
  selector: 'app-list-of-servers',
  templateUrl: './list-of-servers.component.html',
  styleUrls: ['./list-of-servers.component.css']
})
export class ListOfServersComponent implements OnInit {

  @Input('servers') servers: Servers[];

  constructor() { }

  ngOnInit() {
    //
  }

  convertToInt(qt: string): number {
    return Number(qt);
  }

  convertCentToEur(cents:number):number{
    return cents / 100;
  }
}
