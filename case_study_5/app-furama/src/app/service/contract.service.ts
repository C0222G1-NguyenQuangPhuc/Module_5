import { Injectable } from '@angular/core';
import {Contract} from "../contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [
    {
      contractId: 1,
      customer: 'Nguyễn Quang Phúc',
      facility: 'Villa-01',
      dateCreate: '15-01-2022',
      dateEnd: '15-02-2022',
      deposit: 100
    },
    {
      contractId: 2,
      customer: 'Nguyễn Duy Trung',
      facility: 'Villa-02',
      dateCreate: '16-01-2022',
      dateEnd: '16-02-2022',
      deposit: 50
    },
    {
      contractId: 3,
      customer: 'Nguyễn Thiên Duy',
      facility: 'Villa-03',
      dateCreate: '17-01-2022',
      dateEnd: '17-02-2022',
      deposit: 100
    },
    {
      contractId: 4,
      customer: 'Huỳnh Nhật Hoàng',
      facility: 'Villa-04',
      dateCreate: '18-01-2022',
      dateEnd: '18-02-2022',
      deposit: 150
    },
  ]

  constructor() { }

  getAll(){
    return this.contractList;
  }
}
