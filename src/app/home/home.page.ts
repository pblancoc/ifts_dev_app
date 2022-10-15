import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
//import { AvatarService } from '../services/avatar.service';

// Nota Pame --> importé nueva página a la que quiero navegar:
//import { ClubesJazzPage } from '../clubes-jazz/clubes-jazz.page';

// Nota Pame --> importé NavController para poder movernos entre paginas más facilmente:
import { AlertController, LoadingController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile = null;

  constructor(
    //private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    //private loadingController: LoadingController,
    //private alertController: AlertController,
    //public navCtrl: NavController
    private loadingController: LoadingController,
    private alertController: AlertController
    
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true })
  }

  async changeImage() {}

  option = {
    initialSlide: 1,
    speed: 400,
    autoplay:true,
  }

//   navegarAClubesJazz() {
//     console.log('tratando de llegar a clubes de jazz')
//     this.router.navigateByUrl('clubes-jazz', { replaceUrl: true });
//  }


  async navegarAClubesJazz() {
    console.log('tratando de llegar a clubes de jazz')
    await this.authService.navegar();
    this.router.navigateByUrl('clubes-jazz', { replaceUrl: true });
 }


//  async login() {
//   const loading = await this.loadingController.create();
//   await loading.present();

//   const user = await this.authService.login(this.credentials.value);
//   await loading.dismiss();

//   if (user) {
//     this.router.navigateByUrl('/home', { replaceUrl: true });
//   } else {
//     this.showAlert('Falló el login', 'Por favor intente de nuevo');
//   }
// }

async showAlert(header, message) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}
 
}
