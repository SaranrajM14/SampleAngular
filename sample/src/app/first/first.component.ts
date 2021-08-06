import { splitClasses } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { elementAt } from 'rxjs/operators';
import { DataServiceService } from '../service/data-service.service';
import { ArraySortPipe } from '../sort.pipe';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  data:any=[];
  arr:any=[];
  tan:any=[];
  restData:any=[];
  isChecked:boolean=false;
  tom:any=[];
  sam:any=[]
  lst:any=[];
  dataValues:any;
  listArray:any=[
    {firstname:"abc",
lastname:"one",
employeeid:"123456789"},{firstname:"xyz",
lastname:"two",
employeeid:"987654321"}]

  constructor(private _service:DataServiceService,private route:Router) { }
  ngOnInit(): void {





    this._service.getData().subscribe((res:any)=>{
     // console.log(res)
      let badJson = JSON.stringify(res);
      //console.log(badJson);
      //now it is partially fixed with value of string type trimed                                                                                                         
    badJson = JSON.parse(badJson,function(key,value){
    if(typeof value === 'string'){
      return value.trim();
    }
  return value;
  });

  let sam=JSON.stringify(badJson)
  if(badJson==badJson){
    //console.log("hi")
  }

console.log(JSON.stringify(badJson));

this._service.status().subscribe((res:any)=>{
  console.log("all recod",res)
  this.dataValues=res;

 console.log("so",this.dataValues)


/* res.sort((a:any,b:any)=>{
    return b.case - a.case;
  }) */
  this.sam=res.sort((a:any,b:any)=>{
    return new Date(a.sdate).getTime() - new Date(b.sdate).getTime();
  })
  let arr:any=[];
  this.sam.forEach((element:any) => {
    arr.push(element.sdate)
  }); 
  this.lst=new Set(arr);
  console.log(this.lst)
  /* console.log(this.lst)
 let dam= this.sam.splice(0, 3);
 console.log(dam) */
 let take:any=[]
 let cal:any;
 let newArray:any=[]
 let temp:any=[]

 this.lst.forEach((element:any) => {
   

   let match= this.sam.filter((res:any)=>{
    return res.sdate==element;
   })

   console.log("filter",match)
let sum: number = match.map((a:any) => a.case).reduce(function(a:any, b:any)
{
  return a + b;
});
 let newData={
   "date":element,
   "totalCase":sum/match.length
 }
 
 newArray.push(newData)
  temp=newArray.reverse();

   console.log("sum",sum)

 
  });
 console.log("dataFinal",newArray)

 for(let i=0;i<=temp.length;i++) {
   let one=temp[0];
   let two=temp[1];
   let three=temp[2];
  if(one && two && three){
   let comp:any=[];
   console.log("hi")
   comp.push(one,two,three);
   console.log("comp",comp)
   let finesh: number = comp.map((a:any) => a.totalCase).reduce(function(a:any, b:any)
   {
    return a + b;
  });
  console.log(temp[i])
 
   
  console.log("last",finesh)
  let per=(finesh-temp[i].totalCase)/temp[i].totalCase;

  console.log("last",per.toFixed(2))

  cal={"date":temp[0].date,
  "case3":per}
  console.log("col",cal)
  

}


temp = temp.slice(i+1, temp.length);
 
 }


})

 
   });




   let old=10;
   let lat=15;
   let eq=(lat-old)/old;
   console.log("%",eq)


}

test() {
  this._service.getRest().subscribe((res:any)=>{
   console.log(res);
});
}

test1(){
  this._service.getRest1().subscribe((res:any)=>{
    console.log(res);
 });
}

test2(){
  this._service.postRest().subscribe((res:any)=>{
    console.log(res);
 });
}

thirt(){
  this.route.navigate(['/test']);
}

/* next(){
  console.log("1st",this.data);
  this._service.saving(this.data);
  this.route.navigate(['/second']);
  } */
  next()
  {
    this.route.navigate(['/second']);
  }
  
 

  /* show(){
    this._service.getRestData().subscribe(res=>{
      console.log("restData",res);

      this.restData.push(res);
      console.log("Key name chage before api array json data=>",this.restData);

      let  str = JSON.stringify( this.restData);
      console.log("JSON.stringify Data=>",str);
      str = str.replace(/\"firstName\":/g, "\"name\":");
      console.log("JSON.parse Data=>",str);
      let again = JSON.parse(str);
      console.log("Key name chage ofter api array json data=>",again);
    })
  } */
}
