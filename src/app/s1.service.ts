import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs'; 

@Injectable()

export class Service1 {

    data:number;

    dataToSend:Subject<number> = new Subject<number>();

    getData(){
        return this.dataToSend.asObservable;
    }
    setData(value:number){
        this.data = value;
        this.dataToSend.next(this.data);
    }


}