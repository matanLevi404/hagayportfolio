import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { ProfilePicComponent } from './comps/profile-pic/profile-pic.component';
import { AboutComponent } from './sections/about/about.component';
import { SocialComponent } from './comps/social/social.component';
import { SubTitlesComponent } from './comps/sub-titles/sub-titles.component';
import { TitleComponent } from './comps/title/title.component';
import { MenuComponent } from './comps/menu/menu.component';
import { MyWorkComponent } from './sections/my-work/my-work.component';

import { SwiperModule } from 'swiper/angular';
import { SwiperContainerComponent } from './comps/my-work-comps/swiper-container/swiper-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePicComponent,
    AboutComponent,
    SocialComponent,
    SubTitlesComponent,
    TitleComponent,
    MenuComponent,
    MyWorkComponent,
    SwiperContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
