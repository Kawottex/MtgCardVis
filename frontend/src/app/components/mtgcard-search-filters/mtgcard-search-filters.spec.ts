import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgcardSearchFilters } from './mtgcard-search-filters';

describe('MtgcardSearchFilters', () => {
  let component: MtgcardSearchFilters;
  let fixture: ComponentFixture<MtgcardSearchFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgcardSearchFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgcardSearchFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
