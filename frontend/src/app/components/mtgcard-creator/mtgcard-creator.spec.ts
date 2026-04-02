import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgCardCreatorComponent } from './mtgcard-creator';

describe('MtgCardCreatorComponent', () => {
  let component: MtgCardCreatorComponent;
  let fixture: ComponentFixture<MtgCardCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgCardCreatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgCardCreatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
