import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../constants";
import {Observable} from "rxjs";
import {Outfit} from "../interfaces/Outfit";

@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  constructor(private httpClient: HttpClient) {}

  generateOutfit(clothingId,categoryId):Observable<Outfit[]>{
    return this.httpClient.get<Outfit[]>(API_URL+'outfits/generateoutfit/clothing/'+clothingId+'category/'+categoryId);
  }
}
