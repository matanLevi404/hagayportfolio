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
import { HighlightsComponent } from './comps/my-work-comps/highlights/highlights.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    HighlightsComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
