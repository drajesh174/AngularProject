import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-myarray',
  templateUrl: './myarray.component.html',
  styleUrls: ['./myarray.component.css']
})
export class MyarrayComponent implements OnInit {

  constructor(private obj: HttpClient ) { }

  ngOnInit() {


  }

  alluser:any[]=[];
  getmyjsondata(){

 var alluser1:any[]=[];


  // var alluser: any[]=[];
this.obj.get("./assets/user.json").subscribe(

  data =>{
    alluser1=data as string[];
    this.alluser=alluser1;
    console.log(alluser1);
  }

)

}



  msg :string="";
item:any[] = ["phone","mobile","laptop","Desktop"];


 saveitem(itemname : string){

  this.item.push(itemname);
  this.msg="item addee successfully"

}


delitem(index:number){

var sts = confirm("are  u sure?");

if(sts==true){
  this.msg=  this.item[index]+"item deleted"
  this.item.splice(index,1);

}

}

//multi dimentional array

item2:any= [

{"name":"mouse","price":300,"qty":5},
{"name":"mobile","price":1500,"qty":6},
{"name":"laptop","price":4000,"qty":7},
{"name":"pendrive","price":100,"qty":8},

];


saveitem2(name:string,price:number,qty:number){

var newarray={"name":name,"price":price,"qty":qty}

this.item2 = this.item2.concat(newarray);

this.msg=  "item added successfully";
}


delitem2(index:number){

  var sts = confirm("are  u sure?");
  
  if(sts==true){
    this.msg=  this.item2[index].name+"item deleted"
    this.item2.splice(index,1);
  
  }
  
  }

}
