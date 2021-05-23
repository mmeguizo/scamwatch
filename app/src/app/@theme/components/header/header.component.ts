import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ReverseDate } from '../../../@core/pipes/dataFilter';
// import { AuthService } from '../../../@core/services/auth.service';
// import { SharedGlobalService } from '../../../@core/services/shared.global.service';
import { Router } from '@angular/router';
// import { UpdateProfileComponent } from '../../../admin/modals/update-profile/update-profile.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { LogoutComponent } from '../../../admin/modals/logout/logout.component';
import { AuthGuard } from '../../../guard/auth.guard';
import { AuthService } from '../../../services/auth.service';
import { LogoutComponent } from '../../../admin/modals/logout/logout.component';
import { UpdateUserComponent } from '../../../admin/modals/update-user/update-user.component';
import { UserService } from '../../../services/users.service';



@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public readonly materialTheme$: Observable<boolean>;
  userPictureOnly: boolean = false;
  user: any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  authUser: any;
  public socketInstance: any;

  public contentInit = false;
  myName : any;
  restName : any;
  ids: string;

  public constructor(
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    // public sgs: SharedGlobalService,
    public auth: AuthService,
    public rd: ReverseDate,
    private breakpointService: NbMediaBreakpointsService,
    public router: Router,
    public user_service: UserService,
    public ngbModal: NgbModal
  ) {
    // this.socketInstance = sgs.ResponseSocket('users').subscribe((emitted) => {
    // 	this.getAuthUser();
    // });


  }

  ngOnInit() {
    this.menuService.onItemClick().subscribe((event) => {
      //boolean content init will stop the subscribed data from multiplying which cause incremental event
      if (this.contentInit == false) {
        this.onItemSelection(event.item.title);
      }
    });


    this.getAuthUser();
    this.ids = this.auth.getTokenUserID()
    this.myName = this.auth.getTokenUsername()
    this.restName = this.auth.getTokenUsername().substring(1)

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe((isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl));
  }

  onItemSelection(title) {
    if (title === 'Log out') {
      // this.sgs.Modal({
      //   header : `Logging Out`,
      //   content : `  Bye...🙋🏼‍♂️`,
      //   type : `confirmation`
      // },{size : 'sm'}).confirm.subscribe( response => {
      //   if(response){
      //     this.auth.logout();
      //   }
      // });
      const activeModal = this.ngbModal.open(LogoutComponent, { size: 'sm', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
      activeModal.componentInstance.data = this.auth.fulluserloggedData
    } else if (title === 'Profile') {
      // this.sgs.showToaster('info', '...','Coming Soon...', 2000, 'bottom-right')
      this.updateUser();
    }
  }

  getAuthUser() {

    // this.sgs.request('get', 'user/getAuthUser', '', async (res) => {
    // 	if (res.success) {
    // 		this.authUser = res.data;
    // 	}
    // });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.contentInit = true;
    // this.socketInstance.unsubscribe();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  updateUser() {
    // const activeModal = this.ngbModal.open(UpdateUserComponent, { size: 'lg', container: 'nb-layout', windowClass: 'min_height' });
    // activeModal.componentInstance.uid = this.authUser.id;


    this.user_service.getAuthUser( { id : parseInt(this.ids) } ).subscribe((data: any) => {

      console.log(data);

      if (data.success) {
    const activeModal = this.ngbModal.open(UpdateUserComponent, { size: 'lg', container: 'nb-layout', windowClass: 'min_height', backdrop: 'static' });
    activeModal.componentInstance.authData = data.data[0];
    activeModal.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.auth.Notifytoast('success', 'Account Change', 'Logging out in 3 Sec', 1000, 'bottom-right');

      setTimeout(() =>{
        this.auth.Notifytoast('success', 'Account Change', 'Logging out in 2 Sec', 1000, 'bottom-right');
       },2000
      )
      setTimeout(() =>{
        this.auth.Notifytoast('success', 'Account Change', 'Logging out in 1 Sec', 1000, 'bottom-right');
       },3000
      )


      setTimeout(() =>{
        this.auth.logout()
       },3500
      )

    });

      } else {
        this.auth.Notifytoast('danger', 'Cant update User', 'Error', 3000, 'bottom-right')

      }
    });




  }
}
