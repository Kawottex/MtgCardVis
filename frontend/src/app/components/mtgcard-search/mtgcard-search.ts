import { Component } from '@angular/core';
import { MtgCardService } from '../../services/mtgcard.service';
import { MTGCardFilters } from '@mtgcardvis/shared';
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
  outCards = [];

  constructor(private mtgCardService: MtgCardService) {}

  onFiltersApplied(filters: MTGCardFilters) {
    this.mtgCardService.getMTGCards(filters).subscribe((data: any) => {
      this.outCards = data;
      console.log(data);
    });
  }
}
