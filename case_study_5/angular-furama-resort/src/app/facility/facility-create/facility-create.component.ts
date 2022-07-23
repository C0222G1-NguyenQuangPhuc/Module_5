import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  formAddNew: FormGroup = new FormGroup({
    nameFacility: new FormControl(),
    areaUse: new FormControl(),
    price: new FormControl(),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    standard: new FormControl(),
    description: new FormControl(),
    numberOfFloor: new FormControl(),
    poolArea: new FormControl(),
    free: new FormControl(),
    url: new FormControl(),
  });

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    const facility = this.formAddNew.value;
    this.facilityService.saveFacility(facility);
    this.formAddNew.reset();
    console.log("Success");
  }
}
