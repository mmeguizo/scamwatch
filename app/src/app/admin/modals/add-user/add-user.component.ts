import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
// import { UploadFilesService } from '../../../services/upload-file.service';


@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() passEntry: EventEmitter<string> = new EventEmitter<string>();

  loading = true;
  public form: any;
  public currentFile: any;
  public avatar: any;
  data;
  showpassword = false;
  eyeIcon = "fas fa-eye";
  progress: number;
  selectedFiles: any;
  message: any;
  fileInfos: any;


  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public user: UserService,
    public auth: AuthService,
    // public uploadService: UploadFilesService,

  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      role: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    })

    // this.getFiles()


  }

  ngOnInit() {
  }



  addUser(data) {


    console.log(data.value);


    if (data.value.password === data.value.confirm) {


      this.user.addUser(data.value).subscribe((data: any) => {

        if (data.success) {
          this.auth.Notifytoast('success', data.message, 'Success', 3000, 'bottom-right')
          this.passEntry.emit(data.data)
          this.closeModal();
        } else {
          this.auth.Notifytoast('danger', data.message, 'Error', 3000, 'bottom-right')

        }
      });

    } else {

      this.auth.Notifytoast('danger', 'Password dont match', 'Error', 3000, 'bottom-right')

    }



  }


  showPassword() {
    if (this.showpassword == true) {
      this.showpassword = false;
      this.eyeIcon = "fa fa-eye";
    } else {
      this.showpassword = true;
      this.eyeIcon = "fa fa-eye-slash";
    }
  }

  closeModal() {
    this.activeModal.close();
  }


  // upload(): void {
  //   this.progress = 0;

  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);

  //     if (file) {
  //       this.currentFile = file;

  //       this.uploadService.upload(this.currentFile).subscribe(
  //         (event: any) => {
  //           if (event.type === HttpEventType.UploadProgress) {
  //             this.progress = Math.round(100 * event.loaded / event.total);
  //           } else if (event instanceof HttpResponse) {
  //             this.message = event.body.message;
  //             this.fileInfos = this.uploadService.getFiles();
  //           }
  //         },
  //         (err: any) => {
  //           console.log(err);
  //           this.progress = 0;

  //           if (err.error && err.error.message) {
  //             this.message = err.error.message;
  //           } else {
  //             this.message = 'Could not upload the file!';
  //           }

  //           this.currentFile = undefined;
  //         });

  //     }

  //     this.selectedFiles = undefined;
  //   }
  // }

  // getFiles() {

  //   // this.fileInfos = this.uploadService.getFiles().subscribe((data: any) => {
  //   //   console.log('uploadService');
  //   //   console.log(data);
  //   // });
  //   this.fileInfos = this.uploadService.getFiles().subscribe( (data: any) => {

  //         console.log(data);

  //   })
  // }

  // source(data) {

  //   // return `connection.domain + '/student_file/' + image.file.link`
  //   return `${this.auth.domain}/student_file/${data}`

  // }



}
