import { TestBed } from '@angular/core/testing';

import { YamlLoaderService } from './yaml-loader.service';

describe('YamlLoaderService', () => {
  let service: YamlLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YamlLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
