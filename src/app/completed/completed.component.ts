import {Component, OnInit} from '@angular/core';
import {ReturnallService} from "../services/returnall.service";
import {ITaskInterface} from "../types/ITaskInterface";


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent{
  objArr: ITaskInterface[] = [];
  completeArray: ITaskInterface[] = [];
  constructor(public returnService: ReturnallService) {

  }




  someFunc(){
    this.objArr = this.returnService.getBooks();
    return this.objArr;
  }

  changeState(){
    // this.returnService.state = false;
    for(let i=0; i<this.returnService.completedArr.length; i++){
      for(let j=0; j<ReturnallService.objArr.length; j++){
        if(ReturnallService.objArr[j].detail === this.returnService.completedArr[i].detail){
          this.removeItem(ReturnallService.objArr, ReturnallService.objArr[j])
        }
      }

    }

    console.log(ReturnallService.objArr)
    this.returnService.completedArr = [];
    this.completeArray = this.returnService.completedArr;


  }

  competedFunc(){

    this.completeArray = this.returnService.completedArr;
    return this.completeArray;
  }

  removeItem(arr: ITaskInterface[], value: ITaskInterface){
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  individualDelete(thing: ITaskInterface){
    for(let i=0; i<ReturnallService.objArr.length; i++){
      if(thing.detail === ReturnallService.objArr[i].detail){
        this.removeItem(ReturnallService.objArr, thing)
        this.removeItem(this.returnService.completedArr, thing)
      }
    }
  }

  togg(obji: ITaskInterface){
    for(let i=0; i<ReturnallService.objArr.length; i++){
      if(ReturnallService.objArr[i].detail === obji.detail){
        ReturnallService.objArr[i].check = false;
        console.log(ReturnallService.objArr[i].check)
      }

    }

    this.removeItem(this.returnService.completedArr, obji)
  }


}
