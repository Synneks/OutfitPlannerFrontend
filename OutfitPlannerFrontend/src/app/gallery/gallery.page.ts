import { Component, OnInit } from '@angular/core';
import {Clothing} from "../interfaces/Clothing";
import {take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  clothes: Clothing[];

  constructor(public httpClient:HttpClient) { }

  async ngOnInit() {
    this.clothes = await this.httpClient.get<Clothing[]>('http://192.168.100.228:8080/users/1/clothes').pipe().toPromise();

  }

}
