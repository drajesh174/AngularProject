import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor() {
   }

   

  ngOnInit() {
  }

  item:any[] =["mango","banana","apple","grape"];
  
}
