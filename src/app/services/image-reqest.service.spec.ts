import { TestBed } from '@angular/core/testing';

import { ImageReqestService } from './image-reqest.service';

describe('ImageReqestService', () => {
  let service: ImageReqestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageReqestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
