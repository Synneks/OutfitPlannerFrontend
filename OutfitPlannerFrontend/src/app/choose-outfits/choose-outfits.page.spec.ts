import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOutfitsPage } from './choose-outfits.page';

describe('ChooseOutfitsPage', () => {
  let component: ChooseOutfitsPage;
  let fixture: ComponentFixture<ChooseOutfitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseOutfitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOutfitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
