import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces/Category";
import {API_URL} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Category[]>(API_URL + 'clothes/categories').pipe().toPromise();
  }
}
