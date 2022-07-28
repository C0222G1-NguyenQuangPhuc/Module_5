import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypeList: CustomerType[] = [];

  formAddNew: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCustomerTypeList();
    this.formAddNew = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.pattern('[\\w\\s]+$')]),
      dayOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('(090)[\\d]{7}|(091)[\\d]{7}')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormGroup({
        customerTypeId: new FormControl('', Validators.required)
      })
    })
  }

  getCustomerTypeList(){
    this.customerService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  save(){
    this.customerService.saveCustomer(this.formAddNew.value).subscribe(
      value => {
        console.log(value);
        console.log("success");
      },
      error => {
        console.log(error);
      })
    this.formAddNew.reset();
    this.router.navigateByUrl('/customer/list')
  }
}
