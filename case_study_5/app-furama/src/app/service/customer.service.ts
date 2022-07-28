import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Customer} from '../customer/customer';
import {CustomerType} from '../customer/customer-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/list-customer');
  }

  getCustomerTypeList(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/customer-type');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/list-customer', customer);
  }

  findById(id: number): Observable<Customer> {
    console.log('check api');
    console.log(this.http.get<Customer>(`${API_URL}/list-customer/${id}`).subscribe(data => {
      console.log(data);
    }));
    return this.http.get<Customer>(`${API_URL}/list-customer/${id}`);
  }

  edit(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${API_URL}/list-customer/${customer.id}`, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/list-customer/${id}`);
  }

  search(keyword: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/list-customer?customerName_like=${keyword}`);
  }
}
