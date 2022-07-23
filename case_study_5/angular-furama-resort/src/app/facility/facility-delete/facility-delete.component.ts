import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-facility-delete',
  templateUrl: './facility-delete.component.html',
  styleUrls: ['./facility-delete.component.css']
})
export class FacilityDeleteComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

}
