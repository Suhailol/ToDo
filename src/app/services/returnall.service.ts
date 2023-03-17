import { Injectable } from '@angular/core';
import {ITaskInterface} from "../types/ITaskInterface";

@Injectable({
  providedIn: 'root'
})
export class ReturnallService {

  inCompleted: Boolean = false;

  completedArr: ITaskInterface[] =  [];
  static objArr: ITaskInterface[] =  [{
    id: 1,
    check: false,
    detail: "Gym at 7pm"
  },{
    id:2,
    check: false,
    detail: "Complete Todo App"
  },{
    id:3,
    check: false,
    detail: "Study Udemy Course"
  },
  ];

  getBooks(){
    // console.log(this.objArr)
    return ReturnallService.objArr;
  }

  getCompleted(){
    return this.completedArr;
  }

}
