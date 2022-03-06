import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment03';
  checkOnOff = true;
  values = 0;
  date = new Date;
  hours = 0;
  minutes = 0;
  seconds = 0;
  secondsCreated = 0;
  minutesCreated = 0;
  hoursCreated = 0;
  dateClick = '';
  arrayTimeStampDate = Array();
  x = 0;
  dateClickPrint = '';
  showNoColor = Array();
  showColor = Array();



  yourClick(event: Event) {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.secondsCreated = 0;
    this.minutesCreated = 0;
    this.hoursCreated = 0;
    this.values = Math.floor((event.timeStamp)/1000);
    this.seconds = Math.floor((this.date.getSeconds()+this.values)/ 60)
    this.minutes = Math.floor(Math.floor(Math.floor(this.seconds)+this.date.getMinutes())/60)
    this.hours = Math.floor((Math.floor(this.minutes)+this.date.getHours())/24)
    this.secondsCreated = Math.floor(this.date.getSeconds()+this.values) - (this.seconds*60)
    this.minutesCreated = Math.floor(this.date.getMinutes() + (this.seconds)) - (this.minutes*60)
    this.hoursCreated = Math.floor(this.date.getHours() + Math.floor(this.minutes)) - (this.hours*24)
  }
  onOffParagraphAndLog(){
    this.checkOnOff = this.checkOnOff == true ? false : true;
    this.dateClick =("D"+this.date.getDate()+"M"+this.date.getMonth()
    +"Y"+this.date.getFullYear()+" "+this.hoursCreated+':'
    +this.minutesCreated+':'+this.secondsCreated)
    this.dateClickPrint +=this.dateClick + "\t"
  }
  arrayTimeStamp (){
    this.arrayTimeStampDate.push(this.dateClick)
    //console.log(this.arrayTimeStampDate)
    console.log(this.date.getSeconds())
    if (this.x <5) {this.showNoColor = this.arrayTimeStampDate}else {this.showColor = this.arrayTimeStampDate}
    this.x++
  }
  getColor() {
    return this.arrayTimeStampDate.length < 5  ? "":"blue";
  }
}
