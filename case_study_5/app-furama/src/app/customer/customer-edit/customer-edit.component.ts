import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../customer-type";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formEdit: FormGroup;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      customerId: new FormControl(),
      customerName: new FormControl('', [Validators.required, Validators.pattern('[\\w\\s]+$')]),
      dayOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('(090)[\\d]{7}|(091)[\\d]{7}')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormGroup({
        customerTypeId: new FormControl('', Validators.required)
      })
    })
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.getCustomer(id);
    this.getCustomerTypeList();
  }

  getCustomer(id: number){
    this.customerService.findById(id).subscribe(
      customer => {
        this.formEdit.patchValue(customer);
        console.log(customer);
      });
  }

  getCustomerTypeList(){
    this.customerService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  edit(){
    this.customerService.edit(this.formEdit.value).subscribe(
      res => {
        console.log(res);
        console.log("success");
      },error => {
        console.log("error");
        console.log(error);
      });
    this.router.navigateByUrl('/customer/list');
  }

}
