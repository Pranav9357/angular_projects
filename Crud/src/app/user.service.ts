import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    return this.http.get<User[]>(`${this.url}` + '/getUser');
  }

  createUser(user: object): Observable<any> {
    return this.http.post(`${this.url}` + '/createUser', user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.url}/deleteUserById/${id}`);
  }

  getUser(id: any): Observable<any> {
    return this.http.get(`${this.url}/getUserById/${id}`);
  }

  updateUser(id: any, data: any): Observable<Object> {
    return this.http.put(`${this.url}/updateUser/${id}`, data);
  }

  deleteAllUser(): Observable<any> {
    return this.http.delete(`${this.url}/deleteAllUser`);
  }

  getByName(name: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/getUserByName/${name}`);
  }
}
