import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { LocalStorageService } from '../Services/localStorage.Service';

@Injectable({
  providedIn: 'root'
})

export class UserToken {
  constructor(private storageService: LocalStorageService) {
  }

  public static set(user: User, token: string) {
    const data = JSON.stringify(user);

    window.localStorage.setItem('products-cap-user', btoa(data));
    window.localStorage.setItem('products-cap-token', token);
  }

  public static setUser(user: User) {
    const data = JSON.stringify(user);
    window.localStorage.setItem('products-cap-user', btoa(data));
  }

  public static getUser(): User {
    const data = localStorage.getItem('products-cap-user');
    if (data) {
      return JSON.parse(atob(data));
    } else {
      return null!;
    }
  }

  public static setToken(token: string) {
    window.localStorage.setItem('products-cap-token', token);
  }

  public static getToken(): string {
    const data = window.localStorage.getItem('products-cap-token');
    if (data) {
      return data;
    } else {
      return null!;
    }
  }

  public static hasToken(): boolean {
    if (this.getToken()) return true;
    else return false;
  }

  public static clear() {
    window.localStorage.removeItem('products-cap-user');
    window.localStorage.removeItem('products-cap-token');
  }
}
