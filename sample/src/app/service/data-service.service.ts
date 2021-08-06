import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 cos:any=[];
  constructor(private http:HttpClient) { }
  getUser()
  {
    
    return this.http.get("http://localhost:3000/userDetails");
  }
  /* getEmp(){
    return this.http.get("http://localhost:3000/userDetails");
  }
  saving(data:any){
  this.cos.push(data)
  console.log("pushingData",this.cos);
  var result = this.cos.reduce((r:any, e:any) => (r.push(...e), r), [])
   console.log("finalResult",result);
  } */

  saveData(data:any){
    return this.http.post("http://localhost:3000/usersProfile",data);

  }
  getData(){
    return this.http.get("http://localhost:3000/usersProfile");
   
     
  }
  getDataId(id:any){
    return this.http.get("http://localhost:3000/usersProfile/"+id).pipe(
      map((data: any) => {
        return data;
      }),
       catchError( error => {
        return throwError('Cannot find your data!' );
      })
   );
  }
  updateData(id:any,data:any)
  {
    return this.http.put("http://localhost:3000/usersProfile/"+id,data)
  }
  status(){
   return this.http.get("http://localhost:3000/status");
  }
  
/* 
  getRestData(){
    return this.http.get("http://localhost:8080/getUserDetails");
  }
   */
  getRest(){
    return this.http.get("http://localhost:8080/user/2355ed22-7e59-483f-9528-0ed6c57d7529 ");
  }
  getRest1(){
    /* let params = new HttpParams();
    params = params.append('_page', 1);
    params = params.append('_limit', 10); */
    const opts = { params: new HttpParams({fromString: "page=1&limit=20"}) };
    return this.http.get("http://localhost:8080/user",opts);
  }

  /* getDataName(){
    let name="samy";
   return this.http.get("http://localhost:3000/usersProfile").pipe(
        map((data:any)=>data.filter((user:any) => user.firstName === name)),
         catchError( error => {
          return throwError('Cannot find your data!' );
        }));
    } */

  postRest(){
    
    return this.http.post("http://localhost:8080/products",{});
  }
  getDataName(){
  let name="samy";
 return this.http.get("http://localhost:3000/usersProfile").pipe(
      map((data:any)=>data.filter((user:any) => user.firstName === name)));
  }
} 


