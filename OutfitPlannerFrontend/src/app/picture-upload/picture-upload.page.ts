import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.page.html',
  styleUrls: ['./picture-upload.page.scss'],
})
export class PictureUploadPage implements OnInit {

  base64Image:string;

  constructor(private camera: Camera, public httpClient:HttpClient) { }

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
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
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
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }


  uploadPhoto() {

    console.log("aici");

    let clothing: Clothing ={
      id: 1,
      picture: this.base64Image
    };
    this.httpClient.post("http://192.168.100.227:8080/clothes",clothing)
        .subscribe(data=>{
          console.log(data);
        }, error => {
          console.log(error);
        })
  }

  getPhoto() {

  }
}
