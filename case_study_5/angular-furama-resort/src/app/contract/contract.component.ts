import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";
import { Contract } from './contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.contractList = this.contractService.getAll();
  }
}
