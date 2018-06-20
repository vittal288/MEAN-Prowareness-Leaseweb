import { Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { Message } from './../global-components/model/message.model';
// import { SharedService } from './shared.service';

@Injectable()
export class ToasterService {
    private msgs: Message[] = [];

    // constructor( @Inject(SharedService) private sharedService: SharedService) {

    // }

    // showToaster(severity: string, title: string, message: string) {
    //     this.msgs.push({ severity: severity, summary: title, detail: message });
    //     this.sharedService.setData(this.msgs);
    //     this.clear();
    // }
    // private clear() {
    //     this.msgs = [];
    // }
}

// export class UtilityService {
//     constructor( @Inject(ToasterService) private toasterService: ToasterService,
//         @Inject(SharedService) private sharedService: SharedService) {

//     }
//     scrollerPosition(x, y) {
//         window.scrollTo(x, y);
//     }

//     omitSpecialChar(event) {
//         let  k;
//         k  = event.charCode || event.keyCode || event.which;
//         if ((k  >  64  &&  k  <  91)  ||  (k  >  96  &&  k  <  123)  ||
//     k  ===  8  ||  k  ===  32  ||  (k  >=  48  &&  k  <=  57)  ||
//     (k  ===  8)  ||  (k  ===  46)) {
//             return;
//         }  else  {
//             this.toasterService.showToaster('error', 'Error', 'Please do not enter special character');
//         }
//     }


//     updateTenantContext(args: any) {
//         if (this.sharedService.getFromSession('tenantContext')) {
//             const sessionTenantContextObj = this.sharedService.getFromSession('tenantContext')[0];
//             if (this.hasProperty(args) && this.hasProperty(sessionTenantContextObj)) {
//                 const contCatObj = Object.assign({}, sessionTenantContextObj, args );
//                 this.pushToTenantContextSessionArray(contCatObj);
//             }
//         } else {
//             if (this.hasProperty(args)) {
//                 this.pushToTenantContextSessionArray(args);
//             }
//         }
//     }

//     // // added comment in VSTS to Aatish Sharma,
//     // // Code duplicate is happened, commented by Vittal , please use the existing method "updateTenantContext"
//     updateTenantLanguage(args: any) {
//         if (this.sharedService.getFromSession('selectedLanguage')) {
//             const sessionTenantLanguageObj = this.sharedService.getFromSession('selectedLanguage')[0];
//             if (this.hasProperty(args) && this.hasProperty(sessionTenantLanguageObj)) {
//                 const contLangObj = Object.assign({}, sessionTenantLanguageObj, args);
//                 this.pushToLanguageSessionArray(contLangObj);
//             }
//         } else {
//             if (this.hasProperty(args)) {
//                 this.pushToLanguageSessionArray(args);
//             }
//         }
//     }

//     private pushToTenantContextSessionArray(args: {}) {
//         const tenatContext = [];
//         const storingObj = {};
//         for (const key in args) {
//             if (args.hasOwnProperty(key)) {
//                 storingObj[key] = args[key];
//             }
//         }
//         tenatContext.push(storingObj);
//         this.sharedService.storeToSession('tenantContext', tenatContext);
//     }

//     private pushToLanguageSessionArray(args: {}) {
//         const languageContext = [];
//         const storingLangObj = {};
//         for (const key in args) {
//             if (args.hasOwnProperty(key)) {
//                 storingLangObj[key] = args[key];
//             }
//         }
//         languageContext.push(storingLangObj);
//         this.sharedService.storeToSession('languageContext', languageContext);
//     }

//     private hasProperty(obj) {
//         for (const key in obj) {
//             if (obj[key] !== null) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     renameKeyesInObjects(data, fromKey, toKey) {

//         data.forEach((obj) => {
//             obj[toKey] = obj[fromKey];
//             delete obj[fromKey];
//         });
//         return data;
//     }

//     sortArrayAlphabetically(arr: any[], keyName: string) {
//         return arr.sort(function (a, b) {
//             return a[keyName].toLowerCase().localeCompare(b[keyName].toLowerCase());
//         });
//     }

//     isEmpty(obj): boolean {
//         for (const prop in obj) {
//             if (obj.hasOwnProperty(prop)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }


//     checkObjForNullAndEmpty(obj: any): boolean {
//         if (!this.isEmpty(obj) && obj !== null && obj !== undefined) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     // 3270707621 --> 327-070-7621
//     splitAIDByHypen(aid: string) {
//         return `${aid.substr(0, 4)}-${aid.substr(4, 3)}-${aid.substr(7, 3)}`;
//     }

//     /**
//      * detect IE
//      * returns version of IE or false, if browser is not Internet Explorer
//      */
//     detectIE() {
//         const ua = window.navigator.userAgent;

//         // Test values; Uncomment to check result …

//         // IE 10
//         // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

//         // IE 11
//         // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

//         // IE 12 / Spartan
//         // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

//         // Edge (IE 12+)
//         // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)
//         // AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
//         const msie = ua.indexOf('MSIE ');
//         if (msie > 0) {
//             // IE 10 or older => return version number
//             return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//         }

//         const trident = ua.indexOf('Trident/');
//         if (trident > 0) {
//             // IE 11 => return version number
//             const rv = ua.indexOf('rv:');
//             return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
//         }

//         const edge = ua.indexOf('Edge/');
//         if (edge > 0) {
//             // Edge (IE 12+) => return version number
//             return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
//         }

//         // other browser
//         return false;
//     }
// }
