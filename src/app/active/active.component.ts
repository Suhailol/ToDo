import { Component } from '@angular/core';
import {ITaskInterface} from "../types/ITaskInterface";
import {ReturnallService} from "../services/returnall.service";


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent{
  objArr: ITaskInterface[] = [];
  constructor(private serv: ReturnallService) {
    this.objArr = this.serv.getBooks();
    this.objArr = this.objArr.filter(b => b.check===false)
  }

  getArray(){
    this.objArr = this.serv.getBooks()
    this.objArr = this.objArr.filter(b => !b.check)
    return this.objArr;
  }

  checking(object: ITaskInterface){
    this.serv.completedArr.push(object)
    console.log(object)

    for(let i=0; i<ReturnallService.objArr.length; i++){
      if(object.detail === ReturnallService.objArr[i].detail){
        ReturnallService.objArr[i].check = !ReturnallService.objArr[i].check;
        console.log(ReturnallService.objArr[i].check)
      }
    }
  }

}
