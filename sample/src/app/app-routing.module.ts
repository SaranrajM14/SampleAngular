import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TestcaseComponent } from './testcase/testcase.component';

const routes: Routes = [
{ path:'',component:FirstComponent},
{ path:'first',component:FirstComponent},
{ path:'second',component:SecondComponent},
{ path:'test',component:TestcaseComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
