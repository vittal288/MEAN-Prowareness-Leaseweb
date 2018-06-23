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

export class UtilityService {
    // constructor() {

    // }

    removeDuplicates(arr){
        debugger;
        console.log('GIVEN ARR', arr);
        var uniqueArr = [];
        var charMap ={};
        // let charMap = new Map();
        // arr.forEach((item) => {
        //     if (charMap.has(item)) {
        //         let value = charMap.get(item);
        //         charMap.set(item, value++);
        //     } else {
        //         charMap.set(item, 1);
        //     }
        // });

        arr.forEach((item)=>{
            console.log('item',item);
            if(charMap[item]){
                charMap[item]++
            }else{
                charMap[item] =1;
            }
        })


        // convert object keys  to array 
        // charMap.forEach((value, key) => {
        //     uniqueArr.push(key);
        // });
        console.log(charMap);
        for(let key in charMap){
            uniqueArr.push(key);
        }
        console.log('UNITQUE ARRAY' , uniqueArr)
        return uniqueArr;
    }

    storeToSession(key: string, value: any) {
        console.log('KEY', key, value);
        if (sessionStorage) {
            sessionStorage.setItem(key, JSON.stringify(value));
        } else {
            alert('your browser is not supporting the Session Storage !!!');
        }
    }

    getFromSession(key: string) {
        if (sessionStorage.getItem(key) !== '') {
            return JSON.parse(sessionStorage.getItem(key));
        }

    }

}