import {Component, Input} from '@angular/core';
import {ITaskInterface} from "../types/ITaskInterface";
import {ReturnallService} from "../services/returnall.service";

@Component({
  selector: 'app-completedchild',
  templateUrl: './completedchild.component.html',
  styleUrls: ['./completedchild.component.css']
})
export class CompletedchildComponent {
  constructor(private returnService: ReturnallService) {
  }

  isChecked: Boolean = false;

  @Input() obj: ITaskInterface = {} as ITaskInterface;
}
