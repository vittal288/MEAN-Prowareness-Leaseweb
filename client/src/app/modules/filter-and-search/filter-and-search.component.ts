import { Component, OnInit } from '@angular/core';


import { FilterAndSearchService } from './filter-and-search.service';
import { Servers } from './../../models/servers.model';



@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.css']
})
export class FilterAndSearchComponent implements OnInit {
  public servers:Servers[] = []; // implement model for this item
  constructor(private filterAndSearchService: FilterAndSearchService) { }

  ngOnInit() {
    this.filterAndSearchService.getServers().subscribe((result) => {
      // console.log('result', result);
      this.servers = result;
    });
  }

}
