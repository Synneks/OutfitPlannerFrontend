import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {HttpClient} from "@angular/common/http";
import {Clothing} from "../interfaces/Clothing";
import {Type} from "../interfaces/Type";
import {Color} from "../interfaces/Color";
import {Category} from "../interfaces/Category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.page.html',
  styleUrls: ['./picture-upload.page.scss'],
})
export class PictureUploadPage implements OnInit {

  base64Image:string;
  categories: Category[];
  colors: Color[];
  types: Type[];

  constructor(private camera: Camera, public httpClient:HttpClient, public formBuilder: FormBuilder) { }

  public form: FormGroup = this.formBuilder.group({
      color:[null, Validators.required],
      category:[null, Validators.required],
      type:[null, Validators.required]
  });

  async ngOnInit() {
      this.categories = await this.httpClient.get<Category[]>('http://192.168.100.228:8080/categories').pipe().toPromise();
      this.colors = await this.httpClient.get<Color[]>('http://192.168.100.228:8080/colors').pipe().toPromise();
      this.types = await this.httpClient.get<Type[]>('http://192.168.100.228:8080/types').pipe().toPromise();
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

  uploadPhoto() {
      const {color, category, type} = this.form.value;
      let clothing: Clothing ={
          id: 0,
          picture: this.base64Image,
          type: type,
          colors: color,
          categories: category
      };
      this.httpClient.post("http://192.168.100.228:8080/users/1/clothes",clothing)
          .subscribe(data=>{
              alert("clothing successfully added!")
          }, error => {
              console.log(error);
          })
  }


}
