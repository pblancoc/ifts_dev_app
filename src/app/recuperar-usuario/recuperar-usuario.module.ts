import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarUsuarioPageRoutingModule } from './recuperar-usuario-routing.module';

import { RecuperarUsuarioPage } from './recuperar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarUsuarioPageRoutingModule
  ],
  declarations: [RecuperarUsuarioPage]
})
export class RecuperarUsuarioPageModule {}
