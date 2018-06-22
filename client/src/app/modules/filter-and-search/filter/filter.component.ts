import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  // expansion panel 
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
