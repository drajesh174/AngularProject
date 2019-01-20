import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mycar',
  templateUrl: './mycar.component.html',
  styleUrls: ['./mycar.component.css']
})
export class MycarComponent implements OnInit {

  constructor(private obj : HttpClient) { }

  ngOnInit() {

    this.getMyCar(); //to execute on page load
  }

allcar:any[];
msg:string="";
getMyCar(){

  var url = "http://cybotrix.com/ios/car.json";
this.obj.get(url).subscribe(

data => {

  this.allcar = data as string[];
  this.msg="total car is "+this.allcar.length;
  console.log(this.msg);
}

);

}

p:number=1; //by default it show the result of first page
skeyword:string;

}
