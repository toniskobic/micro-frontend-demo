import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class AuthService {

  username: string = '';

  constructor() {
    if (!!(window as any).authService) return (window as any).authService;
    (window as any).authService = this;
  }

  setUsername(username: string) {
    this.username = username;
  }
}
