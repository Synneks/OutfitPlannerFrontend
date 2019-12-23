import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChooseOutfitsPage } from './choose-outfits.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseOutfitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChooseOutfitsPage]
})
export class ChooseOutfitsPageModule {}
