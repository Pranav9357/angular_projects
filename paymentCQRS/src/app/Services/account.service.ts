import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Account } from '../Model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8000/account';


  constructor(private http : HttpClient) { }

  createAcoount(data : any) {
    return this.http.post<any>(`${this.url}/create`, data)
    .pipe(map((res: any) => {
      return res
    }))
  }

  getAllAccount() {
    return this.http.get<any[]>(`${this.url}/getAllAccount`)
    .pipe(map((res: any) => {
      return res
    }))
  }

  updateAccount(id : any, data: any) {
    return this.http.put<any>(`${this.url}/update/` + id, data)
    .pipe(map((res: any) => {
      return res
    }))
  }

  deleteAccount(id : any) {
    return this.http.delete<any>(`${this.url}/delete/` + id)
    .pipe(map((res: any) => {
      return res
    }))
  }

}
