import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }
}
