import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServicesService {
  private API_SERVER = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<any> {
    const url = `${this.API_SERVER}/user`;
    return this.httpClient.get<any>(url);
  }

  createUser(payload: any): Observable<any> {
    const url = `${this.API_SERVER}/user`;
    return this.httpClient.post<any>(url, payload);
  }

  updateUserById(payload: any): Observable<any> {
    const url = `${this.API_SERVER}/user`;
    return this.httpClient.patch<any>(url, payload);
  }

  deleteUserById(id: number): Observable<any> {
    const url = `${this.API_SERVER}/user/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
