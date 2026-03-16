import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgcardList } from './mtgcard-list';

describe('MtgcardList', () => {
  let component: MtgcardList;
  let fixture: ComponentFixture<MtgcardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgcardList],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgcardList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
