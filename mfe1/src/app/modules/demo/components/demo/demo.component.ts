import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  auth: AuthService;

  constructor() {
    this.auth = (window as any).authService;
  }

  setUsername(username: string) {
    this.auth.setUsername(username);
  }
}
