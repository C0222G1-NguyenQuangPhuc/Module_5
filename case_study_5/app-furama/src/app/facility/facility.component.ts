import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

  }

}
