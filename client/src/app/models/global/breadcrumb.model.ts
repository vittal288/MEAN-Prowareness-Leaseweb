import { Params } from '@angular/router';

export class BreadcrumbModel {
    label: string;
    params: Params;
    url: string;
    constructor(label: string, params: Params, url: string){
        this.label = label;
        this.params = params;
        this.url = url;
    }
  }
