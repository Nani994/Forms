import { Component, OnInit } from '@angular/core';
import { Service1 } from './s1.service';

@Component({
    selector: 'c2',
    templateUrl: './c2.component.html'
})

export class Component2 implements OnInit {

    j:number;

    constructor(public s1:Service1){}

    getLatestData(){
        this.j = this.s1.getData;
    }

  ngOnInit() { }
}