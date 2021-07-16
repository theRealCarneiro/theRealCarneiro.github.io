import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotfilesComponent } from './dotfiles/dotfiles.component';
import { MinlauComponent } from './minlau/minlau.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DotfilesComponent,
    MinlauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		MatToolbarModule,
		MatButtonModule,
		MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
