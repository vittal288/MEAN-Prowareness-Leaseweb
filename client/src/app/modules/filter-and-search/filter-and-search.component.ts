import { Component, OnInit, OnChanges } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { FilterAndSearchService } from './filter-and-search.service';
import { Servers } from './../../models/servers.model';



@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.css']
})
export class FilterAndSearchComponent implements OnInit {
  public servers:Servers[] = []; // 
  public noOfServers: number;
  constructor(private filterAndSearchService: FilterAndSearchService,
    private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    this.filterAndSearchService.getServers().subscribe((result) => {

      this.servers = result.servers;
      this.servers.forEach((item) => {
        this.filterAndSearchService.locations.push(item.location);
        this.filterAndSearchService.hddTypes.push(item.hdd.type);
        this.filterAndSearchService.ramSizes.push(item.ram.memory);
      });
      this.noOfServers = result.servers.length;

      console.log(this.noOfServers);
    });


    this.filterAndSearchService.filteredServers.subscribe((result) => {
      this.servers = result.servers;
      this.noOfServers = result.servers.length;
    })
  }
}
