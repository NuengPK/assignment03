import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'assignment03';
  checkOnOff = false;
  creacesColor = false;
  dateClick = "";
  aArrayTimeStampDate = Array();
  bArrayTimeStampDate = Array();
  iArray = Array();
  i = 0;
  menuList = ["ข้าวมันไก่","ข้าวหมูแดง"]
  randomNumIcon = this.i < 6 ? "while":"blue";

  onOffParagraphAndLog() {;
    let date = new Date();
    this.dateClick = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    if(this.aArrayTimeStampDate.length<5){
    this.aArrayTimeStampDate.push(this.dateClick);
  }else{ this.bArrayTimeStampDate.push(this.dateClick)
    this.checkOnOff = true};
    this.i++
    this.iArray.push(this.i)
  }

  getcoler(){
    return  this.randomNumIcon === "while" ? "while":"blue";
  }
}
