import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../constants";
import {Observable} from "rxjs";
import {Outfit} from "../interfaces/Outfit";

@Injectable({
    providedIn: 'root'
})
export class OutfitService {

    constructor(private httpClient: HttpClient) {
    }

    generateOutfit(clothingId, categoryId): Observable<Outfit[]> {
        const loggedUser = localStorage.getItem('user');
        const user = JSON.parse(loggedUser);
        console.log(API_URL + 'clothes/generateOutfits/user/' + user.id + '/clothing/' + clothingId + '/category/' + categoryId)
        return this.httpClient.get<Outfit[]>(API_URL + 'clothes/generateOutfits/user/' + user.id + '/clothing/' + clothingId + '/category/' + categoryId);
    }

    getAll(): Observable<Outfit[]> {
        const loggedUser = localStorage.getItem('user');
        const user = JSON.parse(loggedUser);
        return this.httpClient.get<Outfit[]>(API_URL + 'users/' + user.id + '/outfits');
    }

    save(outfit: Outfit): Observable<Outfit> {
        const loggedUser = localStorage.getItem('user');
        const user = JSON.parse(loggedUser);
        return this.httpClient.post<Outfit>(API_URL + 'users/' + user.id + '/outfits', outfit);
    }
}
