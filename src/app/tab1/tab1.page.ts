import { AlertController, MenuController } from '@ionic/angular';
import { ShoppingItemsService } from './../services/shopping-items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public shoppingService: ShoppingItemsService,
    private alertController: AlertController,
    private menuController: MenuController
  ) {}

  async removeItem(item: string) {
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      message: "¿estas seguro que queres eliminar el item?",
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingService.removeItem(item);
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
          }
        },
      ],
    });

    await alert.present();
  }  

  onRenderItems($event){
    console.log($event);
    const item = this.shoppingService.items.splice($event.detail.from, 1)[0];
    this.shoppingService.items.splice($event.detail.to, 0, item);
    $event.detail.complete();
    console.log(this.shoppingService.items);
  }

  async removeAll(){
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      message: "¿estas seguro que queres eliminar todos los items?",
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingService.removeAllItems();
            this.menuController.close();
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
            this.menuController.close();
          }
        },
      ],
    });

    await alert.present();
  }
}
