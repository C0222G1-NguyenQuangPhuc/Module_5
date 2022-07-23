import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { FacilityPageComponent } from './facility/facility-page/facility-page.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityDeleteComponent } from './facility/facility-delete/facility-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    FacilityPageComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    FacilityDeleteComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
