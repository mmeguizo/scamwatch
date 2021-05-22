import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AddUserComponent } from '../modals/add-user/add-user.component';
// import { UpdateUserComponent } from '../modals/update-user/update-user.component';
import { NbPopoverDirective } from '@nebular/theme';
import { AuthService } from '../../services/auth.service';
import { AddUserComponent } from '../modals/add-user/add-user.component';
import { ConfimationComponent } from '../modals/confimation/confimation.component';
import { RoomsService } from '../../services/rooms.service';
import { AddRoomComponent } from '../modals/add-room/add-room.component';
import { UpdateRoomComponent } from '../modals/update-room/update-room.component';
import { AddInventoryComponent } from '../modals/add-inventory/add-inventory.component';
import { InventoryService } from '../../services/inventory.service';

InventoryService

@Component({
  selector: 'ngx-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  public filterQuery = '';
  public sortBy = 'room';
  public sortOrder = 'asc';
  public selectQueryString = 'Room';
  public selectQuery = 'room';
  loading = true;
  public inventory = [];
  public room = [];
  public socketInstance;



  @ViewChild(NbPopoverDirective, { static: false }) popover: NbPopoverDirective;
  @ViewChild("search", { static: false }) nameField: ElementRef;

  constructor(
    public ngbModal: NgbModal,
    public auth: AuthService,
    public room_service: RoomsService,
    public inventory_service: InventoryService,

  ) {

    this.getAllRoom();

  }

  ngOnInit(): void {

    this.getAllRoom();
    this.getAllInventory();

  }



  selectFilter(name, value) {
    this.selectQuery = name;
    this.selectQueryString = value;
    this.popover.hide();
    setTimeout(() => this.nameField.nativeElement.focus(), 0);
    this.filterQuery = "";
  }






  getAllRoom() {
    // Function to GET all blogs from database
    this.room_service.getAllRoom().subscribe((data: any) => {
      if (data.success) {
        this.room = data.room
        this.loading = false;
      } else {
        this.room = [];
        this.loading = false;
      }
    });
  }

  getAllInventory() {
    // Function to GET all blogs from database
    this.inventory_service.getAllInventory().subscribe((data: any) => {


      console.log('getAllInventory');
      console.log(data);


      if (data.success) {
        this.inventory = data.inventory
        this.loading = false;
      } else {
        this.inventory = [];
        this.loading = false;
      }
    });
  }





  addInventory() {
    const activeModal = this.ngbModal.open(AddInventoryComponent, { size: 'lg', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllRoom()
      // this.units.push(receivedEntry);
    });
  }





  updateRoom(room) {
    const activeModal = this.ngbModal.open(UpdateRoomComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.roomData = room;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllRoom()
      // this.units.push(receivedEntry);
    });
  }


  addRoom() {
    const activeModal = this.ngbModal.open(AddRoomComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllRoom()
      // this.units.push(receivedEntry);
    });
  }

  ngOnDestroy() {
    // this.socketInstance.unsubscribe();
  }


  changeRoomStatus(room) {

    const activeModal = this.ngbModal.open(ConfimationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.room = room;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllRoom()
      // this.units.push(receivedEntry);
    });

  }

  deleteRoom(room) {
    room.delete = true;
    const activeModal = this.ngbModal.open(ConfimationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.room = room;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllRoom()
      // this.units.push(receivedEntry);
    });

  }


}
