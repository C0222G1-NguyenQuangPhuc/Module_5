import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../rent-type/rent-type";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  formEdit: FormGroup;
  rentTypeList: RentType[];

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      idFacility: new FormControl(),
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
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.getFacility(id);
    this.getRentTypeList();
  }

  getFacility(id: number){
    this.facilityService.findById(id).subscribe(
      facility => {
      this.formEdit.patchValue(facility);
        console.log('kk')
        console.log(facility);
    });
  }

  getRentTypeList(){
    this.facilityService.getRentTypeList().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  edit(){
    console.log("form value");
    console.log(this.formEdit.value);
    this.facilityService.edit(this.formEdit.value).subscribe(
      res => {
        console.log(res);
        console.log("success");
    },error => {
        console.log("error");
        console.log(error);
      });
    this.router.navigateByUrl('/facility/page');
  }

}
