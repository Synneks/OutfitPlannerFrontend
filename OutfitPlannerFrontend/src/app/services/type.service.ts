import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Type} from "../interfaces/Type";
import {API_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Type[]>(API_URL + 'clothes/types').pipe().toPromise();
  }
}
