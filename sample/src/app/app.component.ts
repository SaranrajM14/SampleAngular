import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval } from 'rxjs';
import { DataServiceService } from './service/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  condition:boolean=false;
  showAll:any=[];
  loginForm=new FormGroup({
    username:new FormControl(null),
    password:new FormControl(null),
    id:new FormControl(null),
    status:new FormControl(null)
  });


  hi:any;

  saythanks(data: any){
    this.hi=data
    console.log(data)
    
  }

  chocolate=0;
  thankyoutext ='';
  sendtochild(){
    this.chocolate++;
    
  }
  // saythanks(event: string){
  //   this.thankyoutext=event;
  // }
  title = 'HTTP Service Calling';
  @Input() count: any;
 

  data=[
    {name:"nisha" ,age:18},
    {name:"arun" ,age:22},
    {name:"sam" ,age:12},
    {name:"karan" ,age:17},
    {name:"karnan",age:17},
    {name:"vijay",age:50},
    {name:"aniruth",age:30}

   
  ];
  register=[
    {username:"nisha",password:"Nisha@123#",id:"1",status:true},
    {username:"arun",password:"Arun@123#",id:"2",status:true},
    {username:"sam",password:"Sam@123#",id:"3",status:true},
    {username:"karan",password:"Karan@123#",id:"4",status:true},
    {username:"karnan",password:"Karnan@123#",id:"5",status:false},
    {username:"vijay",password:"Vijab@123#",id:"6",status:false},
    {username:"aniruth",password:"Aniruth@123#",id:"7",status:false},
    {username:"praveen",password:"Praveen@123#",id:"8",status:true},
    {username:"nishanthan",password:"Nishanthan@123#",id:"9",status:true},
    {username:"gokul",password:"Gokul@123#",id:"10",status:true}
  ];
  
  names:any;
  save(data:any){
    this.names=data.value;
    let value=this.data.filter(res=>{
      return res.age==this.names && res.name=='vijay';
    })
   
  
   
    console.log(value)
    console.log("value is",this.names)
  }
  
   log: any;
   log1:any;
   log2:any;
   log3:any;
  login(){
    console.log(  this.loginForm.value['username'])
    console.log(  this.loginForm.value['password'])
    console.log(  this.loginForm.value['id'])
    console.log(  this.loginForm.value['status'])
    this.log=this.loginForm.value['username'];
    this.log1=this.loginForm.value['password'];
    this.log2=this.loginForm.value['id'];
    this.log3=this.loginForm.value['status'];
   let value =this.register.filter(res=>{
      return res.username==this.log && res.password==this.log1 && res.id==this.log2 &&res.status==true
    })
    console.log(value)
    // console.log(this.loginForm.value)
    // // console.log("username is",this.register)
  }
  uname:any;
  he(){
   
   /*    this.condition=true;
  

    if(this.condition==true){
      this.uname=this.register;
      let values=this.register.filter(res=>{
        return res.status==this.uname ;
        
      this.showAll=this.uname;
    })
       */
this.uname=this.register.filter(res=>{
      return res.status==true
    })
    }
    no(){
   
     
   this.uname=this.register.filter(res=>{
         return res.status==false
       })
       }
       

  
   
  
  constructor(private _service:DataServiceService){
    /* interval(2000).subscribe((val:any) =>{
      this.ngOnInit();
      console.log(val);
    }
    ); */
    
    
  }
  ngOnInit(){
   
  }
  

}


