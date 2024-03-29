import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Todo} from '../todo';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }

  addNew(todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL, todo);
  }

  updateTodo(todo): Observable<Todo> {
    return this.http.put<Todo>(API_URL + "/" + todo.id, todo);
  }

  delete(todo): Observable<Todo> {
    return this.http.delete<Todo>(API_URL + "/" + todo.id);
  }
}
