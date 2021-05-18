import { FormGroup, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { routerTransition } from '../router.animation';
// import { AuthService } from '../@core/services/auth.service';
// import { SharedGlobalService } from '../@core/services/shared.global.service';
import { NbDialogService } from '@nebular/theme';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { ConnectionService } from '../@core/services/connection.service';
import { AuthService } from '../services/auth.service';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
// import { AddUserComponent } from '../modals/add-user/add-user.component';
// import { UpdateUserComponent } from '../modals/update-user/update-user.component';
import { NbPopoverDirective } from '@nebular/theme';
import { SearchComponent } from '../shared/search/search.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-viewscammer',
  templateUrl: './viewscammer.component.html',
  styleUrls: ['./viewscammer.component.scss']
  // animations: [routerTransition()]
})
export class ViewscammerComponent implements OnInit {

  username: String;
  password: String;
  msg: String;
  loader = false;
  disableSubmit;
  conn;
  userID;
  loading;
  data = [];
  scammer = [];

  public config: ToasterConfig =
  new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    timeout: 2000
  });

  printerButton: boolean = false;


  filterQuery = '';
  sortBy = 'id';
  sortOrder = 'desc';
  selectQueryString = 'ID';
  selectQuery = 'id';

  messageClass;
  message;
  processing = false;
  form: FormGroup;

  printingData: any;



  constructor(
    // public sgs: SharedGlobalService,
    // public authService: AuthService,
    private dialogService: NbDialogService,
    public cs: ConnectionService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToasterService,
    public ngbModal: NgbModal

  ) {
    // sgs.setBrowserTitle.emit('Login');
    this.createForm();
  }

  ngOnInit() {

  }

  login(){
    this.router.navigate(['/login']);

  }


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // Username field
      password: ['', Validators.required] // Password field
    });
  }

  enableForm() {
    this.form.controls['username'].enable(); // Enable username field
    this.form.controls['password'].enable(); // Enable password field
  }

  disableForm() {
    this.form.controls['username'].disable(); // Disable username field
    this.form.controls['password'].disable(); // Disable password field
  }

  search(){
    const activeModal = this.ngbModal.open(SearchComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', 'backdrop': 'static' });
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
        //this.types.push(receivedEntry);
      console.log(receivedEntry);

      if(receivedEntry){
        this.scammer.push(receivedEntry);
        this.toastr.pop('warning', 'Alert', 'Scammer Match');
      }else{
        this.scammer = [];
        this.toastr.pop('success', 'No Data Returned', 'No scammer Found');
      }



      // this.getAllTypes();
      });
  }
  // Functiont to submit form and login user



  showBootstrapModal() {

  }



  print(data){

    this.printingData = data;

    if(this.printingData){
      this.printerButton = true;
    }

    setTimeout(() => {
      let printContents, popupWin;
      printContents = document.getElementById('receipt').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
      <html>
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
        .body-content {
          font-family: verdana;
        }
        .body-content div:first-child {
          padding-bottom: 5px !important;
        }
        .acenter{
          text-align: center;
        }
        .aright{
          text-align: right;
        }
        #print-section {
          height: 8in;
        }
        .receipt{
          font-size: 25pt;
          font-family: verdana;
        }
        .clearMore{
          margin-top: 30px;
        }
        .border-dotted {
          width: 100%;
          border: 1px black dashed;
        }
        @media print {
          @page {
            margin-left: 2mm;
            margin-top: 0mm;
            size: portrait;
          }
        }
        </style>
      </head>
      <body onload="window.print();window.close()">
        <div class="col-sm-12 col-12" id="print-section">
          <div id="page">
           ${printContents}
          </div>
        </div>
      </body>
    </html>`,
  );
    popupWin.document.close();
  }, 500);
}

}
