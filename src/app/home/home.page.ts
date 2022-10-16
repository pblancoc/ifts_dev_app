import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';







@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile = null;

  constructor(
   
    private authService: AuthService,
    private router: Router,
    
    
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

  async navegarAClubesJazz() {
    console.log('redirigiendo a clubes de jazz')
    this.router.navigateByUrl('clubes-jazz', { replaceUrl: true });
 }
 
}
