import { ShoppingItemsService } from './../services/shopping-items.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string;

  constructor(
    private shoppingService: ShoppingItemsService,
    private alertController: AlertController
  ) {}

  addItem(){
    console.log(this.item);

    if(this.item && this.item != ''){
      if(!this.shoppingService.exitsItem(this.item)){
        this.shoppingService.addItem(this.item);
        this.item = '';
        console.log(this.shoppingService.items);
        //mensaje exito
        this.alertSuccess();
      }else{
        //error existe
        this.alertErrorExists();
      }
    }else{
      //error item vacio
      this.alertErrorEmpty();
    }
  }

  async alertSuccess() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Item añadido',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async alertErrorExists() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El item existe',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async alertErrorEmpty() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Debes escribir un item',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
