import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageRequestService } from '../services/image-reqest.service';
import { TokenRequestService } from '../services/token-request.service';


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit, OnDestroy {
  private tokenSubscription: Subscription = null;
  private imagesSubscription: Subscription = null;

  images = [];

  constructor(private tokenRequestService: TokenRequestService, private imageRequestService: ImageRequestService) { }

  ngOnInit(): void {

    this.tokenRequestService.getToken$().subscribe(token => {
      if (token) {
        const token = this.tokenRequestService.getToken();
        this.imageRequestService.requestImages(token);
      }
    });

    this.imageRequestService.getImagesData$().subscribe(imagesData => {
      if (imagesData) {
        console.log('sending images ', imagesData);
        this.images = imagesData.pictures;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.tokenSubscription) this.tokenSubscription.unsubscribe();
    if (this.imagesSubscription) this.imagesSubscription.unsubscribe();
  }


}
