import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Clothing} from "../interfaces/Clothing";
import {API_URL} from "../constants";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  constructor(private httpClient: HttpClient) { }

  save(clothing): Observable<Clothing>{
    const loggedUser = localStorage.getItem('user');
    const user = JSON.parse(loggedUser);
    return this.httpClient.post<Clothing>(API_URL + "users/"+user.id+"/clothes",clothing);
  }

  getAll():Observable<Clothing[]>{
    const loggedUser = localStorage.getItem('user');
    const user = JSON.parse(loggedUser);
    return this.httpClient.get<Clothing[]>(API_URL+'users/'+user.id+'/clothes');
  }

  change(clothing){
    const loggedUser = localStorage.getItem('user');
    const user = JSON.parse(loggedUser);
    console.log(clothing);
    return this.httpClient.put<Clothing>(API_URL+'users/'+user.id+'/clothes/'+clothing.id,clothing).pipe(take(1)).toPromise();
  }
}
