import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubesJazzPageRoutingModule } from './clubes-jazz-routing.module';

import { ClubesJazzPage } from './clubes-jazz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubesJazzPageRoutingModule
  ],
  declarations: [ClubesJazzPage]
})
export class ClubesJazzPageModule {}
