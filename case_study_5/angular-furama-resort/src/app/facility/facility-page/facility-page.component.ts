import { Component, OnInit } from '@angular/core';
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

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getFacilityList();
  }

  getFacilityList(){
    this.facilityList = this.facilityService.getFacilityList();
  }
}
