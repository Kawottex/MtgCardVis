import { Component, signal } from '@angular/core';
import { MtgCardService } from '../../services/mtgcard.service';
import { MTGCard, MTGCardFilters } from '@mtgcardvis/shared';
import { MtgCardListComponent } from '../mtgcard-list/mtgcard-list';
import { MtgCardSearchFiltersComponent } from '../mtgcard-search-filters/mtgcard-search-filters';
import { MtgCardCreatorComponent } from '../mtgcard-creator/mtgcard-creator';

@Component({
  selector: 'app-mtgcard-search',
  imports: [MtgCardListComponent, MtgCardSearchFiltersComponent, MtgCardCreatorComponent],
  templateUrl: './mtgcard-search.html',
  styleUrl: './mtgcard-search.scss',
  standalone: true,
})
export class MtgCardSearchComponent {
  /** Signal : compatible zoneless — la réponse HTTP met bien à jour la liste au 1er clic. */
  outCards = signal<MTGCard[]>([]);

  constructor(private mtgCardService: MtgCardService) {}

  onFiltersApplied(filters: MTGCardFilters) {
    this.mtgCardService.getMTGCards(filters).subscribe((data) => {
      this.outCards.set(data);
    });
  }
}
