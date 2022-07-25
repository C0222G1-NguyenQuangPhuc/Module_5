import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../rent-type/rent-type";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypeList: RentType[];

  formAddNew: FormGroup;

  constructor(private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRentTypeList();
    this.formAddNew = new FormGroup({
      nameFacility: new FormControl(),
      areaUse: new FormControl(),
      price: new FormControl(),
      maxPeople: new FormControl(),
      rentType: new FormGroup({
        rentTypeId: new FormControl('', Validators.required),
      }),
      standard: new FormControl(),
      description: new FormControl(),
      numberOfFloor: new FormControl(),
      poolArea: new FormControl(),
      free: new FormControl(),
      url: new FormControl(),
    })
  }

  getRentTypeList(){
    this.facilityService.getRentTypeList().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  save(){
    this.facilityService.saveFacility(this.formAddNew.value).subscribe(
      value => {
        console.log(value);
        console.log("success");
      },
      error => {
        console.log(error);
      })
    this.formAddNew.reset();
    this.router.navigateByUrl('/facility/page')
  }
}
