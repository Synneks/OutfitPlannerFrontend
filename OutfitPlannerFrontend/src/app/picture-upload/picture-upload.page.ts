import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Clothing} from "../interfaces/Clothing";
import {Type} from "../interfaces/Type";
import {Category} from "../interfaces/Category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {TypeService} from "../services/type.service";
import {ClothingService} from "../services/clothing.service";


@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.page.html',
  styleUrls: ['./picture-upload.page.scss'],
})
export class PictureUploadPage implements OnInit {

  base64Image:string;
  categories: Category[];
  types: Type[];
  placeholderPictureUrl: string = "https://earthrider.beer/wp-content/uploads/2017/09/placeholder-picture-large-opt.png";

  constructor(private camera: Camera, public formBuilder: FormBuilder,
              public categoryService: CategoryService, public typeService: TypeService,
              public clothingService: ClothingService
    ) { }

  public form: FormGroup = this.formBuilder.group({
      category:[null, Validators.required],
      type:[null, Validators.required]
  });

  async ngOnInit() {
      this.categories = await this.categoryService.getAll();
      this.types = await this.typeService.getAll();
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
      this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }

  openGallery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }

  async uploadPhoto() {
      const {category, type} = this.form.value;
      let clothing: Clothing ={
          id: 0,
          picture: this.base64Image,
          type: type,
          colors: null,
          categories: category
      };
      this.clothingService.save(clothing).subscribe(data=>{
          alert("clothing successfully added!")
      }, error => {
          console.log(error);
      })



  }


}
