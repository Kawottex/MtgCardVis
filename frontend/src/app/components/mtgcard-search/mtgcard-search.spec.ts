import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgcardSearch } from './mtgcard-search';

describe('MtgcardSearch', () => {
  let component: MtgcardSearch;
  let fixture: ComponentFixture<MtgcardSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgcardSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgcardSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
