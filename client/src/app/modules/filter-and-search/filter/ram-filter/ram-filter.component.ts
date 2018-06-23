import { Component, OnInit } from '@angular/core';


import { FilterAndSearchService } from './../../filter-and-search.service';

@Component({
  selector: 'app-ram-filter',
  templateUrl: './ram-filter.component.html',
  styleUrls: ['./ram-filter.component.css']
})
export class RamFilterComponent implements OnInit {
 
  public rams = [];
  public selectedRams =[];

 
  constructor(private filterAndSearchService : FilterAndSearchService) { }

  ngOnInit() {
    this.rams = this.filterAndSearchService.ramSizes;
  }

  onChange(event,index){
   
    this.filterAndSearchService.selectedRams.push(event.source.value);

    this.filterAndSearchService.getServers().subscribe((results)=>{
      this.filterAndSearchService.filteredServers.emit(results);
    });
  }

}
