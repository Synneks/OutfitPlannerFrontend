import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Color } from "../interfaces/Color";
import { API_URL } from "../constants";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Color[]>(API_URL + "clothes/colors")
      .pipe()
      .toPromise();
  }
}
