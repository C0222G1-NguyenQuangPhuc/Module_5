import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Facility} from '../facility';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-page',
  templateUrl: './facility-page.component.html',
  styleUrls: ['./facility-page.component.css']
})
export class FacilityPageComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityId: number;
  facilityName: string;

  constructor(private facilityService: FacilityService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getFacilityList();
  }

  getFacilityList() {
    this.facilityService.getFacilityList().subscribe(facilityList => {
      this.facilityList = facilityList;
      console.log(this.facilityList);
    });
  }

  getInfo(id: number, name: string) {
    this.facilityId = id;
    this.facilityName = name;
  }

  delete() {
    this.facilityService.delete(this.facilityId).subscribe(
      res => {
        console.log('success');
        console.log(res);
        this.getFacilityList();
      }, error => {
        console.log('error');
        console.log(error);
      });
  }
}
