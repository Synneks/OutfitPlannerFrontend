import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GenerateOutfitModalPage } from "./generate-outfit-modal.page";

describe("GenerateOutfitModalPage", () => {
  let component: GenerateOutfitModalPage;
  let fixture: ComponentFixture<GenerateOutfitModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateOutfitModalPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOutfitModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
