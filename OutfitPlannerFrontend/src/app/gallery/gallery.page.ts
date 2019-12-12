import { Component, OnInit } from '@angular/core';
import {Clothing} from "../interfaces/Clothing";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../constants";
import {Category} from "../interfaces/Category";
import {Color} from "../interfaces/Color";
import {Type} from "../interfaces/Type";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {TypeService} from "../services/type.service";
import {ClothingService} from "../services/clothing.service";
import {ColorService} from "../services/color.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  clothes: Clothing[];
  categories: Category[];
  colors: Color[];
  types: Type[];

  filteredClothes: Clothing[];

  public form: FormGroup = this.formBuilder.group({
    color:[null, Validators.required],
    category:[null, Validators.required],
    type:[null, Validators.required]
  });

  constructor(public formBuilder:FormBuilder,public categoryService: CategoryService, public typeService: TypeService,
              public clothingService: ClothingService, public colorService:ColorService, private router: Router) { }

  async ngOnInit() {
    this.clothes = await this.clothingService.getAll();
    this.filteredClothes = this.clothes;
    this.categories = await this.categoryService.getAll();
    this.colors = await this.colorService.getAll();
    this.types = await this.typeService.getAll();

    this.form.valueChanges.subscribe((formData) => {
      this.search(formData.color, formData.category, formData.type);
    });
  }

  search(color, category, type){
    let clothes = this.clothes;
    if(type) {
     clothes = clothes.filter( cloth => cloth.type.id == type.id );
    }
    if(category) {
      clothes = clothes.filter( cloth => cloth.categories.find( cat => cat.id === category.id) );
    }
    if(color) {
     clothes = clothes.filter( cloth => cloth.colors.find( col => col.id === color.id) );
    }
    this.filteredClothes = clothes;
  }

  goToClothingPage(clothing){
    let navigationExtras: NavigationExtras = {
      state: {
        clothing: clothing
      }
    };
    this.router.navigate(['/clothing'],navigationExtras)
  }
}
