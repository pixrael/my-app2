import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenRequestService } from './services/token-request.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';

  private subscription: Subscription;
  constructor(private tokenRequestService: TokenRequestService) {

    this.subscription = this.tokenRequestService.getToken$().subscribe(token => {
      console.log('token: ', token);
    });

  }

  ngOnInit() {
    this.tokenRequestService.requestToken();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
