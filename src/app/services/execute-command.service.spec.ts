import { TestBed } from '@angular/core/testing';

import { ExecuteCommandService } from './execute-command.service';

describe('ExecuteCommandService', () => {
  let service: ExecuteCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecuteCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
