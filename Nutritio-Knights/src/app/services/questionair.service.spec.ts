import { TestBed } from '@angular/core/testing';

import { QuestionairService } from './questionair.service';

describe('QuestionairService', () => {
  let service: QuestionairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
