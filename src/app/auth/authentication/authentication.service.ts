import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse"

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndPoint: string = "signUp";
    signInEndPoint: string = "signInWithPassword"

    public constructor(private http: HttpClient) { }

    public signup(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };

        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signUpEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }

    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };

        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signInEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }
}