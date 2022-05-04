import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-app',
  templateUrl: './time-app.component.html',
  styleUrls: ['./time-app.component.css']
})
export class TimeAppComponent implements OnInit {

  check = false;
  constructor() { }

  ngOnInit(): void {
  }
@Input("O") l=0
  randomNum = 0;
  foodMenuId = 1;
  arrayIcon = ['fish','shrimp','bacon','drumstick','carrot']
  randomNumIcon = this.arrayIcon[Math.floor(Math.random()*this.arrayIcon.length)]
  foodMenuStatus = Math.random()*10 > 5 ?"Available":"Not Available"+(this.loop());
  color = ""


  loop(){
    this.l
    return this.l
  }
  getFoodMenuStatus(){
  return  this.foodMenuStatus
  }
  reset(){
  return
  }
  getColor() {
    return this.foodMenuStatus === "Available" ? "green":"gray";//this.color
  }
}
