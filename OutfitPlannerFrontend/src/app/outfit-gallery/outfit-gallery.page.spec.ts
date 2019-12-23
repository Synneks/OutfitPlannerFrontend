import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitGalleryPage } from './outfit-gallery.page';

describe('OutfitGalleryPage', () => {
  let component: OutfitGalleryPage;
  let fixture: ComponentFixture<OutfitGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitGalleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
