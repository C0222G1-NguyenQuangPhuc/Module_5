import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../customer';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerId: number;
  customerName: string;
  keyword: string;
  p = 1;

  constructor(private customerService: CustomerService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe(customerList => {
      this.customerList = customerList;
      console.log(this.customerList);
    });
  }

  getInfo(id: number, name: string) {
    this.customerId = id;
    this.customerName = name;
  }

  delete() {
    this.customerService.delete(this.customerId).subscribe(
      res => {
        console.log('success');
        console.log(res);
        this.toastr.success('Xóa khách hàng thành công', 'Thông báo', {
          timeOut: 2000,
          progressBar: true
        });
        this.getCustomerList();
      }, error => {
        this.toastr.error('Xóa không khách hàng thành công', 'Thông báo', {
          timeOut: 2000,
          progressBar: true
        });
        console.log('error');
        console.log(error);
      });
  }

  search(value: string) {
    this.customerService.search(value).subscribe(list => {
      this.customerList = list;
    });
  }
}
