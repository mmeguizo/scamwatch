import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../../services/infor.service';
import { InformationsService } from '../../services/information.service';
import { RoomsService } from '../../services/rooms.service';
import { UserService } from '../../services/users.service';



@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  date;

  hours: string;
  minutes: string;
  seconds: string;
  PmAmTime: string;
  public timerId = null;
  attendance: any;
  employees: any;
  onDuty = 0;
  leaves = 0;
  loans = 0;
  PmAm = 0;
  public userLength = [];
  public informationLength = [];
  loading = true;


  constructor(
    public user_service: UserService,
    public room_service: RoomsService,
    public information_service: InfoService,
    public router: Router,

  ) {

    this.date = new Date();
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }


  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero((time.getHours() + 24) % 12 || 12);
    this.PmAmTime = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
    this.PmAm = parseInt(this.PmAmTime);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }


  ngOnInit(): void {

    this.getAllUsers();
    this.getAllInformation();
  }


  getAllUsers() {
    // Function to GET all blogs from database
    this.user_service.getAllUser().subscribe((data: any) => {

      if (data.success) {
        this.userLength = data.user
        this.loading = false;
      } else {
        this.userLength = [];
        this.loading = false;
      }
    });


  }


  getAllInformation() {
    // Function to GET all blogs from database
    this.information_service.getAllInformation().subscribe((data: any) => {
      if (data.success) {
        this.informationLength = data.information
        this.loading = false;
      } else {
        this.informationLength = [];
        this.loading = false;
      }
    });


  }



  user() {
    this.router.navigate(['/admin/users']);
  }

  information() {
    this.router.navigate(['/admin/information']);
  }



}
