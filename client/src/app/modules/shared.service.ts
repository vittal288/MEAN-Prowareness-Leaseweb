// import { Injectable, Inject, Output, EventEmitter } from '@angular/core';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Subject } from 'rxjs/Subject';

// import { Message } from './../global-components/model/message.model';


// @Injectable()
// export class SharedService {

//     private msgs: Message[] = [];
//     private behaviorSubject = new BehaviorSubject<{}>([]);

//     constructor( @Inject(SharedService) private sharedService: SharedService) {

//     }

//     setData(data) {
//         this.behaviorSubject.next(data);
//     }

//     getData() {
//         return this.behaviorSubject.getValue();
//     }

//     // storeToSession(key: string, value: any) {
//     //     if (sessionStorage) {
//     //         sessionStorage.setItem(key, JSON.stringify(value));
//     //     } else {
//     //         alert('your browser is not supporting the Session Storage !!!');
//     //         // commented due circular dependcy injection issue
//     //         // this.toasterService.showToaster('info', 'Information', 'your browser is not supporting the Session Storage !!!')
//     //     }
//     // }

//     // getFromSession(key: string) {
//     //     if (sessionStorage.getItem(key) !== '') {
//     //         return JSON.parse(sessionStorage.getItem(key));
//     //     }

//     // }

//     // getPlainTextFromSession(key: string) {
//     //     if (sessionStorage.getItem(key) !== '') {
//     //         return sessionStorage.getItem(key);
//     //     }

//     // }

//     // removeSessionItem(key) {
//     //     sessionStorage.removeItem(key);
//     // }

//     // storeToLocalStorage(key: string, value: any) {
//     //     if (localStorage) {
//     //         localStorage.setItem(key, JSON.stringify(value));
//     //     } else {
//     //         alert('your browser is not supporting the Local Storage !!!');
//     //         // commented due circular dependcy injection issue
//     //         // this.toasterService.showToaster('info', 'Information', 'your browser is not supporting the Local Storage !!!')
//     //     }
//     // }

//     // getFromLocalStorage(key) {
//     //     return JSON.parse(localStorage.getItem(key));
//     // }

//     // removeLocalStorageItem(key) {
//     //     localStorage.removeItem(key);
//     // }

//     // clearSession() {
//     //     sessionStorage.clear();
//     // }

//     // clearLocalStorage() {
//     //     localStorage.clear();
//     // }

//     // // for Lo component..
//     // getUrlFromKey(key, objSession) {
//     //     let strURL: string;
//     //     for (const item in objSession) {
//     //         if (item === key) {
//     //             strURL = objSession[item];
//     //             break;
//     //         }
//     //     }
//     //     return strURL;
//     // }
//     // // remove space from string
//     // removeSpace(str: string, toLowerCase: boolean): string {
//     //     if (toLowerCase) {
//     //         return str.replace(/\s/g, '').toLocaleLowerCase();
//     //     } else {
//     //         return str.replace(/\s/g, '');
//     //     }
//     // }
//     // // remove special charactors by -
//     // removeSpecialChars(str: string, toLowerCase: boolean): string {
//     //     if (toLowerCase) {
//     //         return str.replace(/[^\w\s]/gi, '-').toLocaleLowerCase();
//     //     } else {
//     //         return str.replace(/[^\w\s]/gi, '-');
//     //     }
//     // }

// }
