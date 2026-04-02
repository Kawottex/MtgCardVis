import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgCardSearchComponent } from './mtgcard-search';

describe('MtgCardSearchComponent', () => {
  let component: MtgCardSearchComponent;
  let fixture: ComponentFixture<MtgCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgCardSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgCardSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
