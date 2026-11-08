import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoMoviPageRoutingModule } from './auto-movi-routing.module';

import { AutoMoviPage } from './auto-movi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoMoviPageRoutingModule
  ],
  declarations: [AutoMoviPage]
})
export class AutoMoviPageModule {}
