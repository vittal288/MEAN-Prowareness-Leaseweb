import { Component, OnInit,OnChanges } from '@angular/core';


import { FilterAndSearchService } from './filter-and-search.service';
import { Servers } from './../../models/servers.model';



@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.css']
})
export class FilterAndSearchComponent implements OnInit {
  public servers:Servers[] = []; // implement model for this item
  public noOfServers:number;
  constructor(private filterAndSearchService: FilterAndSearchService) { }

  ngOnInit() {
    this.filterAndSearchService.getServers().subscribe((result) => {

      this.servers = result;
      this.servers['servers'].forEach((item)=>{
        this.filterAndSearchService.locations.push(item.location);
        this.filterAndSearchService.hddTypes.push(item.hdd.type);
        this.filterAndSearchService.ramSizes.push(item.ram.memory);
      });
      this.noOfServers = this.servers['servers'].length;
    });
    
    
    this.filterAndSearchService.filteredServers.subscribe((result)=>{
      this.servers = result;
      this.noOfServers = this.servers['servers'].length;
    })
  }
}
