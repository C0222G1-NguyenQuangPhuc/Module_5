import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractComponent} from "./contract/contract.component";
import {FacilityPageComponent} from "./facility/facility-page/facility-page.component";
import {FacilityCreateComponent} from "./facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";


const routes: Routes = [
  {path: 'contract/list', component: ContractComponent},
  {path: 'facility/page', component: FacilityPageComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
