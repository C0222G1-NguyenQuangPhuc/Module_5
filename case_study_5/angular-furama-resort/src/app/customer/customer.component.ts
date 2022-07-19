import { Component, OnInit } from '@angular/core';
import { Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [
    {
      idCustomer: 1,
      nameCustomer: 'Nguyễn Quang Phúc',
      dayOfBirth: '29-06-1998',
      idCard: 201739982,
      address: 'Đà Nẵng',
      typeCustomer: 'Platinum'
    },
    {
      idCustomer: 2,
      nameCustomer: 'Nguyễn Duy Trung',
      dayOfBirth: '10-10-2003',
      idCard: 202535982,
      address: 'Quảng Nam',
      typeCustomer: 'Platinum'
    },
    {
      idCustomer: 3,
      nameCustomer: 'Nguyễn Thiên Duy',
      dayOfBirth: '15-05-1995',
      idCard: 199491322,
      address: 'Quảng Nam',
      typeCustomer: 'Platinum'
    },
    {
      idCustomer: 4,
      nameCustomer: 'Huỳnh Nhật Hoàng',
      dayOfBirth: '13-04-1996',
      idCard: 199232322,
      address: 'Đà Nẵng',
      typeCustomer: 'Platinum'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
