import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Facility} from "../facility";

@Component({
  selector: 'app-facility-page',
  templateUrl: './facility-page.component.html',
  styleUrls: ['./facility-page.component.css']
})
export class FacilityPageComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityId: number;
  facilityName: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getFacilityList();
  }

  getFacilityList() {
    this.facilityService.getFacilityList().subscribe(facilityList => {
      this.facilityList = facilityList;
      console.log(this.facilityList);
    })
  }

  getInfo(id: number, name: string) {
    this.facilityId = id;
    this.facilityName = name;
  }

  delete() {
    this.facilityService.delete(this.facilityId).subscribe(
      res => {
        console.log("success");
        console.log(res);
        this.getFacilityList();
      },error => {
        console.log("error");
        console.log(error);
      });
  }
}
