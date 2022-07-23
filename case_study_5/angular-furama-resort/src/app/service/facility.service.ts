import { Injectable } from '@angular/core';
import {Facility} from "../facility/facility";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility [] = [
    {
      idFacility: 1,
      nameFacility: 'OCEAN SUITE',
      areaUse: 85.8,
      price: 50,
      maxPeople: 4,
      rentType: 'Tháng',
      standard: 'Deluxe',
      description: 'Đang hoạt động',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg'
    },
    {
      idFacility: 2,
      nameFacility: 'OCEAN STUDIO SUITE',
      areaUse: 40.1,
      price: 100,
      maxPeople: 4,
      rentType: 'Năm',
      standard: 'Suite',
      description: 'Đang hoạt động',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M-1047x563.jpg'
    },
    {
      idFacility: 3,
      nameFacility: 'OCEAN DELUXE',
      areaUse: 43.7,
      price: 40,
      maxPeople: 4,
      rentType: 'Ngày',
      standard: 'Deluxe',
      description: 'Đang hoạt động',
      url: 'data:image/jpeg;base64,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'
    },
    {
      idFacility: 4,
      nameFacility: 'LAGOON SUPERIOR',
      areaUse: 40.1,
      price: 50,
      maxPeople: 2,
      rentType: 'Tháng',
      standard: 'Superior',
      description: 'Đang hoạt động',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M-1047x563.jpg'
    },
    {
      idFacility: 5,
      nameFacility: 'GARDEN DELUXE',
      areaUse: 43.7,
      price: 50,
      maxPeople: 2,
      rentType: 'Năm',
      standard: 'Deluxe',
      description: 'Đang hoạt động',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-M-1047x563.jpg'
    },
    {
      idFacility: 6,
      nameFacility: 'PRESIDENT SUITE',
      areaUse: 130,
      price: 200,
      maxPeople: 4,
      rentType: 'Năm',
      standard: 'President',
      description: 'Đang hoạt động',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-M-1047x563.jpg'
    }
  ]

  constructor() { }

  getFacilityList(){
    return this.facilityList;
  }

  saveFacility(facility: Facility){
    this.facilityList.push(facility);
  }

  findById(id: number): Facility{
    return this.facilityList.find(facility => facility.idFacility = id);
  }

  findIndex(id: number): number {
    for (const index in this.facilityList) {
      if (this.facilityList[index].idFacility === id) {
        return Number(index);
      }
    }
  }

  editById(facility: Facility){
    for (let i = 0; i < this.facilityList.length ; i++) {
      if (this.facilityList[i].idFacility === facility.idFacility){
        this.facilityList[i] = facility;
        break;
      }
    }
    // console.log(facility);
    // const index = this.findIndex(facility.idFacility);
    // console.log(index);
    // this.facilityList.splice(index, 1, facility);
    console.log("success");
  }

  deleteById(facility: Facility){
    for (let i = 0; i < this.facilityList.length ; i++) {
      if (this.facilityList[i].idFacility === facility.idFacility){
        this.facilityList.splice(i, 1);
        break;
      }
    }
  }

  
}
