import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DotfilesComponent } from './dotfiles/dotfiles.component';
import { MinlauComponent } from './minlau/minlau.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DotfilesComponent,
    MinlauComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,

		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatSlideToggleModule,

		FormsModule, 
		ReactiveFormsModule,

		HttpClientModule,
		FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
