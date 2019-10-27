import { Component, OnInit } from '@angular/core';
import {Clothing} from "../interfaces/Clothing";
import {take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../constants";
import {Category} from "../interfaces/Category";
import {Color} from "../interfaces/Color";
import {Type} from "../interfaces/Type";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(public httpClient:HttpClient, public formBuilder:FormBuilder) { }

  async ngOnInit() {
    const loggedUser = localStorage.getItem('user');
    const user = JSON.parse(loggedUser);
    this.clothes = await this.httpClient.get<Clothing[]>(API_URL+'/users/+'+user.id+'/clothes').pipe().toPromise();
    this.filteredClothes = this.clothes;
    this.categories = await this.httpClient.get<Category[]>(API_URL + 'clothes/categories').pipe().toPromise();
    this.colors = await this.httpClient.get<Color[]>(API_URL + 'clothes/colors').pipe().toPromise();
    this.types = await this.httpClient.get<Type[]>(API_URL + 'clothes/types').pipe().toPromise();

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

}
