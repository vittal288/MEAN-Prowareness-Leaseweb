import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {
  public isLoading: boolean;
  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

  onOpenModal() {
    $('#loadingModal').modal('show');
  }

  onCloseModal() {
    $('#loadingModal').modal('hide');
    $('.modal-backdrop').remove();
    $('.modal-backdrop').addClass('hide');
  }

}
