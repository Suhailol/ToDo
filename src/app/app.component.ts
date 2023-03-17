import { Component } from '@angular/core';
import {ReturnallService} from "./services/returnall.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private returnService: ReturnallService) {
  }
}
