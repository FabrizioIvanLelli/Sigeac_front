import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel, AuthResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Ajusta el puerto si tu API de .NET usa uno distinto
  private apiUrl = 'https://localhost:7181/User';

  constructor(private http: HttpClient) { }

  login(credentials: LoginModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials);
  }
}
