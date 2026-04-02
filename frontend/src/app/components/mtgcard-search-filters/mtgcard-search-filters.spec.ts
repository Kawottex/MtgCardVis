import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgCardSearchFiltersComponent } from './mtgcard-search-filters';

describe('MtgCardSearchFiltersComponent', () => {
  let component: MtgCardSearchFiltersComponent;
  let fixture: ComponentFixture<MtgCardSearchFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgCardSearchFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgCardSearchFiltersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
