import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { OutfitGalleryPage } from "./outfit-gallery.page";

const routes: Routes = [
  {
    path: "",
    component: OutfitGalleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OutfitGalleryPage]
})
export class OutfitGalleryPageModule {}
