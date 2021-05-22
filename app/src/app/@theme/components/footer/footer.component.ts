import { Component, OnInit } from '@angular/core';
// import { SharedGlobalService } from '../../../@core/services/shared.global.service';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
<<<<<<< HEAD
      Created by: <b>Mark Oliver Meguizo</b> &#169; 2021
=======
      Created by: <b>DevTrio</b> &#169; 2021
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
    </span>

    <span class="fright">
      <!-- Version {{ sgs.AppVersion.version }} -->
    <span>
  `,

})
export class FooterComponent implements OnInit {

  constructor(
    // public sgs: SharedGlobalService,
  ) { }

  ngOnInit() {
    // this.sgs.ApplicationVersion();
  }
}
