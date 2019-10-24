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

  constructor(private camera: Camera, public httpClient:HttpClient, public formBuilder: FormBuilder) { }

  ngOnInit() {
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

    categories: Category[] = [{
        id: 1,
        name:"category1",
    },{
        id: 2,
        name:"category2"
    }];

    colors: Color[] = [{
        id: 1,
        name:"color1",
        r:123,
        g:456,
        b:789
    },
        {
        id: 2,
        name:"color2",
        r:123,
        g:456,
        b:789
    }];

    types: Type[] =[{
        id: 1,
        name: "type1"
    },{
        id: 2,
        name: "type2"
    }];

    uploadPhoto() {


        let clothing: Clothing ={
            id: 2,
            picture: this.base64Image,
            type: this.types[0],
            colors: this.colors,
            categories: this.categories
        };
        this.httpClient.post("http://192.168.100.228:8080/users/1/clothes",clothing)
            .subscribe(data=>{
              //console.log(data);
            }, error => {
              console.log(error);
            })

  }

    public form: FormGroup = this.formBuilder.group({
        color:[null, Validators.required],
        category:[null, Validators.required],
        type:[null, Validators.required]
    });

  log(){
      const {color, category, type} = this.form.value;
      console.log(color);
      console.log(category);
      console.log(type);
  }

}
