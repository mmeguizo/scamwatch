import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { InformationsService } from '../../../services/information.service';
import { InfoService } from '../../../services/infor.service';




@Component({
  selector: 'ngx-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.scss']
})
export class UpdateInformationComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  loading = true;
  public form: any;
  data;
  error = "";
  informationData;



  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public user: UserService,
    private auth: AuthService,
    private information_service: InformationsService,
    private info_service: InfoService,

  ) {

    console.log(this.informationData);

  }


  ngOnInit() {
    console.log(this.informationData);
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      category:         [this.informationData.category, [Validators.required]],
      info:         [this.informationData.information, [Validators.required]],
    })

  }

  addInformation(data) {
    data.value._id = this.informationData._id
    data.value.id = this.informationData.id
    console.log({addInformation : data.value});

    if(data.value.category === 'email'){
      if(!this.validEmailChecker(data.value.info)){
        this.auth.Notifytoast('danger', 'Not an email format', 'Error', 3000, 'bottom-right')
      }else{
        this.sendToDb(data.value);
      }
    }else if( data.value.category === 'name'){

      if(data.value.info.length > 20 || data.value.info.length < 3){

        this.auth.Notifytoast('danger', 'Name should be at least 3 characters or more and not more than 20 characters', 'Error', 3000, 'bottom-right')
      }else{
        this.sendToDb(data.value);
      }

    }else if(data.value.category === 'number'){

      if(data.value.info.length > 15 || data.value.info.length < 7){
        this.auth.Notifytoast('danger', 'Nummber should be at least 3  or more and not more than 15', 'Error', 3000, 'bottom-right')
      }else{
        this.sendToDb(data.value);
      }
    }else{

      this.auth.Notifytoast('danger', 'Something is not right', 'Error', 3000, 'bottom-right')

    }


  }

  sendToDb(data){

    this.info_service.updateInformation(data).subscribe((data: any) => {

      if (data.success) {
        this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
        this.passEntry.emit(data.information)
        this.closeModal();
      } else {
        this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')
      }
    });

  }



  closeModal() {
    this.activeModal.close();
  }


validEmailChecker(email){
    if (!email) {

      this.error = "No email supplied";

      return false;
    } else {
      const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      let result = regExp.test(email);

      if(regExp.test(email) === false){
        this.error = "Email wrong format";
      }else{
        return true;
      }

      // Return regular expression test results (true or false)
    }
  }




}
