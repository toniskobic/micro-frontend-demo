import { Component } from '@angular/core';
import { version } from 'useless-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  uselessLibVersion = version;
}
