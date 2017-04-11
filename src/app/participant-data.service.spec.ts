import { TestBed, inject } from '@angular/core/testing';

import { ParticipantDataService } from './participant-data.service';

describe('ParticipantDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantDataService]
    });
  });

  it('should ...', inject([ParticipantDataService], (service: ParticipantDataService) => {
    expect(service).toBeTruthy();
  }));
});
