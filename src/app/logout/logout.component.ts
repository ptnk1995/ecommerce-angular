import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../shared/services';
import { Error } from '../shared/models/error';
import { UserService } from '../shared/services/user.service';
import { CartService } from '../shared/services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  errors: Error;
  subscription: Subscription;

  constructor(
    private notify: NotificationService,
    private userService: UserService,
    private cartService: CartService,
    private router: Router
    ) {
    this.errors = new Error()
  }

  ngOnInit() {
    this.subscription = this.userService
    .purgeAuth()
    .subscribe(
      (data: any) => {
        this.cartService.destroyToken();
        console.log(this.cartService.getToken());
        this.router.navigateByUrl('/');
      },
      (err: any) => {
        if(Array.isArray(err)){
          for (let error of err) {
            this.notify.printErrorMessage(error);
          }
        } else {
          this.notify.printErrorMessage(err.errors);
        }
      }
      );
  }

  ngOnDestroy(){
    if(this.subscription != undefined){
      this.subscription.unsubscribe();
    }
  }
}
