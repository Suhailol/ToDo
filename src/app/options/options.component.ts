import {Component} from '@angular/core';
import {ReturnallService} from "../services/returnall.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  constructor(private returnService: ReturnallService) {
  }

  completedClick(){
    this.returnService.inCompleted = true;

  }

  activeClick(){
    this.returnService.inCompleted = false;

  }

  allClick(){
    this.returnService.inCompleted = false;

  }

}
