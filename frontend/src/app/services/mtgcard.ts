import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MtgCardService {
  private apiUrl = 'http://localhost:3000/api/mtgcards';

  constructor(private http: HttpClient) {}

  getMTGCards() {
    return this.http.get(this.apiUrl);
  }

  createMTGCard(card: any) {
    return this.http.post(this.apiUrl, card);
  }
}
