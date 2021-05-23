import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {  NbComponentStatus, NbSearchService, NbToastrService } from '@nebular/theme';
import { ConnectionService } from '../@core/services/connection.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { InfoService } from '../services/infor.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-viewscammer',
  templateUrl: './viewscammer.component.html',
  styleUrls: ['./viewscammer.component.scss']
})
export class ViewscammerComponent implements OnInit {
  searchInformation : String
  loader = false;
  titleInfo : String = ''
  data = [];
  scammers = [];
  isScammer : Boolean = false
  printerButton: boolean = false;
  filterQuery = '';
  sortBy = 'id';
  sortOrder = 'desc';
  selectQueryString = 'ID';
  selectQuery = 'id';
  printingData: any;
  private index: number = 0;
  searchTerm: any;
  constructor(
    public cs: ConnectionService,
    private router: Router,
    public toaster : NbToastrService,
    private searchService : SearchService,
    private nbsearch : NbSearchService,
    private info_service : InfoService,
    private auth : AuthService,

  ) {




  }
  ngOnInit() {


    this.nbsearch.onSearchSubmit()
    .subscribe((data: any) => {
        console.log(data);
      this.searchInformation = data.term;

      this.searchInfo(data.term)

    })


  }

  login(){
    this.router.navigate(['/login']);
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
public click = 0





searchInfo(data){



    this.click +=1
    this.titleInfo = data;
    if(this.click > 5){
        this.toaster.show('Please wait for 5 sec!', 'Warning!', { status : 'warning' });
        setTimeout(() => {this.click = 0},5000)
    }else {
        this.info_service.searchInformation(data).subscribe((res : any ) => {

            console.log(res);


            if(res.success && res.data.length){
                this.scammers = res.data
            }
            else {
            this.scammers = []
            }


            this.isScammer = true
        })
    }
}
}
