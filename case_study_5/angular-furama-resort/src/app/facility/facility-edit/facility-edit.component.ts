import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  formEdit: FormGroup = new FormGroup({
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
  });

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    const facility = this.facilityService.findById(id);
    this.formEdit.patchValue(facility);
  }

  edit(){
    let facility = this.formEdit.value;
    console.log(facility);
    this.facilityService.editById(facility);
    this.router.navigateByUrl('/facility/page');
  }

}
