import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {Outfit} from "../interfaces/Outfit";
import {Clothing} from "../interfaces/Clothing";
import {OutfitService} from "../services/outfit.service";

@Component({
  selector: 'app-choose-outfits',
  templateUrl: './choose-outfits.page.html',
  styleUrls: ['./choose-outfits.page.scss'],
})
export class ChooseOutfitsPage implements OnInit {

  outfits: Outfit[];

  constructor(private outfitService: OutfitService,private route: ActivatedRoute, private router: Router
  ) {
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.outfits = this.router.getCurrentNavigation().extras.state.outfits;
    //   }
    // });
  }
  async ngOnInit() {
    this.outfits = await this.outfitService.getAll();
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
    
  }
}
