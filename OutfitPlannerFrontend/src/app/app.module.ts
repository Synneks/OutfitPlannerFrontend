import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { Camera } from "@ionic-native/camera/ngx";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user.service";
import { ColorsModalPageModule } from "./colors-modal/colors-modal.module";
import { GenerateOutfitModalPageModule } from "./generate-outfit-modal/generate-outfit-modal.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    ColorsModalPageModule,
    GenerateOutfitModalPageModule
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
