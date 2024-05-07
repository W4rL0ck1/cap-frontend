import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user.model';
import { UserToken } from '../Utils/userToken.utils';
import { environment } from '../../environments/environment';
import { Product } from '../Models/products.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = environment.url;

  headers: object;

  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }),
    }
  }

  public composeHeaders() {
    const token = UserToken.getToken();
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`); // template literals
    return headers;
  }

  //#region Metodos

  authenticate(data: any) {
    return this.http.post(`${this.url}/User/AuthenticateUser`, data);
  }

  createUser(data: any) {
    return this.http.post(`${this.url}/User/CreateUser`, data);
  }

  getAllProducts() {
    return this.http.get(`${this.url}/Products/GetProducts`, { headers: this.composeHeaders()});
  }

  // getUsers() {
  //   return this.http.get<User[]>(`${this.url}/User`);
  // }

  // getUserById(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.url}/users/${id}`);
  // }

  // refreshToken() {
  //   return this.http.post(`${this.url}/users/login`, null, {
  //     headers: this.composeHeaders(),
  //   });
  // }

  resetPassword(data: any) {
    return this.http.post(`${this.url}/users/reset-password`, data);
  }

  updateProfile(data: any) {
        return this.http.put(`${this.url}/users/updateuser`, data, { headers: this.composeHeaders() });
    }

  //#endregion


}
