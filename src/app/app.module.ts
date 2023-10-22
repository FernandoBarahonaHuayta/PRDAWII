import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiderBarComponent } from './components/sider-bar/sider-bar.component';
import { CarruselbarComponent } from './components/carruselbar/carruselbar.component';
import { GalleryPicturesComponent } from './components/gallery-pictures/gallery-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SiderBarComponent,
    CarruselbarComponent,
    GalleryPicturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
