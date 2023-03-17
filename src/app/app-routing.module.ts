import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlldataComponent} from "./alldata/alldata.component";
import {ActiveComponent} from "./active/active.component";
import {CompletedComponent} from "./completed/completed.component";

const routes: Routes = [{path:'', component:AlldataComponent},
  {path:'active', component:ActiveComponent},{path: 'completed', component: CompletedComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
