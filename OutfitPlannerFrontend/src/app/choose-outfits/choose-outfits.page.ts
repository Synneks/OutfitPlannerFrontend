import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {Outfit} from "../interfaces/Outfit";
import {Clothing} from "../interfaces/Clothing";
import {OutfitService} from "../services/outfit.service";
import {Category} from "../interfaces/Category";
import {AlertController} from "@ionic/angular";


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
  showSpinner: boolean = true;


    constructor(private outfitService: OutfitService, private route: ActivatedRoute, private router: Router, private alertCtrl: AlertController
    ) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.clothingId = this.router.getCurrentNavigation().extras.state.clothingId;
                this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;

            }
        });
    }

    async ngOnInit() {
        await this.outfitService.generateOutfit(this.clothingId, this.categoryId).subscribe(data => {
            this.showSpinner = false;
            this.outfits = data as Outfit[];
        }, error1 => {
            this.showSpinner = false;
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

    async save(outfit: Outfit) {
        let alert = await this.alertCtrl.create({
            header: 'Save outfit',
            inputs: [
                {
                    name: 'outfitName',
                    placeholder: 'Outfit name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: (data) => {

                        console.log(data);
                        outfit.name = data.outfitName;
                        this.outfitService.save(outfit).subscribe((response) => {
                            console.log(response)
                        }, error1 => {
                            console.log(error1);
                        });
                    }
                }
            ]
        });
        alert.present();
    }
}
