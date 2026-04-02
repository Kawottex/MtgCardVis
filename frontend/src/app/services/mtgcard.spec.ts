import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { MTGCard } from '@mtgcardvis/shared';
import { MtgCardService } from './mtgcard.service';

describe('MtgCardService', () => {
  let service: MtgCardService;
  let httpMock: HttpTestingController;

  const apiUrl = 'http://localhost:3000/api/mtgcards';

  const mockCard: MTGCard = {
    name: 'Test Card',
    expansion: 'TST',
    rarity: 'common',
    manaCost: 2,
    colors: {
      red: true,
      black: false,
      blue: false,
      green: false,
      white: false,
    },
    power: 2,
    toughness: 2,
    image: {
      data: [],
      contentType: 'image/png',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MtgCardService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(MtgCardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createMTGCard should POST the card and emit the server response', () => {
    const serverResponse = { id: 'abc', ...mockCard };

    service.createMTGCard(mockCard).subscribe((body) => {
      expect(body).toEqual(serverResponse);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockCard);
    req.flush(serverResponse);
  });
});
