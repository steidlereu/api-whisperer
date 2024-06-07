import { TestBed } from '@angular/core/testing';

import { OpenapiValidatorService } from './openapi-validator.service';

describe('OpenapiValidatorService', () => {
  let service: OpenapiValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenapiValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
