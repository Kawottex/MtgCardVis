import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MTGCardFilters } from '@mtgcardvis/shared';
import { MTGCard } from '@mtgcardvis/shared';

@Injectable({ providedIn: 'root'})
export class MtgCardService {
  private apiUrl = 'http://localhost:3000/api/mtgcards';

  constructor(private http: HttpClient) {}

  getMTGCards(filters: MTGCardFilters) {
    let params = new HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get<MTGCard[]>(this.apiUrl, { params });
  }

  createMTGCard(card: MTGCard) {
    return this.http.post(this.apiUrl, card);
  }
}
