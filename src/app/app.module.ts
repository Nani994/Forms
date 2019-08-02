import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import { Component1 } from './c1.component';
import { Component2 } from './c2.component';
import { Service1 } from './s1.service';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,Component1,Component2],
    providers: [Service1],
    bootstrap:[AppComponent]
})
export class AppModule { }
