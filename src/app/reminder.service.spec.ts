import { TestBed } from '@angular/core/testing';

import { ReminderService } from './reminder.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReminderService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: ReminderService = TestBed.get(ReminderService);
    expect(service).toBeTruthy();
  });
});
