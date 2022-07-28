import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";
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
      nameFacility: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\\s]+$')]),
      areaUse: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      rentType: new FormGroup({
        rentTypeId: new FormControl('', Validators.required),
      }),
      standard: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      numberOfFloor: new FormControl('', [Validators.required, Validators.min(1)]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
      free: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
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
