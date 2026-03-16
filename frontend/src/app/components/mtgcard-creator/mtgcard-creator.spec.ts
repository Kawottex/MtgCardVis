import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgcardCreator } from './mtgcard-creator';

describe('MtgcardCreator', () => {
  let component: MtgcardCreator;
  let fixture: ComponentFixture<MtgcardCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgcardCreator],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgcardCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
