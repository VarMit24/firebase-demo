import { TestBed, inject } from '@angular/core/testing';

import { KoreanLoveService } from './korean-love.service';

describe('KoreanLoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KoreanLoveService]
    });
  });

  it('should be created', inject([KoreanLoveService], (service: KoreanLoveService) => {
    expect(service).toBeTruthy();
  }));
});
