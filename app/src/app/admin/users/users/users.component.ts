import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AddUserComponent } from '../modals/add-user/add-user.component';
// import { UpdateUserComponent } from '../modals/update-user/update-user.component';
import { NbPopoverDirective } from '@nebular/theme';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/users.service';
import { AddUserComponent } from '../../modals/add-user/add-user.component';
import { ConfimationComponent } from '../../modals/confimation/confimation.component';
import { UpdateUserComponent } from '../../modals/update-user/update-user.component';
import { log } from 'console';


@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  public filterQuery = '';
  public sortBy = 'username';
  public sortOrder = 'asc';
  public selectQueryString = 'Username';
  public selectQuery = 'username';
  loading = false;
  public data = [];
  public tester = [];
  public socketInstance;
  public ids = null;



  @ViewChild(NbPopoverDirective, { static: false }) popover: NbPopoverDirective;
  @ViewChild("search", { static: false }) nameField: ElementRef;

  constructor(
    public ngbModal: NgbModal,
    public auth: AuthService,
    public user_service: UserService



  ) {

  }

  ngOnInit(): void {


    this.ids =  parseInt(this.auth.getTokenUserID()) ;
    this.getAllUsers();
    console.log(this.ids)

  }



  selectFilter(name, value) {
    this.selectQuery = name;
    this.selectQueryString = value;
    this.popover.hide();
    setTimeout(() => this.nameField.nativeElement.focus(), 0);
    this.filterQuery = "";
  }



  getAllUsers() {
    // Function to GET all blogs from database
    this.user_service.getAllUser().subscribe((data: any) => {

      if (data.success) {
        this.data = data.user;
        this.loading = false;
        console.log(this.data);

      } else {
        this.data = [];
        this.loading = false;
      }
    });


  }


  updateUser(user) {



    const activeModal = this.ngbModal.open(UpdateUserComponent, { size: 'lg', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.userData = user;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllUsers()
      // this.units.push(receivedEntry);
    });


  }

  addUser() {
    const activeModal = this.ngbModal.open(AddUserComponent, { size: 'lg', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {

      this.getAllUsers()
      // this.units.push(receivedEntry);
    });

  }

  ngOnDestroy() {
    // this.socketInstance.unsubscribe();
  }


  changeStatus(user) {

    const activeModal = this.ngbModal.open(ConfimationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.data = user;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllUsers()
      // this.units.push(receivedEntry);
    });

  }

  ownAccount(user){

    if(this.ids === user.id){
      this.auth.Notifytoast('danger', 'Cant do that ', 'Own Account', 3000, 'bottom-right')
    }else{

      this.changeStatus(user)

    }

  }

  ownAccountDelete(user){

    if(this.ids === user.id){
      this.auth.Notifytoast('danger', 'Cant do that ', 'Own Account', 3000, 'bottom-right')
    }else{
      this.deleteUser(user)
    }

  }



  deleteUser(user) {

    user.delete = true;

    const activeModal = this.ngbModal.open(ConfimationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.data = user;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllUsers()
      // this.units.push(receivedEntry);
    });

  }


}
