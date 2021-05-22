import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { RoomsService } from '../../../services/rooms.service';

@Component({
  selector: 'ngx-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  loading = true;
  public form: any;
  data;


  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public room_service: RoomsService,
    private auth: AuthService,

  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      room: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  addRoom(data) {

    if (data.value.room) {
      this.room_service.addRoom(data.value).subscribe((data: any) => {
        if (data.success) {
          this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
          this.passEntry.emit(data.room)
          this.closeModal();
        } else {
          this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
        }
      });
    } else {
      this.auth.Notifytoast('danger', 'No Room Supplied', 'Error', 3000, 'bottom-right')
    }
  }

  closeModal() {
    this.activeModal.close();
  }

}
