import { Component, OnInit } from '@angular/core';
import {Clothing} from "../interfaces/Clothing";
import {ModalController} from "@ionic/angular";
import {ColorsModalPage} from "../colors-modal/colors-modal.page";
import {ActivatedRoute, Router} from "@angular/router";
import {OutfitService} from "../services/outfit.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../interfaces/Category";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.page.html',
  styleUrls: ['./clothing.page.scss'],
})
export class ClothingPage implements OnInit {

  clothing: Clothing;

  constructor(private route: ActivatedRoute, private router: Router, public modalController:ModalController,
              private outfitService: OutfitService, private formBuilder:FormBuilder) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clothing = this.router.getCurrentNavigation().extras.state.clothing;
      }
    });
  }

  ngOnInit() {}

  editProperties(){
    this.presentModal().then();
  }

  currentModal = null;

  async presentModal() {
    console.log("in present modal",this.clothing);
    const modal = await this.modalController.create({
      component: ColorsModalPage,
      componentProps: {
        clothing: this.clothing
      }
    });
    this.currentModal = modal;
    return await this.currentModal.present();
  }

  selectedCategory: Category;

  generateOutfit(){
    //this.outfitService.generateOutfit(this.clothing.id, this.selectedCategory.id);
  }

  setCategory(category: Category) {
    this.selectedCategory = category;
  }
}
