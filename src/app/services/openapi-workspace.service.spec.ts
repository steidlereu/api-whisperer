import { TestBed } from '@angular/core/testing';

import { OpenapiWorkspaceService } from './openapi-workspace.service';

describe('OpenapiWorkspaceService', () => {
  let service: OpenapiWorkspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenapiWorkspaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
