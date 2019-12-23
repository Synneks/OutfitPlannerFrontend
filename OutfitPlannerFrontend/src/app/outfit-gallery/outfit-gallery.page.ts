import { Component, OnInit } from '@angular/core';
import {OutfitService} from "../services/outfit.service";
import {Outfit} from "../interfaces/Outfit";
import {Clothing} from "../interfaces/Clothing";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-outfit-gallery',
  templateUrl: './outfit-gallery.page.html',
  styleUrls: ['./outfit-gallery.page.scss'],
})
export class OutfitGalleryPage implements OnInit {

  outfits: Outfit[];

  constructor(private outfitService:OutfitService,  private router: Router) { }

  ngOnInit() {
    this.outfitService.getAll().subscribe(data=>{
      this.outfits= data as Outfit[];
    })
  }

  goToClothingPage(clothing: Clothing) {
    let navigationExtras: NavigationExtras = {
      state: {
        clothing: clothing
      }
    };
    this.router.navigate(['/clothing'],navigationExtras)
  }

}
