import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-serve', //app-serve is an element
 // selector :'[app-serve]', //[app-serve] is an attribute
  selector:'.app-serve', //.app-serve is class
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
 // template:'./serve.componenet.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
