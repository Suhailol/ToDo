import {Component, OnInit} from '@angular/core';
import { ReturnallService} from "../services/returnall.service";
import {ITaskInterface} from "../types/ITaskInterface";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  constructor(public returnService: ReturnallService) {
  }

  object: ITaskInterface = {
    id: 99,
    check: false,
    detail: ""
  }


  enteredDetail: string  ="";
  func(enteredDetail:string){
    this.object.id = ReturnallService.objArr.length;

    this.object.detail = enteredDetail;
    if(enteredDetail==""){
      alert("Please Enter a valid task")
    }
    if(enteredDetail != "") {
      ReturnallService.objArr.push({id: 0, check: false, detail: enteredDetail})
      console.log(ReturnallService.objArr)
    }
    this.enteredDetail='';
  }


  ngOnInit() {

  }

}
