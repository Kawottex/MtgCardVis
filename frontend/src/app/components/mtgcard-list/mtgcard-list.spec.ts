import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgCardListComponent } from './mtgcard-list';

describe('MtgCardListComponent', () => {
  let component: MtgCardListComponent;
  let fixture: ComponentFixture<MtgCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgCardListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
