import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mtgcard-search-filters',
  imports: [FormsModule],
  templateUrl: './mtgcard-search-filters.html',
  styleUrl: './mtgcard-search-filters.scss',
  standalone: true,
})
export class MtgCardSearchFiltersComponent {
  @Output() filtersApplied = new EventEmitter<any>();
  name: string = '';

  applyFilters() {
    const filters = {
      name: this.name
    };
    this.filtersApplied.emit(filters);
  }
}