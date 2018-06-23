import { Injectable } from "@angular/core";

import { environment } from '../environments/environment';


@Injectable()
export class AppSettings {

    public CONFIG = {
        "REST_API": {
            "API_END_POINT": `${environment.apiURL}/${environment.endPoint}`
        }
    }
}