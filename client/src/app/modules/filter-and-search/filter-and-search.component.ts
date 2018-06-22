import { Component, OnInit,OnChanges } from '@angular/core';


import { FilterAndSearchService } from './filter-and-search.service';
import { Servers } from './../../models/servers.model';



@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.css']
})
export class FilterAndSearchComponent implements OnInit, OnChanges {
  public servers:Servers[] = []; // implement model for this item
  constructor(private filterAndSearchService: FilterAndSearchService) { }

  ngOnInit() {
    this.filterAndSearchService.getServers().subscribe((result) => {
      this.servers = result;
    });

    // this.filterAndSearchService.sliderValue.subscribe((sliderVal)=>{
    //   this.filterAndSearchService.getServers(sliderVal).subscribe((result) => {
    //     this.servers = result;
    //   });
    // });
  }

  ngOnChanges(){
    // this.filterAndSearchService.sliderValue.subscribe((sliderVal)=>{
    //   console.log('slider val11', sliderVal);
    // });
  }

}
