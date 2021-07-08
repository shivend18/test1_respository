import { TestBed } from '@angular/core/testing';

import { McoServicesService } from './mco-services.service';

describe('McoServicesService', () => {
  let service: McoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
