import { Component, OnInit } from '@angular/core';

import { FilterAndSearchService } from './../../filter-and-search.service';

import { UtilityService } from './../../../utility';

@Component({
  selector: 'app-drop-downs',
  templateUrl: './drop-downs.component.html',
  styleUrls: ['./drop-downs.component.css']
})
export class DropDownsComponent implements OnInit {
  // public locations = ['AmsterdamAMS-01','AmsterdamAMS-02','AmsterdamAMS-03'];
  // public hddTypes = ['SSD', 'SATA2', 'SAS'];
  public hddTypes = [];
  public locations = [];

  public selectedLocation: string;
  public selectedHdd: string;
  constructor(private filterAndSearchService: FilterAndSearchService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.locations = this.filterAndSearchService.locations;
    this.hddTypes = this.filterAndSearchService.hddTypes;
  }

  onHddSelect(hdd) {
   
    this.filterAndSearchService.selectedFilter['hdd'] = hdd;

    this.filterAndSearchService.getServers().subscribe((results) => {
      this.filterAndSearchService.filteredServers.emit(results);
    });
  }

  onLocationSelect(location) {
    this.filterAndSearchService.selectedFilter['location'] = location;

    this.filterAndSearchService.getServers().subscribe((results) => {
      this.filterAndSearchService.filteredServers.emit(results);
    });
  }
}
