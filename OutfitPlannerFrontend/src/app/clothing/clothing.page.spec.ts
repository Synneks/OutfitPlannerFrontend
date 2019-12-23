import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingPage } from './clothing.page';

describe('ClothingPage', () => {
  let component: ClothingPage;
  let fixture: ComponentFixture<ClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
