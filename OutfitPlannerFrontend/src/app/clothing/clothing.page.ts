import { Component, OnInit } from "@angular/core";
import { Clothing } from "../interfaces/Clothing";
import { ModalController } from "@ionic/angular";
import { ColorsModalPage } from "../colors-modal/colors-modal.page";
import { ActivatedRoute, Router } from "@angular/router";
import { GenerateOutfitModalPage } from "../generate-outfit-modal/generate-outfit-modal.page";

@Component({
  selector: "app-clothing",
  templateUrl: "./clothing.page.html",
  styleUrls: ["./clothing.page.scss"]
})
export class ClothingPage implements OnInit {
  clothing: Clothing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clothing = this.router.getCurrentNavigation().extras.state.clothing;
      }
    });
  }

  ngOnInit() {}

  editProperties() {
    this.presentPropertiesModal().then();
  }

  generateOutfit() {
    this.presentGenerateOutfitModal().then();
  }

  currentModal = null;

  async presentPropertiesModal() {
    const modal = await this.modalController.create({
      component: ColorsModalPage,
      componentProps: {
        clothing: this.clothing
      }
    });
    this.currentModal = modal;
    return await this.currentModal.present();
  }

  async presentGenerateOutfitModal() {
    const modal = await this.modalController.create({
      component: GenerateOutfitModalPage,
      componentProps: {
        clothing: this.clothing
      }
    });
    this.currentModal = modal;
    return await this.currentModal.present();
  }
}
