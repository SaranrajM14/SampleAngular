import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() user:any;
  data: any;
  regForm=new FormGroup({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl('')
  })
  listData: any;
  editable: any;
  id: any;
  constructor(private _service:DataServiceService) { }
  
  ngOnInit(): void {

   /*  this._service.getUser().subscribe((res:any)=>{
      this.data=res;
  }); */
}

/* finesh(){
  console.log("2st",this.data);
  this._service.saving(this.data)

} */
action(employeeid:any){
  console.log("work",employeeid);
}
save()
{
  let detail=this.regForm.value;
  this._service.saveData(detail).subscribe(res=>{
    console.log(res);
    this.regForm.reset();

  });

 

}

list(){

  this._service.getData().subscribe(res=>{
    this.listData=res;
   
   
    
    
  });
}

update(){
  let detail=this.regForm.value;
  console.log("update :",detail);
  this._service.updateData(this.id,detail).subscribe(res=>{
    console.log(res);
    this._service.getData().subscribe(res=>{
    this.listData=res;
    });
    this.regForm.reset();

  });

 
}

edit(id:any)
{
  this.id=id;
 this._service.getDataId(id).subscribe(res=>{
  this.editable=res;
   this.regForm.patchValue({
     firstName:this.editable.firstName,
     secondName:this.editable.secondName,
     address:this.editable.address,
     city:this.editable.city
   })

 });
}
}
