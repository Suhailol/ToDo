import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReturnallService} from "../services/returnall.service";
import {ITaskInterface} from "../types/ITaskInterface";

@Component({
  selector: 'app-activechild',
  templateUrl: './activechild.component.html',
  styleUrls: ['./activechild.component.css']
})
export class ActivechildComponent{
  constructor(private returnService: ReturnallService) {
    this.isChecked = false;
  }
  isChecked: Boolean = false;

  @Input() obj: ITaskInterface = {} as ITaskInterface;


  @Output() emitter = new EventEmitter<boolean>();

  someFunc(){
    console.log("Hello")
  }


}
