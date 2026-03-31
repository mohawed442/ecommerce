import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthInterface } from '../models/auth-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environment/environment.prod';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  constructor(private http: HttpClient) {}
  private platformId = inject(PLATFORM_ID);

  addUser(user: AuthInterface) {
    return this.http.post(environment.baseUrl + 'auth/signup', user);
  }

  login(user: AuthInterface) {
    return this.http.post(environment.baseUrl + 'auth/signin', user);
  }

  forgotPassword(email: AuthInterface) {
    return this.http.post(environment.baseUrl + 'auth/forgotPasswords', email);
  }

  verifyResetCode(code: AuthInterface) {
    return this.http.post(environment.baseUrl + 'auth/verifyResetCode', code);
  }
  chengePassword(code: AuthInterface) {
    return this.http.post(environment.baseUrl + 'users/changeMyPassword', code);
  }
  resetPassword(code: AuthInterface) {
    return this.http.post(environment.baseUrl + 'auth/resetPassword', code);
  }

  updateUser(user: AuthInterface) {
    return this.http.put(environment.baseUrl + 'users/updateMe', user);
  }

  getAllUser(): Observable<any> {
    return this.http.get(environment.baseUrl + 'users');
  }

  verifyToken(): Observable<any> {
    return this.http.get(environment.baseUrl + 'auth/verifyToken');
  }

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('authToken', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }

  decodeToken(token: string): any {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded;
  }
}
