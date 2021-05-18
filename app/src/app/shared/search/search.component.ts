import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';




@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  public socketInstance;
  public form: any;
  public loading: Boolean = true;
  public data = [];
  public scammer = [];

  filterQuery = '';
  sortBy = 'id';
  sortOrder = 'desc';
  selectQueryString = 'ID';
  selectQuery = 'id';

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public ngbModal: NgbModal,
    public searches: SearchService

  ) {
    this.createForm();

  }

  createForm() {
    this.form = this.formBuilder.group({
      category:         ['', [Validators.required]],
      info:         ['', [Validators.required]],
    })
  }

  ngOnInit() {

  }

  ngOnDestroy(){

  }


  search(data){


    let datas = {

      selector : data.value.category,
      input : data.value.info
    }




    this.searches.findUser( datas ).subscribe((data: any) => {

      console.log({findUser:data});
      this.passEntry.emit(data.scammer)
      this.closeModal();
      // if (data.success) {
      //   this.scammer = data.scammer
      //   this.loading = false;
      // } else {
      //   this.scammer = [];
      //   this.loading = false;
      // }

    });


    // this.sgs.request('post', 'type/addType', {form: this.form.value}, async (res) => {
    //   if(res.success){
    //     this.passEntry.emit(res.data);
    //     this.closeModal();
		//     this.sgs.showToaster('success', 'New Type has been added!','Success', 3000,'bottom-right' )
    //   }

    // });
  }





  closeModal() {
    this.activeModal.close();
  }







}
