import { TestBed } from '@angular/core/testing';

import { FilmsListService } from './films-list.service';

describe('FilmsListService', () => {
  let service: FilmsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
