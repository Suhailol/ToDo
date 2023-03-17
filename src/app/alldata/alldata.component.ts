import {Component, OnInit} from '@angular/core';
import {ITaskInterface} from "../types/ITaskInterface";
import {ReturnallService} from "../services/returnall.service";

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent{

    isChecked: Boolean = false;
   objArr: ITaskInterface[] = [];
  constructor(private returnService: ReturnallService) {
    console.log("your")

  }




someFunc(){
  return ReturnallService.objArr;
}

  toggle($event:any, obj: ITaskInterface) {
    console.log(obj)
    obj.check = !obj.check;
    const id = $event.target.value.id;
    console.log(id)
    this.isChecked = $event.target.checked;
    console.log(this.isChecked)
    for (let i = 0; i < this.objArr.length; i++) {
      if (this.objArr[i].id === id) {
        this.objArr[i].check = this.isChecked;
        console.log(this.objArr[i].check)
      }


    }

    if(obj.check){
      this.returnService.completedArr.push(obj);
      console.log(this.returnService.completedArr[0])
    }
  }




  }
