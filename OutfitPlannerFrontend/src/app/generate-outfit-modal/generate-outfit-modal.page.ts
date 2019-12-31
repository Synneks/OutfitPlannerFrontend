import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Clothing} from "../interfaces/Clothing";
import {ModalController} from "@ionic/angular";
import {OutfitService} from "../services/outfit.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-generate-outfit-modal',
  templateUrl: './generate-outfit-modal.page.html',
  styleUrls: ['./generate-outfit-modal.page.scss'],
})
export class GenerateOutfitModalPage implements OnInit {

  @Input()
  clothing: Clothing;

  public form: FormGroup = this.formBuilder.group({
    category:[null, Validators.required],
  });


  constructor(private formBuilder: FormBuilder, private modalController: ModalController,
              private outfitService:OutfitService, private router: Router) { }

  ngOnInit() {
  }


  async generateOutfit() {
    const {category} = this.form.value;
    const outfits = await this.outfitService.generateOutfit(this.clothing.id,category.id);
    //const outfits = await this.outfitService.getAll();
    let navigationExtras: NavigationExtras = {
      state: {
        outfits: outfits
      }
    };
    this.dismissModal();
    this.router.navigate(['/choose-outfits'],navigationExtras)
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

}
