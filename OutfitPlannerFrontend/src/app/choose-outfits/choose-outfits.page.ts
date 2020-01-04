import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {Outfit} from "../interfaces/Outfit";
import {Clothing} from "../interfaces/Clothing";
import {OutfitService} from "../services/outfit.service";
import {Category} from "../interfaces/Category";


@Component({
  selector: 'app-choose-outfits',
  templateUrl: './choose-outfits.page.html',
  styleUrls: ['./choose-outfits.page.scss'],
})
export class ChooseOutfitsPage implements OnInit {

  outfits: Outfit[];
  clothingId: Clothing;
  categoryId: Category;
  errorText: string;

  constructor(private outfitService: OutfitService,private route: ActivatedRoute, private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clothingId = this.router.getCurrentNavigation().extras.state.clothingId;
        this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;

      }
    });
  }
  ngOnInit() {
    this.outfitService.generateOutfit(this.clothingId,this.categoryId).subscribe(data=>{
      this.outfits = data as Outfit[];
    },error1 => {
      this.errorText = error1.error;
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

  save(outfit: Outfit) {
    this.outfitService.save(outfit).subscribe((data)=>{
      alert("Outfit successfully saved!");
    },error1 => {
      alert("Could not save outfit!");
    });
  }
}
