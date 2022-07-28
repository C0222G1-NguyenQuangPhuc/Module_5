import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../customer-type';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    customerName: new FormControl('', [Validators.required, Validators.pattern('[\\w\\s]+$')]),
    dayOfBirth: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
    customerEmail: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required]),
    // customerType: new FormGroup({
    //   id: new FormControl(),
    //   customerTypeName: new FormControl()
    // })
    customerType: new FormControl('', Validators.required)
  });
  customerTypeList: CustomerType[] = [];
  customerType: CustomerType;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.getCustomer(id);
    this.getCustomerTypeList();
  }

  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(
      customer => {
        this.formEdit.patchValue(customer);
        console.log('function getCustomer');
        this.customerType = customer.customerType;
        console.log(customer);
      });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  getCustomerTypeList() {
    this.customerService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  edit() {
    // const customer = this.formEdit.value;
    // this.customerTypeList.forEach(tem => {
    //   if (tem.id === Number(customer.customerType.id)) {
    //     customer.customerType = tem;
    //   }
    // });
    const id = this.formEdit.value.customerType.id;
    console.log('function edit');
    console.log(id);
    this.customerService.edit(this.formEdit.value).subscribe(
      res => {
        console.log(res);
        console.log('success');
        this.toastr.success('Chỉnh sửa thành công');
      }, error => {
        console.log('error');
        this.toastr.error('Khong thành công');
        console.log(error);
      });
    this.router.navigateByUrl('/customer/list');
  }

}
