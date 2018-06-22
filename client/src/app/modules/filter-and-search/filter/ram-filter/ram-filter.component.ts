import { Component, OnInit } from '@angular/core';


import { FilterAndSearchService } from './../../filter-and-search.service';
import { UtilityService } from './../../../utility';

@Component({
  selector: 'app-ram-filter',
  templateUrl: './ram-filter.component.html',
  styleUrls: ['./ram-filter.component.css']
})
export class RamFilterComponent implements OnInit {
  public rams = [2, 4, 8, 12, 16, 24, 32, 48, 64, 96];
  public selectedRams =[];

 
  constructor(private filterAndSearchService : FilterAndSearchService,
              private utilityService: UtilityService) { }

  ngOnInit() {
  }

  onChange(event,index){
    let obj = new Object();
    obj['ram'] = event.source.value;
    obj['selected'] = event.checked;
    this.selectedRams.push(obj);



    this.filterAndSearchService.selectedFilter['rams'] = this.selectedRams;
    // this.utilityService.storeToSession('filter',this.filterAndSearchService.selectedFilter);

    this.filterAndSearchService.getServers().subscribe((results)=>{
      // console.log('RESULT RAMS', results);
    })
  }

}
