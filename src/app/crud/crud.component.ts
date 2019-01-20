import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getUser();
  }


  msg:string="";
  alluser:any[];
  getUser(){

    var url = "http://cybotrix.com/angularapi/getrecord.php";

    this.obj.get(url).subscribe(

data =>{

  this.alluser= data as string[];
  this.msg=this.alluser.length +"-users loded successfully";
}

    );

  }


saveuser(name:string,mobile:number,email:string,city:string,msg:string){

  this.msg="please wait processing";
  var url = "http://cybotrix.com/angularapi/save.php";
var jsondata= {"name":name,"mobile":mobile,"city":city,"email":email,"message":msg};

this.obj.post(url,jsondata).subscribe(

data=>{

  this.msg="data send sucessfully";
  this.getUser();//to reload the list
}

);

}

}
