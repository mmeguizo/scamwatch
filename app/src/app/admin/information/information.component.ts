import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AddInformationsComponent } from '../modals/add-information/add-information.component';
// import { UpdateInformationsComponent } from '../modals/update-information/update-information.component';
import { NbPopoverDirective } from '@nebular/theme';
import { InformationsService } from '../../services/information.service';
import { AuthService } from '../../services/auth.service';
// import { InformationsService } from '../../../services/informations.service';
import { ConfimationComponent } from '../modals/confimation/confimation.component';
import { AddInformationComponent } from '../modals/add-information/add-information.component';
import { InfoService } from '../../services/infor.service';
import { UpdateInformationComponent } from '../modals/update-information/update-information.component';


@Component({
  selector: 'ngx-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  public filterQuery = '';
  public sortBy = 'id';
  public sortOrder = 'desc';
  public selectQueryString = 'ID';
  public selectQuery = 'id';
  loading = true;
  public data = [];
  public socketInstance;



  @ViewChild(NbPopoverDirective, { static: false }) popover: NbPopoverDirective;
  @ViewChild("search", { static: false }) nameField: ElementRef;

  constructor(
    public ngbModal: NgbModal,
    public auth: AuthService,
    public information_service: InformationsService,
    public info_service: InfoService



  ) {


    this.getAllInformation();

    // this.socketInstance = this.auth.listen('get_information').subscribe(emmet => {
    //   console.log('get_information');
    //   console.log(emmet);
    //   this.getAllInformation();
    // });

  }

  ngOnInit(): void {
    this.getAllInformation();
  }



  selectFilter(name, value) {
    this.selectQuery = name;
    this.selectQueryString = value;
    this.popover.hide();
    setTimeout(() => this.nameField.nativeElement.focus(), 0);
    this.filterQuery = "";
  }



  getAllInformation() {
    // Function to GET all blogs from database
    this.info_service.getAllInformation().subscribe((data: any) => {
      if (data.success) {
        this.data = data.information
        this.loading = false;
        console.log(this.data);

      } else {
        this.data = [];
        this.loading = false;
      }
    });


  }


  updateInformations(information) {



    const activeModal = this.ngbModal.open(UpdateInformationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.informationData = information;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllInformation()
      // this.units.push(receivedEntry);
    });


  }

  addInformations() {
    const activeModal = this.ngbModal.open(AddInformationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllInformation()
      // this.units.push(receivedEntry);
    });

  }

  ngOnDestroy() {
    // this.socketInstance.unsubscribe();
  }


  changeInformationStatus(information) {

    console.log(information);


    const activeModal = this.ngbModal.open(ConfimationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.information = information;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllInformation()
      // this.units.push(receivedEntry);
    });

  }


  deleteInformations(information) {

    information.delete = true;

    console.log(information);


    const activeModal = this.ngbModal.open(ConfimationComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.information = information;
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.getAllInformation()
      // this.units.push(receivedEntry);
    });

  }


}
