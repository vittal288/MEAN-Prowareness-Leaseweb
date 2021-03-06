import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FilterAndSearchService } from './../../filter-and-search.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public value: number;
  constructor(private filterAndSearchService: FilterAndSearchService) {
    //
  }


  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1024) {
      return Math.round(value / 1000) + 'TB';
    } else {
      return `${value} GB`;
    }
  }

  onChange() {
    this.filterAndSearchService.selectedFilter['slider'] = this.value;

    this.filterAndSearchService.getServers().subscribe((results) => {
      this.filterAndSearchService.filteredServers.emit(results);
    });
  }

  ngOnInit() {
    //
  }

}
