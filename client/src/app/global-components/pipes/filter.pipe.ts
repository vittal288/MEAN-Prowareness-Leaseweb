import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'filter',
    pure:false
})

export class FilterPipe implements PipeTransform{
    transform(value:any){
        if (value.length === 0) {
            return value;
        }

        var uniqueArr = [];
        let charMap = new Map();
        value.forEach((item) => {
            if (charMap.has(item)) {
                let value = charMap.get(item);
                charMap.set(item, value++);
            } else {
                charMap.set(item, 1);
            }
        });
        charMap.forEach((value, key) => {
            uniqueArr.push(key);
        });
        return uniqueArr;
    }
}