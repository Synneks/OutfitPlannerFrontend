import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GenerateOutfitModalPage } from './generate-outfit-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateOutfitModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenerateOutfitModalPage]
})
export class GenerateOutfitModalPageModule {}
