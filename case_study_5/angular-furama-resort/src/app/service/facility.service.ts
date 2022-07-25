import {Injectable} from '@angular/core';
import {Facility} from "../facility/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {RentType} from "../rent-type/rent-type";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  getFacilityList(): Observable<Facility[]>{
    return this.http.get<Facility[]>(API_URL + '/facility');
  }

  getRentTypeList(): Observable<RentType[]>{
    return this.http.get<RentType[]>(API_URL + '/rent-type');
  }

  saveFacility(facility: Facility): Observable<Facility>{
    return this.http.post<Facility>(API_URL + '/facility', facility);
  }

  findById(id: number): Observable<Facility>{
    console.log('check api')
    console.log(this.http.get<Facility>(`${API_URL}/facility/${id}`).subscribe(data=>{
      console.log(data)
    }));
    return this.http.get<Facility>(`${API_URL}/facility/${id}`);
  }

  edit(facility: Facility): Observable<Facility>{
    return this.http.patch<Facility>(`${API_URL}/facility/${facility.idFacility}`, facility);
  }

  delete(id: number): Observable<Facility>{
    return this.http.delete<Facility>(`${API_URL}/facility/${id}`);
  }

}
