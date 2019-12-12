import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },  { path: 'picture-upload', loadChildren: './picture-upload/picture-upload.module#PictureUploadPageModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  { path: 'colors-modal', loadChildren: './colors-modal/colors-modal.module#ColorsModalPageModule' },
  { path: 'clothing', loadChildren: './clothing/clothing.module#ClothingPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
