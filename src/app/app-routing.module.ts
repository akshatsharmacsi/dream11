import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step1Component } from './pages/step1/step1.component'
import { Step2Component } from './pages/step2/step2.component'
import {  Step3Component } from './pages/step3/step3.component'


const routes: Routes = [
  {path:'', component:Step1Component},
  {path:'step2', component:Step2Component},
  {path:'step3', component:Step3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
