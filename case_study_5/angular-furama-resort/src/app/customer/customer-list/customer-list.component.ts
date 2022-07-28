import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerId: number;
  customerName: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe(customerList => {
      this.customerList = customerList;
      console.log(this.customerList);
    })
  }

  getInfo(id: number, name: string) {
    this.customerId = id;
    this.customerName = name;
  }

  delete() {
    this.customerService.delete(this.customerId).subscribe(
      res => {
        console.log("success");
        console.log(res);
        this.getCustomerList();
      },error => {
        console.log("error");
        console.log(error);
      });
  }
}
