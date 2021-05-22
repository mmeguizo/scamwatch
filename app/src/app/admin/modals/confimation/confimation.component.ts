
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { InfoService } from '../../../services/infor.service';
import { InformationsService } from '../../../services/information.service';
import { RoomsService } from '../../../services/rooms.service';
import { UserService } from '../../../services/users.service';


@Component({
  selector: 'ngx-confimation',
  templateUrl: './confimation.component.html',
  styleUrls: ['./confimation.component.scss']
})
export class ConfimationComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();


  public id;
  public name;
  public form;
  public uid;
  public date;
  public selectedDate;
  public image;
  public message = '';
  public message1 = '';
  public data;
  public room;
  public information;


  constructor(

    public activeModal: NgbActiveModal,
    public auth: AuthService,
    public user_service: UserService,
    public room_service: RoomsService,
    public information_service: InfoService,


  ) {


  }

  ngOnInit(): void {

    console.log(this.information);


    //USER
    if (this.data) {
      this.name = this.data.username.charAt(0).toUpperCase() + this.data.username.slice(1);;
      if (this.data.status === 'active' && !this.data.delete) {
        this.message = 'Deactivation';
        this.message1 = 'Deactivating';
      } else if (this.data.status === 'inactive' && !this.data.delete) {
        this.message = 'Activation';
        this.message1 = 'Activating';
      } else if (this.data.delete) {
        console.log(this.data.delete);
        this.message = 'Delete';
        this.message1 = 'Deleting';
      }
    }


    if (this.room) {
      //ROOM
      this.name = this.room.room;
      if (this.room.status === 'active' && !this.room.delete) {
        this.message = 'Deactivation';
        this.message1 = 'Deactivating';
      } else if (this.room.status === 'inactive' && !this.room.delete) {
        this.message = 'Activation';
        this.message1 = 'Activating';
      } else if (this.room.delete) {
        console.log(this.room.delete);
        this.message = 'Delete';
        this.message1 = 'Deleting';
      }

    }

    //INFORMATION
    if (this.information) {
      //ROOM
      this.name = this.information.information;
      if (this.information.status === 'active' && !this.information.delete) {
        this.message = 'Deactivation';
        this.message1 = 'Deactivating';
      } else if (this.information.status === 'inactive' && !this.information.delete) {
        this.message = 'Activation';
        this.message1 = 'Activating';
      } else if (this.information.delete) {
        console.log(this.information.delete);
        this.message = 'Delete';
        this.message1 = 'Deleting';
      }

    }





  }


  no() {

    this.activeModal.close();
  }


  yes() {

    //USER
    if (this.data) {

      if (this.data.delete) {
        this.user_service.deleteUser(this.data).subscribe((data: any) => {
          if (data.success) {
            this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
            this.passEntry.emit(data.data)
            this.closeModal();
          } else {
            this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
          }
        });


      } else {
        this.user_service.changeStatus(this.data).subscribe((data: any) => {
          if (data.success) {
            this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
            this.passEntry.emit(data.data)
            this.closeModal();
          } else {
            this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
          }
        });


      }
    }

    if (this.room) {

      //ROOM
      if (this.room.delete) {
        this.room_service.deleteRoom(this.room).subscribe((data: any) => {
          if (data.success) {
            this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
            this.passEntry.emit(data.data)
            this.closeModal();
          } else {
            this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
          }
        });

      } else {
        this.room_service.changeRoomStatus(this.room).subscribe((data: any) => {
          if (data.success) {
            this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
            this.passEntry.emit(data.data)
            this.closeModal();
          } else {
            this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
          }
        });
      }
    }
    if (this.information) {

      //ROOM
      if (this.information.delete) {
        this.information_service.deleteInformation(this.information).subscribe((data: any) => {
          if (data.success) {
            this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
            this.passEntry.emit(data.data)
            this.closeModal();
          } else {
            this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
          }
        });

      } else {
        this.information_service.changeInformationStatus(this.information).subscribe((data: any) => {
          if (data.success) {
            this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
            this.passEntry.emit(data.data)
            this.closeModal();
          } else {
            this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
          }
        });
      }
    }



  }//end of yes

  closeModal() {
    this.activeModal.close();
  }


}
