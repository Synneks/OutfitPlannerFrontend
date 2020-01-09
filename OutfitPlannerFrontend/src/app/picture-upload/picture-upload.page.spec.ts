import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PictureUploadPage } from "./picture-upload.page";

describe("PictureUploadPage", () => {
  let component: PictureUploadPage;
  let fixture: ComponentFixture<PictureUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureUploadPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
