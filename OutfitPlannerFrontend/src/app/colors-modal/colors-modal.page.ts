import { Component, Input, OnInit } from "@angular/core";
import { Color } from "../interfaces/Color";
import { ColorService } from "../services/color.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Clothing } from "../interfaces/Clothing";
import { ModalController, NavParams } from "@ionic/angular";
import { CategoryService } from "../services/category.service";
import { TypeService } from "../services/type.service";
import { Type } from "../interfaces/Type";
import { Category } from "../interfaces/Category";
import { ClothingService } from "../services/clothing.service";

@Component({
  selector: "app-colors-modal",
  templateUrl: "./colors-modal.page.html",
  styleUrls: ["./colors-modal.page.scss"]
})
export class ColorsModalPage implements OnInit {
  @Input()
  clothing: Clothing;

  colors: Color[];
  allColors: string[];
  selectedColors: string[];
  selectedCategories: string[];
  allCategories: string[];
  allTypes: string[];
  selectedType: string;
  types: Type[];
  categories: Category[];

  public form: FormGroup = this.formBuilder.group({
    color: [null, Validators.required],
    category: [null, Validators.required],
    type: [null, Validators.required]
  });

  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    private categoryService: CategoryService,
    private typeService: TypeService,
    private clothingService: ClothingService
  ) {}

  async ngOnInit() {
    this.colors = await this.colorService.getAll();
    this.categories = await this.categoryService.getAll();
    this.types = await this.typeService.getAll();

    this.allColors = this.colors.map(color => color.name);
    this.selectedColors = this.clothing.colors.map(color => color.name);
    this.selectedCategories = this.clothing.categories.map(
      category => category.name
    );
    this.allCategories = this.categories.map(category => category.name);
    this.selectedType = this.clothing.type.name;
    this.allTypes = this.types.map(type => type.name);

    this.form.get("color").setValue(this.selectedColors);
    this.form.get("category").setValue(this.selectedCategories);
    this.form.get("type").setValue(this.selectedType);
  }

  isSelected(color) {
    return this.selectedColors.includes(color);
  }
  isSelected2(category) {
    return this.selectedCategories.includes(category);
  }
  isSelected3(type) {
    return this.selectedType == type;
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  async saveChanges() {
    const filteredCategories = this.categories.filter(x =>
      this.form.get("category").value.includes(x.name)
    );
    const filteredColors = this.colors.filter(x =>
      this.form.get("color").value.includes(x.name)
    );
    const filteredType = this.types.filter(
      x => this.form.get("type").value == x.name
    );
    this.clothing.categories = filteredCategories;
    this.clothing.colors = filteredColors;
    this.clothing.type = filteredType[0];
    try {
      await this.clothingService.change(this.clothing);
      alert("Clothing successfully updated!");
    } catch (e) {
      alert("Clothing could not be updated");
    }
  }
}
